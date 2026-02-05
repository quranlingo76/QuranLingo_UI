
/**
 * Word data structure supporting multiple languages
 */
export interface Example {
  arabic: string;
  translation: string; // Legacy/Fallback
  translations?: {
    en: string;
    ur?: string;
    hi_en?: string;
    ur_en?: string;
  };
  ref: string;
}

/**
 * Word data structure supporting multiple languages
 */
export interface Word {
  id?: string;
  arabic: string;
  transliteration: string;
  translations: {
    en: string;
    ur?: string;     // Urdu
    hi_en?: string;  // Hinglish
    ur_en?: string;  // Roman Urdu
  };
  examples?: Example[];
  gender?: 'male' | 'female' | 'plural';
}

export interface LevelNode {
  id: string;
  section: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  locked: boolean;
  words: Word[] | string[]; // Support both new and old format for backward compatibility
}

export interface ParsedWord {
  id: string;
  original: string;
  arabic: string;
  transliteration: string;
  english: string;
  examples?: Example[];
  gender?: 'male' | 'female' | 'plural';
}

export interface MasteryData {
  strength: number; // 0-5
  lastTested: number; // Timestamp
  markedHard?: boolean; // User manually flagged as hard
}

export interface UserProgress {
  completedLevels: string[]; 
  currentLevelId: string;
  wordMastery: Record<string, MasteryData>; 
}

export type QuestionType = 'multiple-choice' | 'match' | 'flashcard' | 'sentence-builder';

export interface Question {
  id: string;
  type: QuestionType;
  word: ParsedWord;
  options?: ParsedWord[];
}
