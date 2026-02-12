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
