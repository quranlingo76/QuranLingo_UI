import { LevelNode, Word } from '../../config/types';

/**
 * Chapter 7: Miscellaneous + Types of ما
 * Phase 1: Foundation
 * 
 * What this chapter teaches:
 * Special forms and rare tools.
 * Especially the different uses of "ما" (mā).
 * 
 * Purpose:
 * Covers advanced small tools that don't fit elsewhere.
 * This polishes understanding and completes the foundation.
 */

// TODO: Replace with actual miscellaneous words + Types of ما from PDF List 7 + Addendum
const words: Word[] = [
  { 
    id: 'ch7-w1',
    arabic: 'مَا', 
    transliteration: 'Mā (Negation)', 
    translations: {
      en: 'Not (negation)',
      ur: 'نہیں (نفی)',
      ur_en: 'Nahi (nafi)'
    } 
  },
  { 
    id: 'ch7-w2',
    arabic: 'مَا', 
    transliteration: 'Mā (Question)', 
    translations: {
      en: 'What? (interrogative)',
      ur: 'کیا؟ (سوالیہ)',
      ur_en: 'Kya? (sawaliya)'
    } 
  },
  { 
    id: 'ch7-w3',
    arabic: 'مَا', 
    transliteration: 'Mā (Relative)', 
    translations: {
      en: 'That which / What',
      ur: 'جو کچھ / وہ جو',
      ur_en: 'Jo / Woh jo'
    } 
  },
  { 
    id: 'ch7-w4',
    arabic: 'مَا', 
    transliteration: 'Mā (Emphasis)', 
    translations: {
      en: 'Indeed / Truly (emphasis)',
      ur: 'واقعی / بالکل',
      ur_en: 'Waqai / Bilkul'
    } 
  },
  { 
    id: 'ch7-w5',
    arabic: 'أَمَّا', 
    transliteration: 'Ammā', 
    translations: {
      en: 'As for',
      ur: 'رہا یہ کہ / بہرحال',
      ur_en: 'Raha yeh ke'
    } 
  },
  { 
    id: 'ch7-w6',
    arabic: 'إِمَّا', 
    transliteration: 'Immā', 
    translations: {
      en: 'Either / Or',
      ur: 'یا تو / خواہ',
      ur_en: 'Ya to'
    } 
  },
  { 
    id: 'ch7-w7',
    arabic: 'كُلَّمَا', 
    transliteration: 'Kullamā', 
    translations: {
      en: 'Whenever',
      ur: 'جب کبھی',
      ur_en: 'Jab kabhi'
    } 
  },
  { 
    id: 'ch7-w8',
    arabic: 'بِمَا', 
    transliteration: 'Bimā', 
    translations: {
      en: 'With what',
      ur: 'ساتھ اس کے جو / بدلے اس کے جو',
      ur_en: 'Uske badle jo'
    } 
  },
  { 
    id: 'ch7-w9',
    arabic: 'فِيمَا', 
    transliteration: 'Fīmā', 
    translations: {
      en: 'In what',
      ur: 'اس میں جو',
      ur_en: 'Us mein jo'
    } 
  },
  { 
    id: 'ch7-w10',
    arabic: 'مِمَّا', 
    transliteration: 'Mimmā', 
    translations: {
      en: 'From what',
      ur: 'اس سے جو',
      ur_en: 'Us se jo'
    } 
  },
  { 
    id: 'ch7-w11',
    arabic: 'عَمَّا', 
    transliteration: '\'Ammā', 
    translations: {
      en: 'About what',
      ur: 'اس سے جو / کس چیز سے',
      ur_en: 'Us se jo / Kis cheez se'
    } 
  },
  { 
    id: 'ch7-w12',
    arabic: 'كَمَا', 
    transliteration: 'Kamā', 
    translations: {
      en: 'Just as',
      ur: 'جیسا کہ',
      ur_en: 'Jaisa ke'
    } 
  }
];

export const CHAPTER_SEVEN: LevelNode = {
  id: 'chapter-7',
  section: 'Phase 1: Foundation',
  title: 'Miscellaneous + Types of ما',
  description: 'Special forms and advanced small tools that polish understanding.',
  icon: '🎯',
  color: 'bg-rose-500',
  locked: false,
  words: words
};
