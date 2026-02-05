import { LevelNode, Word } from '../../config/types';

/**
 * Chapter 5: Particles
 * Phase 1: Foundation
 * 
 * What this chapter teaches:
 * Small words that change tone and meaning.
 * 
 * Examples: Indeed, Surely, Only, Truly
 * 
 * Purpose:
 * Teaches emphasis, certainty, softening, and strengthening.
 * These make the Qur'an powerful in meaning.
 */

// TODO: Replace with actual particle words from PDF List 5
const words: Word[] = [
  { 
    id: 'ch5-w1',
    arabic: 'إِنَّ', 
    transliteration: 'Inna', 
    translations: { 
      en: 'Verily / Indeed',
      ur: 'بیشک / یقیناً',
      hi_en: 'Beshak / Zaroor',
      ur_en: 'Beshak / Yaqeenan'
    } 
  },
  { 
    id: 'ch5-w2',
    arabic: 'أَنَّ', 
    transliteration: 'Anna', 
    translations: { 
      en: 'That',
      ur: 'کہ / یہ کہ',
      hi_en: 'Ke / Yeh ke',
      ur_en: 'Ke / Yeh ke'
    } 
  },
  { 
    id: 'ch5-w3',
    arabic: 'كَأَنَّ', 
    transliteration: 'Ka\'anna', 
    translations: { 
      en: 'As if',
      ur: 'گویا کہ / جیسے کہ',
      hi_en: 'Jaise ke',
      ur_en: 'Goya ke / Jaise ke'
    } 
  },
  { 
    id: 'ch5-w4',
    arabic: 'لٰكِنَّ', 
    transliteration: 'Lākinna', 
    translations: { 
      en: 'But (indeed)',
      ur: 'لیکن',
      hi_en: 'Lekin',
      ur_en: 'Lekin'
    } 
  },
  { 
    id: 'ch5-w5',
    arabic: 'لَعَلَّ', 
    transliteration: 'La\'alla', 
    translations: { 
      en: 'Perhaps / So that',
      ur: 'شاید / تاکہ',
      hi_en: 'Shayad / Taake',
      ur_en: 'Shayad / Taake'
    } 
  },
  { 
    id: 'ch5-w6',
    arabic: 'لَيْتَ', 
    transliteration: 'Layta', 
    translations: { 
      en: 'Would that / I wish',
      ur: 'کاش',
      hi_en: 'Kaash',
      ur_en: 'Kaash'
    } 
  },
  { 
    id: 'ch5-w7',
    arabic: 'قَدْ', 
    transliteration: 'Qad', 
    translations: { 
      en: 'Indeed / Certainly / Already',
      ur: 'بےشک / یقیناً',
      hi_en: 'Zaroor / Beshak',
      ur_en: 'Beshak / Yaqeenan'
    } 
  },
  { 
    id: 'ch5-w8',
    arabic: 'سَـ / سَوْفَ', 
    transliteration: 'Sa / Sawfa', 
    translations: { 
      en: 'Will (future)',
      ur: 'عنقریب',
      hi_en: 'Jald hi',
      ur_en: 'Anqareeb'
    } 
  },
  { 
    id: 'ch5-w9',
    arabic: 'أَلَا', 
    transliteration: 'Alā', 
    translations: { 
      en: 'Lo! / Behold! / Will not?',
      ur: 'خبردار / سنو',
      hi_en: 'Suno / Khabardar',
      ur_en: 'Khabardar / Suno'
    } 
  },
  { 
    id: 'ch5-w10',
    arabic: 'إِنَّمَا', 
    transliteration: 'Innamā', 
    translations: { 
      en: 'Verily / Only',
      ur: 'سوائے اس کے نہیں / صرف',
      hi_en: 'Sirf / Bas',
      ur_en: 'Sirf / Mahaz'
    } 
  },
  { 
    id: 'ch5-w11',
    arabic: 'بَلْ', 
    transliteration: 'Bal', 
    translations: { 
      en: 'Rather / Nay',
      ur: 'بلکہ',
      hi_en: 'Balke',
      ur_en: 'Balke'
    } 
  },
  { 
    id: 'ch5-w12',
    arabic: 'حَتَّىٰ', 
    transliteration: 'Ḥattā', 
    translations: { 
      en: 'Until / Even',
      ur: 'یہاں تک کہ',
      hi_en: 'Yahan tak ke',
      ur_en: 'Yahan tak ke'
    } 
  }
];

export const CHAPTER_FIVE: LevelNode = {
  id: 'chapter-5',
  section: 'Phase 1: Foundation',
  title: 'Particles',
  description: 'Small words that change tone and reinforce meaning.',
  icon: '✨',
  color: 'bg-purple-500',
  locked: false,
  words: words
};
