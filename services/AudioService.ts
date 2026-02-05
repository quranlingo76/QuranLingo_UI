// ==========================================
// LOCAL AUDIO FILES - SIMPLE & RELIABLE
// ==========================================

let currentAudio: HTMLAudioElement | null = null;

/**
 * Initialize audio (no-op for local files)
 */
export const initializeAudio = (): Promise<void> => {
  console.log('Audio service ready - Using local audio files');
  return Promise.resolve();
};

/**
 * Convert Arabic text to filename-safe string
 * Removes diacritics and special characters
 */
const textToFilename = (text: string): string => {
  // Remove all diacritics (harakat) - these are the marks above/below letters
  const withoutDiacritics = text
    .replace(/[\u064B-\u065F\u0670]/g, '') // Remove Arabic diacritics
    .trim();
  
  // Convert to URL-safe format
  return encodeURIComponent(withoutDiacritics);
};

/**
 * Play Arabic text using local audio files
 * Files should be in: /audio/[filename].mp3
 * 
 * Example: 
 * - Text: "ذَٰلِكَ" 
 * - File: /audio/ذلك.mp3
 */
export const playArabicText = (text: string, levelId?: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!text) {
      reject(new Error('No text provided'));
      return;
    }

    try {
      // Stop any currently playing audio
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      const filename = textToFilename(text);
      
      // Try level-specific folder first, then fallback to root audio folder
      let audioUrl = `/audio/${filename}.mp3`;
      
      if (levelId) {
        audioUrl = `/audio/${levelId}/${filename}.mp3`;
      }

      console.log('Playing audio:', audioUrl, 'for text:', text);

      // Create new audio element
      const audio = new Audio(audioUrl);
      currentAudio = audio;

      // Event handlers
      audio.onplay = () => {
        console.log('Audio started playing');
      };

      audio.onended = () => {
        console.log('Audio finished');
        currentAudio = null;
        resolve();
      };

      audio.onerror = (error) => {
        console.warn(`Audio file not found: ${audioUrl}`);
        console.log('Tip: Add the audio file to the public/audio folder');
        
        // Try fallback without level folder
        if (levelId) {
          const fallbackUrl = `/audio/${filename}.mp3`;
          console.log('Trying fallback:', fallbackUrl);
          
          const fallbackAudio = new Audio(fallbackUrl);
          currentAudio = fallbackAudio;
          
          fallbackAudio.onended = () => {
            currentAudio = null;
            resolve();
          };
          
          fallbackAudio.onerror = () => {
            currentAudio = null;
            console.error('Audio file not found in fallback location either');
            reject(new Error(`Audio file not found: ${filename}.mp3`));
          };
          
          fallbackAudio.play().catch(reject);
        } else {
          currentAudio = null;
          reject(error);
        }
      };

      // Play the audio
      audio.play().catch((err) => {
        console.error('Play failed:', err);
        reject(err);
      });

    } catch (error) {
      console.error('Error creating audio:', error);
      reject(error);
    }
  });
};

/**
 * Stop any ongoing audio
 */
export const stopAudio = (): void => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
    console.log('Audio stopped');
  }
};

/**
 * Check if audio is supported (always true for HTML5 Audio)
 */
export const isSpeechSupported = (): boolean => {
  return true;
};

// Legacy exports for compatibility
export const getArabicVoices = () => [];
export const setVoice = () => {};

