import { LevelNode, Word } from '../../config/types';

/**
 * Phase 2 — EXPANSION (50% → 65%)
 * Chapter 7: Law, Reward & Punishment
 * Words about rulings and outcomes.
 */

const words: Word[] = [
  { 
    id: 'd8-w1',
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
    id: 'd8-w2',
    arabic: 'العَالَمِين', 
    transliteration: 'Al-\'Ālamīn', 
    translations: { 
      en: 'The Worlds',
      ur: 'تمام جہان',
      hi_en: 'Saare jahan',
      ur_en: 'Tamaam jahan'
    } 
  },
  { 
    id: 'd8-w3',
    arabic: 'مَال', 
    transliteration: 'Māl', 
    translations: { 
      en: 'Wealth',
      ur: 'مال / دولت',
      hi_en: 'Maal / Daulat',
      ur_en: 'Maal / Daulat'
    } 
  },
  { 
    id: 'd8-w4',
    arabic: 'بَيْت', 
    transliteration: 'Bayt', 
    translations: { 
      en: 'House',
      ur: 'گھر',
      hi_en: 'Ghar',
      ur_en: 'Ghar'
    } 
  },
  { 
    id: 'd8-w5',
    arabic: 'دَار', 
    transliteration: 'Dār', 
    translations: { 
      en: 'Abode / Home',
      ur: 'گھر / ٹھکانا',
      hi_en: 'Thikana / Ghar',
      ur_en: 'Ghar / Thikana'
    } 
  },
  { 
    id: 'd8-w6',
    arabic: 'مَتَاع', 
    transliteration: 'Matā\'', 
    translations: { 
      en: 'Enjoyment',
      ur: 'سامان / فائدہ',
      hi_en: 'Samaan / Fayda',
      ur_en: 'Samaan / Faida'
    } 
  },
  { 
    id: 'd8-w7',
    arabic: 'مَكَان', 
    transliteration: 'Makān', 
    translations: { 
      en: 'Place',
      ur: 'جگہ',
      hi_en: 'Jagah',
      ur_en: 'Jagah'
    } 
  },
  { 
    id: 'd8-w8',
    arabic: 'قَرْيَة', 
    transliteration: 'Qaryah', 
    translations: { 
      en: 'Town',
      ur: 'بستی',
      hi_en: 'Basti',
      ur_en: 'Basti'
    } 
  },
  { 
    id: 'd8-w9',
    arabic: 'مَدِينَة', 
    transliteration: 'Madīnah', 
    translations: { 
      en: 'City',
      ur: 'شہر',
      hi_en: 'Sheher',
      ur_en: 'Sheher'
    } 
  },
  { 
    id: 'd8-w10',
    arabic: 'سَبِيل', 
    transliteration: 'Sabīl', 
    translations: { 
      en: 'Way',
      ur: 'راستہ',
      hi_en: 'Raasta',
      ur_en: 'Raasta'
    } 
  },
  { 
    id: 'd8-w11',
    arabic: 'صِرَاط', 
    transliteration: 'Ṣirāṭ', 
    translations: { 
      en: 'Path',
      ur: 'راستہ (سیدھا)',
      hi_en: 'Raasta',
      ur_en: 'Raasta'
    } 
  },
  { 
    id: 'd8-w12',
    arabic: 'مَسْجِد', 
    transliteration: 'Masjid', 
    translations: { 
      en: 'Mosque',
      ur: 'مسجد',
      hi_en: 'Masjid',
      ur_en: 'Masjid'
    } 
  },
  { 
    id: 'd8-w13',
    arabic: 'فِتْنَة', 
    transliteration: 'Fitnah', 
    translations: { 
      en: 'Trial / Test',
      ur: 'آزمائش / فتنہ',
      hi_en: 'Aazmaish / Fitna',
      ur_en: 'Aazmaish / Fitna'
    } 
  },
  { 
    id: 'd8-w14',
    arabic: 'لِقَاء', 
    transliteration: 'Liqā\'', 
    translations: { 
      en: 'Meeting',
      ur: 'ملاقات',
      hi_en: 'Mulaqat',
      ur_en: 'Mulaqat'
    } 
  },
  { 
    id: 'd8-w15',
    arabic: 'ذِي القُرْبَىٰ', 
    transliteration: 'Dhī Al-Qurbā', 
    translations: { 
      en: 'Relatives',
      ur: 'رشتے دار',
      hi_en: 'Rishtedaar',
      ur_en: 'Rishtedaar'
    } 
  },
  { 
    id: 'd8-w16',
    arabic: 'الوَالِدَيْن', 
    transliteration: 'Al-Wālidayn', 
    translations: { 
      en: 'Parents',
      ur: 'ماں باپ',
      hi_en: 'Maa baap',
      ur_en: 'Maa baap'
    } 
  },
  { 
    id: 'd8-w17',
    arabic: 'أُمّ', 
    transliteration: 'Umm', 
    translations: { 
      en: 'Mother',
      ur: 'ماں',
      hi_en: 'Maa',
      ur_en: 'Maa'
    } 
  },
  { 
    id: 'd8-w18',
    arabic: 'أَب', 
    transliteration: 'Ab', 
    translations: { 
      en: 'Father',
      ur: 'باپ',
      hi_en: 'Baap',
      ur_en: 'Baap'
    } 
  },
  { 
    id: 'd8-w19',
    arabic: 'ءَابَاء', 
    transliteration: 'Ābā\'', 
    translations: { 
      en: 'Ancestors',
      ur: 'باپ دادا',
      hi_en: 'Baap dada',
      ur_en: 'Baap dada'
    } 
  },
  { 
    id: 'd8-w20',
    arabic: 'زَوْج', 
    transliteration: 'Zawj', 
    translations: { 
      en: 'Spouse',
      ur: 'جوڑا / شریک حیات',
      hi_en: 'Joda / Saathi',
      ur_en: 'Joda / Shareek-e-hayat'
    } 
  },
  { 
    id: 'd8-w21',
    arabic: 'رَجُل', 
    transliteration: 'Rajul', 
    translations: { 
      en: 'Man',
      ur: 'مرد',
      hi_en: 'Mard',
      ur_en: 'Mard'
    } 
  },
  { 
    id: 'd8-w22',
    arabic: 'امْرَأَة', 
    transliteration: 'Imra\'ah', 
    translations: { 
      en: 'Woman',
      ur: 'عورت',
      hi_en: 'Aurat',
      ur_en: 'Aurat'
    } 
  },
  { 
    id: 'd8-w23',
    arabic: 'ذُرِّيَّة', 
    transliteration: 'Dhurriyyah', 
    translations: { 
      en: 'Offspring',
      ur: 'اولاد / نسل',
      hi_en: 'Aulad / Nasal',
      ur_en: 'Aulad / Nasal'
    } 
  },
  { 
    id: 'd8-w24',
    arabic: 'وَلَد', 
    transliteration: 'Walad', 
    translations: { 
      en: 'Child',
      ur: 'بچہ',
      hi_en: 'Bacha',
      ur_en: 'Bacha'
    } 
  },
  { 
    id: 'd8-w25',
    arabic: 'ابْن', 
    transliteration: 'Ibn', 
    translations: { 
      en: 'Son',
      ur: 'بیٹا',
      hi_en: 'Beta',
      ur_en: 'Beta'
    } 
  },
  { 
    id: 'd8-w26',
    arabic: 'أَخ', 
    transliteration: 'Akh', 
    translations: { 
      en: 'Brother',
      ur: 'بھائی',
      hi_en: 'Bhai',
      ur_en: 'Bhai'
    } 
  },
  { 
    id: 'd8-w27',
    arabic: 'وَلِيّ', 
    transliteration: 'Walīyy', 
    translations: { 
      en: 'Guardian / Ally',
      ur: 'دوست / سرپرست',
      hi_en: 'Dost / Madadgar',
      ur_en: 'Dost / Sarparast'
    } 
  },
  { 
    id: 'd8-w28',
    arabic: 'ذَكَر', 
    transliteration: 'Dhakar', 
    translations: { 
      en: 'Male',
      ur: 'مذکر / نر',
      hi_en: 'Male',
      ur_en: 'Muzakkar / Nar'
    } 
  },
  { 
    id: 'd8-w29',
    arabic: 'أُنْثَىٰ', 
    transliteration: 'Unthā', 
    translations: { 
      en: 'Female',
      ur: 'مونث / مادہ',
      hi_en: 'Female',
      ur_en: 'Monas / Madah'
    } 
  },
  { 
    id: 'd8-w30',
    arabic: 'وَجْه', 
    transliteration: 'Wajh', 
    translations: { 
      en: 'Face',
      ur: 'چہرہ',
      hi_en: 'Chehra',
      ur_en: 'Chehra'
    } 
  },
  { 
    id: 'd8-w31',
    arabic: 'بَصَر', 
    transliteration: 'Baṣar', 
    translations: { 
      en: 'Sight',
      ur: 'نظر / بینائی',
      hi_en: 'Nazar',
      ur_en: 'Nazar / Beinai'
    } 
  },
  { 
    id: 'd8-w32',
    arabic: 'صَدْر', 
    transliteration: 'Ṣadr', 
    translations: { 
      en: 'Breast/Chest',
      ur: 'سینہ',
      hi_en: 'Seena',
      ur_en: 'Seena'
    } 
  },
  { 
    id: 'd8-w33',
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
    id: 'd8-w34',
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
    id: 'd8-w35',
    arabic: 'رُوح', 
    transliteration: 'Rūḥ', 
    translations: { 
      en: 'Spirit',
      ur: 'روح',
      hi_en: 'Rooh',
      ur_en: 'Rooh'
    } 
  },
  { 
    id: 'd8-w36',
    arabic: 'قُوَّة', 
    transliteration: 'Quwwah', 
    translations: { 
      en: 'Power',
      ur: 'قوت / طاقت',
      hi_en: 'Taqat',
      ur_en: 'Quwwat / Taqat'
    } 
  },
  { 
    id: 'd8-w37',
    arabic: 'قَوْم', 
    transliteration: 'Qawm', 
    translations: { 
      en: 'People',
      ur: 'قوم',
      hi_en: 'Qaum',
      ur_en: 'Qaum'
    } 
  },
  { 
    id: 'd8-w38',
    arabic: 'أُمَّة', 
    transliteration: 'Ummah', 
    translations: { 
      en: 'Nation',
      ur: 'امت / گروہ',
      hi_en: 'Ummat / Giroh',
      ur_en: 'Ummat / Giroh'
    } 
  },
  { 
    id: 'd8-w39',
    arabic: 'إِنْسَان', 
    transliteration: 'Insān', 
    translations: { 
      en: 'Human',
      ur: 'انسان',
      hi_en: 'Insaan',
      ur_en: 'Insaan'
    } 
  },
  { 
    id: 'd8-w40',
    arabic: 'مَلَأ', 
    transliteration: 'Mala\'', 
    translations: { 
      en: 'Chiefs',
      ur: 'سردار',
      hi_en: 'Sardaar',
      ur_en: 'Sardaar'
    } 
  },
  { 
    id: 'd8-w41',
    arabic: 'عَبْد', 
    transliteration: '\'Abd', 
    translations: { 
      en: 'Servant',
      ur: 'بندہ / غلام',
      hi_en: 'Banda / Ghulam',
      ur_en: 'Banda / Ghulam'
    } 
  },
  { 
    id: 'd8-w42',
    arabic: 'عَدُوّ', 
    transliteration: '\'Adūww', 
    translations: { 
      en: 'Enemy',
      ur: 'دشمن',
      hi_en: 'Dushman',
      ur_en: 'Dushman'
    } 
  },
  { 
    id: 'd8-w43',
    arabic: 'مُجْرِم', 
    transliteration: 'Mujrim', 
    translations: { 
      en: 'Criminal',
      ur: 'مجرم / گنہگار',
      hi_en: 'Mujrim / Gunahgar',
      ur_en: 'Mujrim / Gunahgaar'
    } 
  },
  { 
    id: 'd8-w44',
    arabic: 'فَرِيق', 
    transliteration: 'Farīq', 
    translations: { 
      en: 'Party / Group',
      ur: 'فریق / گروہ',
      hi_en: 'Fareeq / Group',
      ur_en: 'Fareeq / Giroh'
    } 
  },
  { 
    id: 'd8-w45',
    arabic: 'نَصَارَىٰ', 
    transliteration: 'Naṣārā', 
    translations: { 
      en: 'Christians',
      ur: 'عیسائی',
      hi_en: 'Isai',
      ur_en: 'Eesaai'
    } 
  },
  { 
    id: 'd8-w46',
    arabic: 'نِسَاء', 
    transliteration: 'Nisā\'', 
    translations: { 
      en: 'Women',
      ur: 'عورتیں',
      hi_en: 'Auratein',
      ur_en: 'Auratein'
    } 
  },
  { 
    id: 'd8-w47',
    arabic: 'رِجَال', 
    transliteration: 'Rijāl', 
    translations: { 
      en: 'Men',
      ur: 'مرد (جمع)',
      hi_en: 'Mard',
      ur_en: 'Mard (plural)'
    } 
  },
  { 
    id: 'd8-w48',
    arabic: 'عِظَام', 
    transliteration: '\'Iẓām', 
    translations: { 
      en: 'Bones',
      ur: 'ہڈیاں',
      hi_en: 'Haddiyan',
      ur_en: 'Haddiyan'
    } 
  },
  { 
    id: 'd8-w49',
    arabic: 'مَوْتَىٰ', 
    transliteration: 'Mawtā', 
    translations: { 
      en: 'The Dead',
      ur: 'مردے',
      hi_en: 'Murde',
      ur_en: 'Murday'
    } 
  },
  { 
    id: 'd8-w50',
    arabic: 'أَيْدِي', 
    transliteration: 'Aydī', 
    translations: { 
      en: 'Hands',
      ur: 'ہاتھ (جمع)',
      hi_en: 'Haath',
      ur_en: 'Haath (plural)'
    } 
  },
  { 
    id: 'd8-w51',
    arabic: 'أَعْيُن', 
    transliteration: 'A\'yun', 
    translations: { 
      en: 'Eyes',
      ur: 'آنکھیں',
      hi_en: 'Aankhein',
      ur_en: 'Aankhein'
    } 
  },
  { 
    id: 'd8-w52',
    arabic: 'أَزْوَاج', 
    transliteration: 'Azwāj', 
    translations: { 
      en: 'Spouses',
      ur: 'جوڑے / بیویاں',
      hi_en: 'Jode',
      ur_en: 'Joray / Biwiyan'
    } 
  },
  { 
    id: 'd8-w53',
    arabic: 'أَهْوَاء', 
    transliteration: 'Ahwā\'', 
    translations: { 
      en: 'Desires',
      ur: 'خواہشات',
      hi_en: 'Khwahishat',
      ur_en: 'Khwahishat'
    } 
  },
  { 
    id: 'd8-w54',
    arabic: 'أَلْبَاب', 
    transliteration: 'Albāb', 
    translations: { 
      en: 'Minds/Understanding',
      ur: 'عقل والے / مغز',
      hi_en: 'Aqal wale',
      ur_en: 'Aqal wale'
    } 
  },
  { 
    id: 'd8-w55',
    arabic: 'أَبْوَاب', 
    transliteration: 'Abwāb', 
    translations: { 
      en: 'Doors',
      ur: 'دروازے',
      hi_en: 'Darwaze',
      ur_en: 'Darwazay'
    } 
  },
  { 
    id: 'd8-w56',
    arabic: 'أَيْمَان', 
    transliteration: 'Aymān', 
    translations: { 
      en: 'Oaths',
      ur: 'قسمیں',
      hi_en: 'Qasmein',
      ur_en: 'Qasmein'
    } 
  }
];

export const CHAPTER_SEVEN: LevelNode = {
  id: 'p2-chapter-7',
  section: 'Phase 2: Expansion',
  title: 'Law, Reward & Punishment',
  description: 'Words about rulings and outcomes.',
  icon: '⚖️',
  color: 'bg-orange-500',
  locked: false,
  words: words
};
