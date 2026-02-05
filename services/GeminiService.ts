
import { GoogleGenAI, LiveServerMessage, Chat, Modality } from "@google/genai";

// ==========================================
// SHARED AUDIO UTILS
// ==========================================

let sharedAudioContext: AudioContext | null = null;
let currentSelectedVoice = 'Kore';
let currentSelectedDialect = 'All';

export const setMuallimVoice = (voiceName: string) => {
  currentSelectedVoice = voiceName;
};

export const getMuallimVoice = () => currentSelectedVoice;

export const setMuallimDialect = (dialect: string) => {
  currentSelectedDialect = dialect;
};

export const getMuallimDialect = () => currentSelectedDialect;

/**
 * Ensures a single AudioContext is shared across the application.
 */
export const initializeAudio = async (): Promise<AudioContext | null> => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!sharedAudioContext || sharedAudioContext.state === 'closed') {
      sharedAudioContext = new AudioContextClass();
    }
    if (sharedAudioContext.state === 'suspended') {
      await sharedAudioContext.resume();
    }
    return sharedAudioContext;
  } catch (e) {
    console.error("Failed to initialize audio context:", e);
    return null;
  }
};

/**
 * Standard base64 decoding to Uint8Array.
 */
function decodeBase64(base64: string): Uint8Array {
  const binaryString = atob(base64.replace(/[\n\r\s]/g, ''));
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * Encodes Uint8Array PCM data to base64.
 */
function encodePCM(bytes: Uint8Array): string {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Decodes raw PCM bytes into an AudioBuffer.
 */
async function decodePCM(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer, data.byteOffset, data.byteLength / 2);
  const audioBuffer = ctx.createBuffer(1, dataInt16.length, sampleRate);
  const channelData = audioBuffer.getChannelData(0);
  for (let i = 0; i < dataInt16.length; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return audioBuffer;
}

// ==========================================
// GEMINI LIVE SESSION (Real-time Bidirectional)
// ==========================================

let currentLiveSessionCleanup: (() => void) | null = null;

export const endLiveSession = () => {
  if (currentLiveSessionCleanup) {
    currentLiveSessionCleanup();
    currentLiveSessionCleanup = null;
  }
};

/**
 * Establishes a real-time voice session using Gemini Live API.
 */
export const startLiveSession = async (
  currentWordArabic: string, 
  currentWordEnglish: string,
  onUserTranscript: (text: string) => void,
  onModelTranscript: (text: string) => void,
  onClose: () => void,
  onError: (errorType?: string) => void
) => {
  endLiveSession();

  try {
    // 1. Request Microphone early to catch permission errors before starting context
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err: any) {
      console.warn("Microphone access denied or failed:", err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        onError('PERMISSION_DENIED');
      } else {
        onError('MIC_FAILED');
      }
      return;
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
    const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    
    await inputCtx.resume();
    await outputCtx.resume();

    let nextStartTime = 0;
    const sources = new Set<AudioBufferSourceNode>();
    
    const dialectInstruction = currentSelectedDialect === 'All' 
      ? `The student wants an ALL-ENCOMPASSING linguistic view. Connect this Quranic word to its Modern Standard (MSA) version AND mention usage in common dialects like Egyptian or Khalijee.`
      : `The student is focused on the '${currentSelectedDialect}' linguistic perspective. Bridge the gap between Quranic Arabic and '${currentSelectedDialect}'.`;

    const sessionPromise = ai.live.connect({
      model: 'gemini-2.5-flash-native-audio-preview-09-2025',
      callbacks: {
        onopen: () => {
          const source = inputCtx.createMediaStreamSource(stream);
          const scriptProcessor = inputCtx.createScriptProcessor(2048, 1, 1);
          
          scriptProcessor.onaudioprocess = (e) => {
            const inputData = e.inputBuffer.getChannelData(0);
            const int16 = new Int16Array(inputData.length);
            for (let i = 0; i < inputData.length; i++) {
              int16[i] = inputData[i] * 32768;
            }
            const pcmData = new Uint8Array(int16.buffer);
            const base64 = encodePCM(pcmData);

            sessionPromise.then((session) => {
               session.sendRealtimeInput({ 
                 media: { mimeType: 'audio/pcm;rate=16000', data: base64 } 
               });
            });
          };

          source.connect(scriptProcessor);
          const gainNode = inputCtx.createGain();
          gainNode.gain.value = 0; // Silent node to avoid feedback loops
          scriptProcessor.connect(gainNode);
          gainNode.connect(inputCtx.destination);
          
          currentLiveSessionCleanup = () => {
            sessionPromise.then(s => s.close());
            source.disconnect();
            scriptProcessor.disconnect();
            gainNode.disconnect();
            stream.getTracks().forEach(t => t.stop());
            inputCtx.close().catch(() => {});
            outputCtx.close().catch(() => {});
            sources.forEach(s => { try { s.stop(); } catch(e) {} });
            sources.clear();
          };
        },
        onmessage: async (msg: LiveServerMessage) => {
           if (msg.serverContent?.outputTranscription?.text) {
             onModelTranscript(msg.serverContent.outputTranscription.text);
           }
           if (msg.serverContent?.inputTranscription?.text) {
             onUserTranscript(msg.serverContent.inputTranscription.text);
           }

           const audioData = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
           if (audioData) {
              const bytes = decodeBase64(audioData);
              const buffer = await decodePCM(bytes, outputCtx, 24000);
              nextStartTime = Math.max(nextStartTime, outputCtx.currentTime);
              const source = outputCtx.createBufferSource();
              source.buffer = buffer;
              source.connect(outputCtx.destination);
              source.onended = () => sources.delete(source);
              source.start(nextStartTime);
              nextStartTime += buffer.duration;
              sources.add(source);
           }

           if (msg.serverContent?.interrupted) {
             sources.forEach(s => { try { s.stop(); } catch(e) {} });
             sources.clear();
             nextStartTime = 0;
           }
        },
        onclose: () => onClose(),
        onerror: (e) => {
          console.error("Live Session Error:", e);
          onError('SESSION_ERROR');
        }
      },
      config: {
        responseModalities: [Modality.AUDIO],
        inputAudioTranscription: {},
        outputAudioTranscription: {},
        systemInstruction: `You are 'The Muallim', a world-class Quranic Arabic linguist tutor for the QURANLINGO app. 
        Target word: '${currentWordArabic}' (${currentWordEnglish}). Provide high-ROI insights.
        CONTEXT: ${dialectInstruction}
        Focus: Root Mapping, Mnemonics, Frequency. Speak naturally like a supportive mentor, keep responses under 40s.`,
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: currentSelectedVoice } }
        }
      }
    });

  } catch (error) {
    console.error("Critical failure starting live session:", error);
    onError('CRITICAL_FAILURE');
  }
};

