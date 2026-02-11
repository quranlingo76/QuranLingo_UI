
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Mic, Sparkles, Volume2, MicOff, Wifi, MessageCircle, BookOpen, Globe, Bot, Hash, Lightbulb, Loader2, User, ChevronDown, ShieldAlert } from 'lucide-react';
import { ParsedWord } from '../config/types';
import { Chat, GenerateContentResponse } from '@google/genai';
import { createMuallimChat, getWordAudio, playAudio, startLiveSession, endLiveSession, setMuallimVoice, getMuallimVoice } from '../services/GeminiService';

interface MuallimTutorProps {
  currentWord: ParsedWord;
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

const VOICES = [
  { id: 'Kore', label: 'Linguist', description: 'Formal and precise' },
  { id: 'Puck', label: 'Mentor', description: 'Encouraging and warm' },
  { id: 'Charon', label: 'Scholar', description: 'Deep and authoritative' },
  { id: 'Fenrir', label: 'Guide', description: 'Direct and clear' },
  { id: 'Zephyr', label: 'Counselor', description: 'Soft and calm' },
];

const SUGGESTIONS = [
  { id: 'mnemonic', label: '💡 Mnemonic', text: "Can you give me a simple mnemonic or memory trick to remember this word?", icon: Lightbulb },
  { id: 'root', label: '🌱 Root Map', text: "Break this down into its 3-letter root. What other Quranic words come from this root?", icon: Sparkles },
  { id: 'freq', label: '📊 Frequency', text: "How often does this word (or its root) appear in the Quran? Is it a Top 50 word?", icon: Hash },
  { id: 'dialect', label: '🌍 Dialect', text: "How does this word or its root translate into common dialects? Are there interesting shifts in usage?", icon: Globe },
];

const MuallimTutor: React.FC<MuallimTutorProps> = ({ currentWord, isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const [showVoiceMenu, setShowVoiceMenu] = useState(false);
  const [currentVoice, setCurrentVoice] = useState(getMuallimVoice());
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const chat = createMuallimChat(currentWord.arabic, currentWord.english);
      setChatSession(chat);
      setMessages([{
        role: 'model',
        text: `Salaam! I am your Muallim. Let's master "${currentWord.arabic}" together. You can ask me about its root, mnemonics, or how it's used. Tap the mic for a voice conversation!`
      }]);
    } else {
        endLiveSession();
        setIsLive(false);
        setMessages([]);
        setShowVoiceMenu(false);
    }
  }, [isOpen, currentWord]);

  useEffect(() => {
    return () => endLiveSession();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleVoiceChange = (voiceId: string) => {
    setMuallimVoice(voiceId);
    setCurrentVoice(voiceId);
    setShowVoiceMenu(false);
    
    setMessages(prev => [...prev, { role: 'model', text: `Voice changed to ${VOICES.find(v => v.id === voiceId)?.label}.` }]);
    
    if (isLive) {
      toggleLiveSession();
      setTimeout(() => toggleLiveSession(), 500);
    }
  };

  const handleSendMessage = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || !chatSession) return;

    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setInput('');
    setIsTyping(true);

    try {
      setMessages(prev => [...prev, { role: 'model', text: '', isStreaming: true }]);
      const resultStream = await chatSession.sendMessageStream({ message: textToSend });
      
      let fullText = '';
      for await (const chunk of resultStream) {
        const chunkText = (chunk as GenerateContentResponse).text;
        if (chunkText) {
          fullText += chunkText;
          setMessages(prev => {
            const newMsgs = [...prev];
            const lastMsg = newMsgs[newMsgs.length - 1];
            if (lastMsg?.role === 'model' && lastMsg.isStreaming) {
               lastMsg.text = fullText;
            }
            return newMsgs;
          });
        }
      }

      setMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = newMsgs[newMsgs.length - 1];
        if (lastMsg?.role === 'model') lastMsg.isStreaming = false;
        return newMsgs;
      });

    } catch (error) {
      console.error("Muallim Chat Error:", error);
      setMessages(prev => prev.filter(m => !m.isStreaming).concat({ role: 'model', text: "Connection was lost. Please check your internet." }));
    } finally {
      setIsTyping(false);
    }
  };

  const toggleLiveSession = async () => {
    if (isLive) {
        endLiveSession();
        setIsLive(false);
    } else {
        setIsLive(true);
        startLiveSession(
            currentWord.arabic, currentWord.english,
            (text) => setMessages(prev => updateLastTranscript(prev, 'user', text)),
            (text) => setMessages(prev => updateLastTranscript(prev, 'model', text)),
            () => {
              setIsLive(false);
              setMessages(prev => prev.map(m => ({ ...m, isStreaming: false })));
            },
            (errorType) => { 
              setIsLive(false);
              let msg = "Voice session ended.";
              if (errorType === 'PERMISSION_DENIED') {
                msg = "Microphone access is needed for voice mode. Please check your browser permissions.";
              }
              setMessages(prev => [...prev, { role: 'model', text: msg }]);
            }
        );
    }
  };

  const updateLastTranscript = (prev: Message[], role: 'user' | 'model', text: string): Message[] => {
    const last = prev[prev.length - 1];
    if (last && last.role === role && last.isStreaming) {
      const updated = [...prev];
      updated[updated.length - 1] = { ...last, text };
      return updated;
    }
    return [...prev, { role, text, isStreaming: true }];
  };

  const speakResponse = async (text: string) => {
    if (isLive) return;
    try {
      const cleanText = text.replace(/[*_#`]/g, '');
      const audioData = await getWordAudio(cleanText);
      if (audioData) await playAudio(audioData);
    } catch (e) { console.error("TTS Playback Error", e); }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center pointer-events-none p-0 sm:p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px] pointer-events-auto" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white sm:rounded-[2.5rem] rounded-t-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] pointer-events-auto h-full sm:h-[85vh] flex flex-col overflow-hidden border-2 border-duo-border">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b-2 border-duo-border bg-white z-30">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all ${isLive ? 'bg-duo-red animate-pulse' : 'bg-duo-blue'}`}>
               {isLive ? <Wifi className="w-6 h-6 text-white" /> : <Bot className="w-7 h-7 text-white" />}
            </div>
            <div>
              <h3 className="font-black text-[var(--color-text-heading)] text-xl tracking-tight leading-tight">Muallim AI</h3>
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-duo-red animate-pulse' : 'bg-duo-green'}`} />
                <p className="text-[10px] font-black text-duo-gray-dark uppercase tracking-widest">{isLive ? 'Live Connection' : 'Ready to help'}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <button 
                onClick={() => setShowVoiceMenu(!showVoiceMenu)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 border-2 border-duo-border rounded-xl text-gray-600 transition-all active:scale-95"
              >
                <User className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">{VOICES.find(v => v.id === currentVoice)?.label || 'Voice'}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${showVoiceMenu ? 'rotate-180' : ''}`} />
              </button>

              {showVoiceMenu && (
                <div className="absolute right-0 top-full mt-3 w-56 bg-white border-2 border-duo-border rounded-2xl shadow-2xl z-50 overflow-hidden animate-pop">
                  <div className="px-4 py-2 border-b-2 border-duo-border bg-gray-50">
                    <span className="text-[9px] font-black text-duo-gray-dark uppercase tracking-widest">Personalities</span>
                  </div>
                  {VOICES.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => handleVoiceChange(v.id)}
                      className={`w-full text-left px-4 py-3 hover:bg-duo-blue/10 transition-colors flex flex-col gap-0.5 ${currentVoice === v.id ? 'bg-duo-blue/5 border-l-4 border-duo-blue' : ''}`}
                    >
                      <span className="text-xs font-black text-[var(--color-text-heading)]">{v.label}</span>
                      <span className="text-[10px] text-duo-gray-dark font-bold leading-tight">{v.description}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-all active:scale-90">
              <X className="w-8 h-8 text-duo-gray-dark stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white no-scrollbar">
          {messages.map((msg, idx) => {
            const isModel = msg.role === 'model';
            return (
              <div key={idx} className={`flex ${isModel ? 'justify-start' : 'justify-end'} animate-pop`}>
                <div className="relative max-w-[90%]">
                   <div className={`px-5 py-3 text-[16px] leading-relaxed border-2 ${isModel ? 'bg-white border-duo-border text-[var(--color-text-heading)] rounded-3xl rounded-tl-none' : 'bg-duo-blue border-duo-blue-dark text-white rounded-3xl rounded-tr-none font-bold shadow-md'}`}>
                    {msg.text.split('\n').map((line, i) => (
                        <div key={i} className={line.trim().startsWith('-') ? 'pl-4 mb-2 relative before:content-["•"] before:absolute before:left-0 before:text-duo-blue' : 'mb-2 last:mb-0'}>
                            {line}
                        </div>
                    ))}
                    {msg.isStreaming && <Loader2 className="w-4 h-4 animate-spin inline ml-2 opacity-50" />}
                  </div>
                  {isModel && !msg.isStreaming && !isLive && (
                     <button onClick={() => speakResponse(msg.text)} className="mt-2 flex items-center gap-2 px-3 py-1.5 bg-gray-100 border-2 border-duo-border rounded-xl text-duo-blue hover:text-duo-blue-dark transition-all font-black text-[10px] uppercase tracking-widest shadow-sm">
                        <Volume2 className="w-4 h-4" /> Listen
                     </button>
                  )}
                </div>
              </div>
            );
          })}
          
          {isTyping && !isLive && (
             <div className="flex justify-start">
               <div className="bg-white border-2 border-duo-border px-4 py-3 rounded-3xl rounded-tl-none flex gap-1.5 items-center">
                 <div className="w-2 h-2 bg-duo-gray-dark rounded-full animate-bounce" />
                 <div className="w-2 h-2 bg-duo-gray-dark rounded-full animate-bounce [animation-delay:150ms]" />
                 <div className="w-2 h-2 bg-duo-gray-dark rounded-full animate-bounce [animation-delay:300ms]" />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} className="h-4" />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t-2 border-duo-border pb-10 pt-4 px-6">
           <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
             {SUGGESTIONS.map((s) => (
               <button key={s.id} onClick={() => handleSendMessage(s.text)} disabled={isLive || isTyping} className="flex-shrink-0 bg-white hover:bg-gray-50 border-2 border-duo-border rounded-2xl px-5 py-3 text-[11px] font-black text-[var(--color-text-heading)] uppercase tracking-widest transition-all active:translate-y-1 shadow-sm flex items-center gap-2">
                 <s.icon className="w-4 h-4 text-duo-blue" /> {s.label}
               </button>
             ))}
           </div>

           <div className="flex gap-4 items-center">
             <button onClick={toggleLiveSession} className={`w-16 h-16 rounded-2xl transition-all flex-shrink-0 border-b-4 flex items-center justify-center ${isLive ? 'bg-duo-red border-duo-red-dark text-white shadow-xl scale-110' : 'bg-gray-100 border-duo-border text-duo-blue hover:bg-gray-200 active:translate-y-1'}`}>
               {isLive ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
             </button>
             
             <div className="flex-1 bg-gray-100 rounded-3xl flex items-center px-6 py-1 focus-within:ring-2 focus-within:ring-duo-blue focus-within:bg-white transition-all border-2 border-transparent">
               <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} disabled={isLive} placeholder={isLive ? "Listening..." : "Ask Muallim..."} className="flex-1 bg-transparent py-4 focus:outline-none text-lg font-bold text-[var(--color-text-heading)] placeholder-duo-gray-dark" />
               <button onClick={() => handleSendMessage()} disabled={!input.trim() || isLive} className={`ml-4 p-3 rounded-xl transition-all ${input.trim() ? 'bg-duo-blue text-white shadow-md active:scale-90' : 'bg-gray-200 text-gray-400'}`}>
                 <Send className="w-6 h-6" />
               </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MuallimTutor;

