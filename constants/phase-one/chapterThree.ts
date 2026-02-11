import { LevelNode, Word } from '../../config/types';

/**
 * Chapter 3: Question Words
 * Phase 1: Foundation
 * 
 * What this chapter teaches:
 * How questions are formed in the Qur'an.
 * 
 * Examples: Who? What? Why? Where? How? When?
 * 
 * Purpose:
 * Helps understand Allah's questions, challenges, dialogues, and stories.
 * Without this, many verses lose context.
 */

const words: Word[] = [
  {
    id: 'ch3-w1',
    arabic: 'أَ / هَلْ',
    transliteration: 'A / Hal',
    translations: {
      en: 'Is? / Do? (Question tag)',
      ur: 'کیا؟',
      ur_en: 'Kya?'
    }
  },
  {
    id: 'ch3-w2',
    arabic: 'مَا / مَاذَا',
    transliteration: 'Mā / Mādhā',
    translations: {
      en: 'What?',
      ur: 'کیا؟',
      ur_en: 'Kya?'
    }
  },
  {
    id: 'ch3-w3',
    arabic: 'لِمَ',
    transliteration: 'Lima',
    translations: {
      en: 'Why?',
      ur: 'کیوں؟ (کس لیے)',
      ur_en: 'Kyun? (Kis liye)'
    }
  },
  {
    id: 'ch3-w4',
    arabic: 'مَنْ',
    transliteration: 'Man',
    translations: {
      en: 'Who?',
      ur: 'کون؟ / جس نے',
      ur_en: 'Kaun? / Jis ne'
    }
  },
  {
    id: 'ch3-w5',
    arabic: 'مَتَىٰ',
    transliteration: 'Matā',
    translations: {
      en: 'When?',
      ur: 'کب؟',
      ur_en: 'Kab?'
    }
  },
  {
    id: 'ch3-w6',
    arabic: 'أَيْنَ',
    transliteration: 'Ayna',
    translations: {
      en: 'Where?',
      ur: 'کہاں؟',
      ur_en: 'Kahan?'
    }
  },
  {
    id: 'ch3-w7',
    arabic: 'كَيْفَ',
    transliteration: 'Kayfa',
    translations: {
      en: 'How?',
      ur: 'کیسے؟',
      ur_en: 'Kaise?'
    }
  },
  {
    id: 'ch3-w8',
    arabic: 'كَمْ',
    transliteration: 'Kam',
    translations: {
      en: 'How many/much?',
      ur: 'کتنا / کتنے؟',
      ur_en: 'Kitna / Kitne?'
    }
  },
  {
    id: 'ch3-w9',
    arabic: 'أَيُّ',
    transliteration: 'Ayyu',
    translations: {
      en: 'Which?',
      ur: 'کونسا؟',
      ur_en: 'Kaunsa?'
    }
  },
  {
    id: 'ch3-w10',
    arabic: 'أَنَّىٰ',
    transliteration: 'Annā',
    translations: {
      en: 'How / From where?',
      ur: 'کیسے / کہاں سے؟',
      ur_en: 'Kaise / Kahan se?'
    }
  }
];

export const CHAPTER_THREE: LevelNode = {
  id: 'chapter-3',
  section: 'Phase 1: Foundation',
  title: 'Question Words',
  description: 'How questions are formed in the Qur\'an - Who, What, Why, Where, How.',
  icon: '❓',
  color: 'bg-teal-500',
  locked: false,
  words: words
};