/**
 * Generates a targeted explanation for quiz mistakes.
 */
export const getGrammarExplanation = async (
  questionText: string,
  correctAnswer: string,
  wrongAnswer: string,
  isReverse: boolean
): Promise<string | null> => {
  const cacheKey = `ai_expl_${questionText}_${wrongAnswer}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return cached;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `You are a mentor in the QURANLINGO app. Explain briefly why '${wrongAnswer}' is incorrect compared to '${correctAnswer}' for '${questionText}'. 
    Max 12 words. Be encouraging and focus on the core structural pattern difference.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    const text = response.text?.trim();
    if (text) {
      localStorage.setItem(cacheKey, text);
      return text;
    }
    return null;
  } catch (error) {
    return null;
  }
};

/**
 * Generates sentence building exercises based on a list of words.
 */
export const generateSentenceExercises = async (words: string[]): Promise<string[]> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Create 6 simple, grammatically correct Quranic-style Arabic sentences (Short phrases) using a mix of these words: [${words.join(', ')}]. 
    Format each line strictly as: "Arabic Sentence - English Translation".
    Do not use complex diacritics if not needed, but keep it readable. 
    Ensure the grammar is valid Fusha.
    Return ONLY raw text lines, no JSON or markdown formatting.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });

    const text = response.text?.trim();
    if (!text) return [];

    // Filter and clean lines
    const lines = text.split('\n')
      .map(l => l.replace(/^\d+\.\s*/, '').trim()) // Remove "1. " numbering
      .filter(l => l.includes('-') || l.includes('–')); // Ensure format

    return lines;
  } catch (error) {
    console.error("Failed to generate sentence exercises:", error);
    return [];
  }
};

/**
 * Creates a chat session for a specific word.
 */
export const createMuallimChat = (currentWordArabic: string, currentWordEnglish: string): Chat => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const dialectInstruction = currentSelectedDialect === 'All'
    ? `Linguistic Frame: COMPREHENSIVE (Classical + MSA + Dialects).`
    : `Current Linguistic Frame: ${currentSelectedDialect}.`;

  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are 'The Muallim', an expert mentor for the QURANLINGO app. 
      Help the student master '${currentWordArabic}'. Focus on high-ROI insights: roots, mnemonics, and frequency.
      ${dialectInstruction}`,
    },
  });
};

const audioCache: Record<string, string> = {};
const audioPromises: Record<string, Promise<string | null>> = {};

/**
 * Fetches TTS audio for a given string using Gemini API.
 */
export const getWordAudio = async (text: string): Promise<string | null> => {
  if (!text) return null;
  const cacheKey = `${text}_${currentSelectedVoice}`;
  if (audioCache[cacheKey]) return audioCache[cacheKey];
  if (audioPromises[cacheKey]) return audioPromises[cacheKey];

  const promise = (async () => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text }] }],
        config: {
          responseModalities: [Modality.AUDIO], 
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: currentSelectedVoice }, 
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        audioCache[cacheKey] = base64Audio;
        return base64Audio;
      }
      return null;
    } catch (e) {
      return null;
    }
  })();

  audioPromises[cacheKey] = promise;
  return promise;
};

/**
 * Plays decoded PCM audio from base64 string.
 */
export const playAudio = async (base64Audio: string): Promise<void> => {
  try {
    const ctx = await initializeAudio();
    if (!ctx) return;
    const bytes = decodeBase64(base64Audio);
    const buffer = await decodePCM(bytes, ctx);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
    return new Promise((resolve) => { source.onended = () => resolve(); });
  } catch (e) {
    throw e;
  }
};
