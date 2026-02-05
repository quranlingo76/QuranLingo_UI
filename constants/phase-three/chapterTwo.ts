import { LevelNode, Word } from '../../config/types';

/**
 * Day 10: Sentence Architect
 * Phase 3: Mastery
 * Building full Quranic meanings from your lexicon.
 */

const words: Word[] = [
  { 
    id: 'd10-w1',
    arabic: 'اللَّهُ أَكْبَر', 
    transliteration: 'Allāhu Akbar', 
    translations: { 
      en: 'Allah is Greater',
      ur: 'اللہ سب سے بڑا ہے',
      hi_en: 'Allah sabse bada hai',
      ur_en: 'Allah sab se bada hai'
    } 
  },
  { 
    id: 'd10-w2',
    arabic: 'هٰذَا كِتَاب', 
    transliteration: 'Hādhā Kitāb', 
    translations: { 
      en: 'This is a Book',
      ur: 'یہ کتاب ہے',
      hi_en: 'Ye kitaab hai',
      ur_en: 'Yeh kitaab hai'
    } 
  },
  { 
    id: 'd10-w3',
    arabic: 'هُوَ اللَّهُ أَحَد', 
    transliteration: 'Huwa Allāhu Aḥad', 
    translations: { 
      en: 'He is Allah, One',
      ur: 'وہ اللہ ایک ہے',
      hi_en: 'Wo Allah ek hai',
      ur_en: 'Woh Allah aik hai'
    } 
  },
  { 
    id: 'd10-w4',
    arabic: 'الشَّمْسُ وَ الْقَمَر', 
    transliteration: 'Ash-Shamsu Wa Al-Qamar', 
    translations: { 
      en: 'The Sun and the Moon',
      ur: 'سورج اور چاند',
      hi_en: 'Sooraj aur Chaand',
      ur_en: 'Sooraj aur Chaand'
    } 
  },
  { 
    id: 'd10-w5',
    arabic: 'بِسْمِ اللَّهِ', 
    transliteration: 'Bismi Allāh', 
    translations: { 
      en: 'In the name of Allah',
      ur: 'اللہ کے نام سے',
      hi_en: 'Allah ke naam se',
      ur_en: 'Allah ke naam se'
    } 
  },
  { 
    id: 'd10-w6',
    arabic: 'الْحَمْدُ لِلَّهِ', 
    transliteration: 'Al-Ḥamdu Lillāh', 
    translations: { 
      en: 'Praise belongs to Allah',
      ur: 'سب تعریف اللہ کے لیے ہے',
      hi_en: 'Sab tareef Allah ke liye',
      ur_en: 'Sab tareef Allah ke liye hai'
    } 
  },
  { 
    id: 'd10-w7',
    arabic: 'لَا إِلٰهَ إِلَّا اللَّهُ', 
    transliteration: 'Lā Ilāha Illā Allāh', 
    translations: { 
      en: 'There is no deity except Allah',
      ur: 'اللہ کے سوا کوئی معبود نہیں',
      hi_en: 'Allah ke siwa koi mabood nahi',
      ur_en: 'Allah ke siwa koi mabood nahi'
    } 
  },
  { 
    id: 'd10-w8',
    arabic: 'إِنَّ اللَّهَ غَفُور', 
    transliteration: 'Inna Allāha Ghafūr', 
    translations: { 
      en: 'Indeed Allah is Forgiving',
      ur: 'بیشک اللہ بخشنے والا ہے',
      hi_en: 'Beshak Allah maaf karne wala hai',
      ur_en: 'Beshak Allah bakhshne wala hai'
    } 
  }
];

export const CHAPTER_TWO: LevelNode = {
  id: 'p3-chapter-2',
  section: 'Phase 3: Mastery',
  title: 'Sentence Architect',
  description: 'Building full Quranic meanings from your lexicon.',
  icon: '🧱',
  color: 'bg-orange-500',
  locked: false,
  words: words
};
