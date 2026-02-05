import { LevelNode, Word } from '../../config/types';

/**
 * Chapter 6: Connectors
 * Phase 1: Foundation
 * 
 * What this chapter teaches:
 * How ideas are linked together in the Qur'an.
 * 
 * Examples: And, Then, So, But, Because
 * 
 * Purpose:
 * Helps understand:
 * - Flow of verses
 * - Arguments
 * - Stories
 * - Reasoning
 * 
 * This is the "logic of Qur'an".
 */

// TODO: Replace with actual connector words from PDF List 6
const words: Word[] = [
  { 
    id: 'ch6-w1',
    arabic: 'وَ', 
    transliteration: 'Wa', 
    translations: { 
      en: 'And / By (oath)',
      ur: 'اور / قسم ہے',
      hi_en: 'Aur / Kasam hai',
      ur_en: 'Aur / Qasam hai'
    } 
  },
  { 
    id: 'ch6-w2',
    arabic: 'فَـ', 
    transliteration: 'Fa', 
    translations: { 
      en: 'Then (immediately) / So',
      ur: 'تو / پس',
      hi_en: 'Toh / Bus',
      ur_en: 'Toh / Pas'
    } 
  },
  { 
    id: 'ch6-w3',
    arabic: 'ثُمَّ', 
    transliteration: 'Thumma', 
    translations: { 
      en: 'Then (after a delay)',
      ur: 'پھر',
      hi_en: 'Phir',
      ur_en: 'Phir'
    } 
  },
  { 
    id: 'ch6-w4',
    arabic: 'أَوْ', 
    transliteration: 'Aw', 
    translations: { 
      en: 'Or',
      ur: 'یا',
      hi_en: 'Ya',
      ur_en: 'Ya'
    } 
  },
  { 
    id: 'ch6-w5',
    arabic: 'أَمْ', 
    transliteration: 'Am', 
    translations: { 
      en: 'Or? (in questions)',
      ur: 'یا (سوالیہ)',
      hi_en: 'Ya (question)',
      ur_en: 'Ya (sawaliya)'
    } 
  },
  { 
    id: 'ch6-w6',
    arabic: 'لٰكِنْ', 
    transliteration: 'Lākin', 
    translations: { 
      en: 'But',
      ur: 'لیکن',
      hi_en: 'Lekin',
      ur_en: 'Lekin'
    } 
  },
  { 
    id: 'ch6-w7',
    arabic: 'إِذْ', 
    transliteration: 'Idh', 
    translations: { 
      en: 'When (past event)',
      ur: 'جب (ماضی کا واقعہ)',
      hi_en: 'Jab (past event)',
      ur_en: 'Jab (maazi ka waqia)'
    } 
  },
  { 
    id: 'ch6-w8',
    arabic: 'إِذَا', 
    transliteration: 'Idhā', 
    translations: { 
      en: 'When (future/conditional)',
      ur: 'جب (مستقبل)',
      hi_en: 'Jab (future)',
      ur_en: 'Jab (mustaqbil)'
    } 
  },
  { 
    id: 'ch6-w9',
    arabic: 'لَمَّا', 
    transliteration: 'Lammā', 
    translations: { 
      en: 'When (past)',
      ur: 'جب (ماضی)',
      hi_en: 'Jab (past)',
      ur_en: 'Jab (maazi)'
    } 
  },
  { 
    id: 'ch6-w10',
    arabic: 'لَوْ', 
    transliteration: 'Law', 
    translations: { 
      en: 'If (hypothetical)',
      ur: 'اگر / کاش',
      hi_en: 'Agar / Kaash',
      ur_en: 'Agar / Kaash'
    } 
  },
  { 
    id: 'ch6-w11',
    arabic: 'إِنْ', 
    transliteration: 'In', 
    translations: { 
      en: 'If',
      ur: 'اگر',
      hi_en: 'Agar',
      ur_en: 'Agar'
    } 
  },
  { 
    id: 'ch6-w12',
    arabic: 'لَوْلَا', 
    transliteration: 'Lawlā', 
    translations: { 
      en: 'If not / Why not',
      ur: 'اگر نہیں / کیوں نہیں',
      hi_en: 'Agar nahi / Kyun nahi',
      ur_en: 'Agar nahi / Kyun nahi'
    } 
  }
];

export const CHAPTER_SIX: LevelNode = {
  id: 'chapter-6',
  section: 'Phase 1: Foundation',
  title: 'Connectors',
  description: 'How ideas are linked together - the logic of Qur\'an.',
  icon: '🔗',
  color: 'bg-orange-500',
  locked: false,
  words: words
};
