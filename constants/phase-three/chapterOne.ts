import { LevelNode, Word } from '../../config/types';

/**
 * Day 9: The Core Challenge
 * Phase 3: Mastery
 * A focused review of the most high-impact words.
 */

const words: Word[] = [
  { 
    id: 'd9-w1',
    arabic: 'الَّذِي', 
    transliteration: 'Alladhī', 
    translations: { 
      en: 'He who / The one who',
      ur: 'وہ جو (مذکر)',
      hi_en: 'Woh jo (male)',
      ur_en: 'Woh jo (muzakkar)' 
    } 
  },
  { 
    id: 'd9-w2',
    arabic: 'لَا', 
    transliteration: 'Lā', 
    translations: { 
      en: 'Do(es) not / No',
      ur: 'نہیں / نہ',
      hi_en: 'Nahi / Mat',
      ur_en: 'Nahi / Na'
    } 
  },
  { 
    id: 'd9-w3',
    arabic: 'إِلَّا', 
    transliteration: 'Illā', 
    translations: { 
      en: 'Except',
      ur: 'سوائے / مگر',
      hi_en: 'Siwaye',
      ur_en: 'Siwaye / Magar'
    } 
  },
  { 
    id: 'd9-w4',
    arabic: 'لَمْ', 
    transliteration: 'Lam', 
    translations: { 
      en: 'Did not (past)',
      ur: 'نہیں (ماضی)',
      hi_en: 'Nahi (past mein)',
      ur_en: 'Nahi (maazi)'
    } 
  },
  { 
    id: 'd9-w5',
    arabic: 'أَ / هَلْ', 
    transliteration: 'A / Hal', 
    translations: { 
      en: 'Is? / Do? (Question tag)',
      ur: 'کیا؟',
      hi_en: 'Kya?',
      ur_en: 'Kya?'
    } 
  },
  { 
    id: 'd9-w6',
    arabic: 'لِمَ', 
    transliteration: 'Lima', 
    translations: { 
      en: 'Why?',
      ur: 'کیوں؟ (کس لیے)',
      hi_en: 'Kyun?',
      ur_en: 'Kyun? (Kis liye)'
    } 
  },
  { 
    id: 'd9-w7',
    arabic: 'مَنْ', 
    transliteration: 'Man', 
    translations: { 
      en: 'Who?',
      ur: 'کون؟',
      hi_en: 'Kaun?',
      ur_en: 'Kaun? / Jo'
    } 
  },
  { 
    id: 'd9-w8',
    arabic: 'كَيْفَ', 
    transliteration: 'Kayfa', 
    translations: { 
      en: 'How?',
      ur: 'کیسے؟',
      hi_en: 'Kaise?',
      ur_en: 'Kaise?'
    } 
  },
  { 
    id: 'd9-w9',
    arabic: 'فَوْقَ', 
    transliteration: 'Fawqa', 
    translations: { 
      en: 'Above',
      ur: 'اوپر',
      hi_en: 'Oopar',
      ur_en: 'Oopar'
    } 
  },
  { 
    id: 'd9-w10',
    arabic: 'تَحْتَ', 
    transliteration: 'Taḥta', 
    translations: { 
      en: 'Under',
      ur: 'نیچے',
      hi_en: 'Neeche',
      ur_en: 'Neeche'
    } 
  },
  { 
    id: 'd9-w11',
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
    id: 'd9-w12',
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
    id: 'd9-w13',
    arabic: 'بِمَا', 
    transliteration: 'Bimā', 
    translations: { 
      en: 'With what',
      ur: 'ساتھ اس کے جو',
      hi_en: 'Isliye jo',
      ur_en: 'Saath uske jo'
    } 
  },
  { 
    id: 'd9-w14',
    arabic: 'كُلَّمَا', 
    transliteration: 'Kullamā', 
    translations: { 
      en: 'Whenever',
      ur: 'جب کبھی',
      hi_en: 'Jab kabhi',
      ur_en: 'Jab kabhi'
    } 
  },
  { 
    id: 'd9-w15',
    arabic: 'رَبّ', 
    transliteration: 'Rabb', 
    translations: { 
      en: 'Lord',
      ur: 'رب / پروردگار',
      hi_en: 'Palne wala / Maalik',
      ur_en: 'Rabb / Parwardigar'
    } 
  },
  { 
    id: 'd9-w16',
    arabic: 'الرَّحْمٰن', 
    transliteration: 'Ar-Raḥmān', 
    translations: { 
      en: 'Entirely Merciful',
      ur: 'نہایت مہربان',
      hi_en: 'Bohot meherban',
      ur_en: 'Nihayat Meherban'
    } 
  },
  { 
    id: 'd9-w17',
    arabic: 'غَفُور', 
    transliteration: 'Ghafūr', 
    translations: { 
      en: 'Forgiving',
      ur: 'بخشنے والا',
      hi_en: 'Maaf karne wala',
      ur_en: 'Bakhushne wala'
    } 
  },
  { 
    id: 'd9-w18',
    arabic: 'عَلِيم', 
    transliteration: '\'Alīm', 
    translations: { 
      en: 'All-Knowing',
      ur: 'جاننے والا',
      hi_en: 'Jaanne wala',
      ur_en: 'Jaanne wala'
    } 
  },
  { 
    id: 'd9-w19',
    arabic: 'قَدِير', 
    transliteration: 'Qadīr', 
    translations: { 
      en: 'Competent',
      ur: 'قدرت والا',
      hi_en: 'Qudrat wala',
      ur_en: 'Qudrat wala'
    } 
  },
  { 
    id: 'd9-w20',
    arabic: 'شَدِيد', 
    transliteration: 'Shadīd', 
    translations: { 
      en: 'Severe / Strong',
      ur: 'سخت / شدید',
      hi_en: 'Sakht',
      ur_en: 'Shadeed / Sakht'
    } 
  },
  { 
    id: 'd9-w21',
    arabic: 'رَسُول', 
    transliteration: 'Rasūl', 
    translations: { 
      en: 'Messenger',
      ur: 'رسول',
      hi_en: 'Rasool',
      ur_en: 'Rasool'
    } 
  },
  { 
    id: 'd9-w22',
    arabic: 'ءَايَة', 
    transliteration: 'Āyah', 
    translations: { 
      en: 'Sign/Verse',
      ur: 'نشانی / آیت',
      hi_en: 'Nishani / Ayat',
      ur_en: 'Nishani / Ayat'
    } 
  },
  { 
    id: 'd9-w23',
    arabic: 'جَنَّة', 
    transliteration: 'Jannah', 
    translations: { 
      en: 'Paradise / Garden',
      ur: 'جنت / باغ',
      hi_en: 'Jannat / Baagh',
      ur_en: 'Jannat / Baagh'
    } 
  },
  { 
    id: 'd9-w24',
    arabic: 'نَار', 
    transliteration: 'Nār', 
    translations: { 
      en: 'Fire',
      ur: 'آگ',
      hi_en: 'Aag',
      ur_en: 'Aag'
    } 
  },
  { 
    id: 'd9-w25',
    arabic: 'غَيْب', 
    transliteration: 'Ghayb', 
    translations: { 
      en: 'Unseen',
      ur: 'غیب',
      hi_en: 'Ghaib',
      ur_en: 'Ghaib'
    } 
  },
  { 
    id: 'd9-w26',
    arabic: 'شَيْطَان', 
    transliteration: 'Shayṭān', 
    translations: { 
      en: 'Satan',
      ur: 'شیطان',
      hi_en: 'Shaitan',
      ur_en: 'Shaitan'
    } 
  },
  { 
    id: 'd9-w27',
    arabic: 'يَوْم', 
    transliteration: 'Yawm', 
    translations: { 
      en: 'Day',
      ur: 'دن',
      hi_en: 'Din',
      ur_en: 'Din'
    } 
  },
  { 
    id: 'd9-w28',
    arabic: 'السَّاعَة', 
    transliteration: 'As-Sā\'ah', 
    translations: { 
      en: 'The Hour',
      ur: 'وہ گھڑی (قیامت)',
      hi_en: 'Ghadi (Qayamat)',
      ur_en: 'Ghadi (Qayamat)'
    } 
  },
  { 
    id: 'd9-w29',
    arabic: 'نَفْس', 
    transliteration: 'Nafs', 
    translations: { 
      en: 'Soul/Self',
      ur: 'جان / نفس',
      hi_en: 'Jaan / Nafs',
      ur_en: 'Jaan / Nafs'
    } 
  },
  { 
    id: 'd9-w30',
    arabic: 'قَلْب', 
    transliteration: 'Qalb', 
    translations: { 
      en: 'Heart',
      ur: 'دل',
      hi_en: 'Dil',
      ur_en: 'Dil'
    } 
  },
  { 
    id: 'd9-w31',
    arabic: 'الدُّنْيَا', 
    transliteration: 'Ad-Dunyā', 
    translations: { 
      en: 'World (This life)',
      ur: 'دنیا',
      hi_en: 'Duniya',
      ur_en: 'Duniya'
    } 
  },
  { 
    id: 'd9-w32',
    arabic: 'الآخِرَة', 
    transliteration: 'Al-Ākhirah', 
    translations: { 
      en: 'Hereafter',
      ur: 'آخرت',
      hi_en: 'Aakhirat',
      ur_en: 'Aakhirat'
    } 
  }
];

export const CHAPTER_ONE: LevelNode = {
  id: 'p3-chapter-1',
  section: 'Phase 3: Mastery',
  title: 'The Core Challenge',
  description: 'A focused review of the most high-impact words.',
  icon: '🏆',
  color: 'bg-rose-600',
  locked: false,
  words: words
};
