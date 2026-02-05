import { LevelNode, Word } from '../../config/types';

/**
 * Phase 2 — EXPANSION (50% → 65%)
 * Chapter 4: Creation & Signs
 * Words about nature and signs of Allah.
 */

const words: Word[] = [
  { 
    id: 'd7-w1',
    arabic: 'إِلٰه', 
    transliteration: 'Ilāh', 
    translations: { 
      en: 'God / Deity',
      ur: 'معبود',
      hi_en: 'Mabood',
      ur_en: 'Mabood'
    } 
  },
  { 
    id: 'd7-w2',
    arabic: 'وَاحِد', 
    transliteration: 'Wāḥid', 
    translations: { 
      en: 'One',
      ur: 'ایک',
      hi_en: 'Ek',
      ur_en: 'Aik'
    } 
  },
  { 
    id: 'd7-w3',
    arabic: 'أَحَد', 
    transliteration: 'Aḥad', 
    translations: { 
      en: 'One (Unique)',
      ur: 'ایک (اکیلا)',
      hi_en: 'Ek (Akela)',
      ur_en: 'Aik (Akela)'
    } 
  },
  { 
    id: 'd7-w4',
    arabic: 'شَرِيك', 
    transliteration: 'Sharīk', 
    translations: { 
      en: 'Partner',
      ur: 'شریک',
      hi_en: 'Shareek',
      ur_en: 'Shareek'
    } 
  },
  { 
    id: 'd7-w5',
    arabic: 'غَيْب', 
    transliteration: 'Ghayb', 
    translations: { 
      en: 'Unseen',
      ur: 'غیب / چھپا ہوا',
      hi_en: 'Ghaib',
      ur_en: 'Ghaib'
    } 
  },
  { 
    id: 'd7-w6',
    arabic: 'شَهَادَة', 
    transliteration: 'Shahādah', 
    translations: { 
      en: 'Witnessed (Visible)',
      ur: 'ظاہر / گواہی',
      hi_en: 'Zaahir / Gawahi',
      ur_en: 'Zaahir / Gawahi'
    } 
  },
  { 
    id: 'd7-w7',
    arabic: 'عَرْش', 
    transliteration: '\'Arsh', 
    translations: { 
      en: 'Throne',
      ur: 'عرش / تخت',
      hi_en: 'Arsh / Takht',
      ur_en: 'Arsh / Takht'
    } 
  },
  { 
    id: 'd7-w8',
    arabic: 'كِتَاب', 
    transliteration: 'Kitāb', 
    translations: { 
      en: 'Book',
      ur: 'کتاب',
      hi_en: 'Kitaab',
      ur_en: 'Kitaab'
    } 
  },
  { 
    id: 'd7-w9',
    arabic: 'كَلِمَة', 
    transliteration: 'Kalimah', 
    translations: { 
      en: 'Word',
      ur: 'بات / کلمہ',
      hi_en: 'Baat / Kalma',
      ur_en: 'Baat / Kalma'
    } 
  },
  { 
    id: 'd7-w10',
    arabic: 'مَلَك', 
    transliteration: 'Malak', 
    translations: { 
      en: 'Angel',
      ur: 'فرشتہ',
      hi_en: 'Farishta',
      ur_en: 'Farishta'
    } 
  },
  { 
    id: 'd7-w11',
    arabic: 'عَهْد', 
    transliteration: '\'Ahd', 
    translations: { 
      en: 'Covenant',
      ur: 'وعدہ / عہد',
      hi_en: 'Wada / Ahad',
      ur_en: 'Wadah / Ahad'
    } 
  },
  { 
    id: 'd7-w12',
    arabic: 'مِيثَاق', 
    transliteration: 'Mīthāq', 
    translations: { 
      en: 'Pledge',
      ur: 'پکا وعدہ',
      hi_en: 'Pakka wada',
      ur_en: 'Pakka wadah'
    } 
  },
  { 
    id: 'd7-w13',
    arabic: 'إِذْن', 
    transliteration: 'Idhn', 
    translations: { 
      en: 'Permission',
      ur: 'اجازت',
      hi_en: 'Ijazat',
      ur_en: 'Ijazat'
    } 
  },
  { 
    id: 'd7-w14',
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
    id: 'd7-w15',
    arabic: 'عَمَل', 
    transliteration: '\'Amal', 
    translations: { 
      en: 'Deed / Work',
      ur: 'عمل / کام',
      hi_en: 'Amal / Kaam',
      ur_en: 'Amal / Kaam'
    } 
  },
  { 
    id: 'd7-w16',
    arabic: 'حَسَنَة', 
    transliteration: 'Ḥasanah', 
    translations: { 
      en: 'Good deed',
      ur: 'نیکی / بھلائی',
      hi_en: 'Neki / Bhalayi',
      ur_en: 'Neki / Bhalai'
    } 
  },
  { 
    id: 'd7-w17',
    arabic: 'سَيِّئَة', 
    transliteration: 'Sayyi\'ah', 
    translations: { 
      en: 'Bad deed',
      ur: 'برائی / گناہ',
      hi_en: 'Burayi / Gunah',
      ur_en: 'Burai / Gunah'
    } 
  },
  { 
    id: 'd7-w18',
    arabic: 'خَيْر', 
    transliteration: 'Khayr', 
    translations: { 
      en: 'Good / Better',
      ur: 'بہتر / بھلا',
      hi_en: 'Behtar / Bhala',
      ur_en: 'Behtar / Bhala'
    } 
  },
  { 
    id: 'd7-w19',
    arabic: 'شَرّ', 
    transliteration: 'Sharr', 
    translations: { 
      en: 'Evil / Worse',
      ur: 'برا / بدتر',
      hi_en: 'Bura / Badtar',
      ur_en: 'Bura / Badtar'
    } 
  },
  { 
    id: 'd7-w20',
    arabic: 'إِثْم', 
    transliteration: 'Ithm', 
    translations: { 
      en: 'Sin',
      ur: 'گناہ',
      hi_en: 'Gunah',
      ur_en: 'Gunah'
    } 
  },
  { 
    id: 'd7-w21',
    arabic: 'ذَنْب', 
    transliteration: 'Dhanb', 
    translations: { 
      en: 'Sin/Fault',
      ur: 'گناہ / قصور',
      hi_en: 'Gunah / Kasoor',
      ur_en: 'Gunah / Qasoor'
    } 
  },
  { 
    id: 'd7-w22',
    arabic: 'جُنَاح', 
    transliteration: 'Junāḥ', 
    translations: { 
      en: 'Blame',
      ur: 'گناہ / مضائقہ',
      hi_en: 'Harch / Gunah',
      ur_en: 'Gunah / Harj'
    } 
  },
  { 
    id: 'd7-w23',
    arabic: 'حَرَام', 
    transliteration: 'Ḥarām', 
    translations: { 
      en: 'Forbidden',
      ur: 'حرام / منع',
      hi_en: 'Haram / Mana',
      ur_en: 'Haram'
    } 
  },
  { 
    id: 'd7-w24',
    arabic: 'حَلَال', 
    transliteration: 'Ḥalāl', 
    translations: { 
      en: 'Permissible',
      ur: 'حلال / جائز',
      hi_en: 'Halal / Jaiz',
      ur_en: 'Halal'
    } 
  },
  { 
    id: 'd7-w25',
    arabic: 'حَدِيث', 
    transliteration: 'Ḥadīth', 
    translations: { 
      en: 'Discourse / Speech',
      ur: 'بات / حدیث',
      hi_en: 'Baat / Hadees',
      ur_en: 'Baat / Hadees'
    } 
  },
  { 
    id: 'd7-w26',
    arabic: 'طَيِّب', 
    transliteration: 'Ṭayyib', 
    translations: { 
      en: 'Good/Pure',
      ur: 'پاک / اچھا',
      hi_en: 'Paak / Acha',
      ur_en: 'Paak / Acha'
    } 
  },
  { 
    id: 'd7-w27',
    arabic: 'أَجْر', 
    transliteration: 'Ajr', 
    translations: { 
      en: 'Reward / Wage',
      ur: 'اجر / بدلہ',
      hi_en: 'Ajar / Badla',
      ur_en: 'Ajar / Badla'
    } 
  },
  { 
    id: 'd7-w28',
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
    id: 'd7-w29',
    arabic: 'يَوْمَئِذٍ', 
    transliteration: 'Yawma\'idhin', 
    translations: { 
      en: 'That Day',
      ur: 'اس دن',
      hi_en: 'Us din',
      ur_en: 'Us din'
    } 
  },
  { 
    id: 'd7-w30',
    arabic: 'القِيَامَة', 
    transliteration: 'Al-Qiyāmah', 
    translations: { 
      en: 'Resurrection',
      ur: 'قیامت',
      hi_en: 'Qayamat',
      ur_en: 'Qayamat'
    } 
  },
  { 
    id: 'd7-w31',
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
    id: 'd7-w32',
    arabic: 'أَجَل', 
    transliteration: 'Ajal', 
    translations: { 
      en: 'Term / Time limit',
      ur: 'مقررہ وقت / مدت',
      hi_en: 'Muddat / Waqt',
      ur_en: 'Muddat / Waqt'
    } 
  },
  { 
    id: 'd7-w33',
    arabic: 'مُسَمًّى', 
    transliteration: 'Musamman', 
    translations: { 
      en: 'Specified',
      ur: 'مقرر شدہ',
      hi_en: 'Muqarrar',
      ur_en: 'Muqarrar'
    } 
  },
  { 
    id: 'd7-w34',
    arabic: 'حِسَاب', 
    transliteration: 'Ḥisāb', 
    translations: { 
      en: 'Account',
      ur: 'حساب',
      hi_en: 'Hisab',
      ur_en: 'Hisab'
    } 
  },
  { 
    id: 'd7-w35',
    arabic: 'الآخِرَة', 
    transliteration: 'Al-Ākhirah', 
    translations: { 
      en: 'Hereafter',
      ur: 'آخرت',
      hi_en: 'Aakhirat',
      ur_en: 'Aakhirat'
    } 
  },
  { 
    id: 'd7-w36',
    arabic: 'أَبَدًا', 
    transliteration: 'Abadan', 
    translations: { 
      en: 'Forever',
      ur: 'ہمیشہ / کبھی',
      hi_en: 'Hamesha / Kabhi',
      ur_en: 'Hamesha / Kabhi'
    } 
  },
  { 
    id: 'd7-w37',
    arabic: 'عَاقِبَة', 
    transliteration: '\'Āqibah', 
    translations: { 
      en: 'End / Outcome',
      ur: 'انجام',
      hi_en: 'Anjaam',
      ur_en: 'Anjaam'
    } 
  },
  { 
    id: 'd7-w38',
    arabic: 'جَهَنَّم / نَار', 
    transliteration: 'Jahannam / Nār', 
    translations: { 
      en: 'Hell / Fire',
      ur: 'جہنم / آگ',
      hi_en: 'Jahannum / Aag',
      ur_en: 'Jahannum / Aag'
    } 
  },
  { 
    id: 'd7-w39',
    arabic: 'وَيْل', 
    transliteration: 'Wayl', 
    translations: { 
      en: 'Woe',
      ur: 'بربادی / ہلاکت',
      hi_en: 'Barbadi',
      ur_en: 'Barbadi / Halakat'
    } 
  },
  { 
    id: 'd7-w40',
    arabic: 'عِقَاب', 
    transliteration: '\'Iqāb', 
    translations: { 
      en: 'Penalty',
      ur: 'سزا / عذاب',
      hi_en: 'Saza',
      ur_en: 'Saza'
    } 
  },
  { 
    id: 'd7-w41',
    arabic: 'عَذَاب', 
    transliteration: '\'Adhāb', 
    translations: { 
      en: 'Punishment',
      ur: 'عذاب',
      hi_en: 'Azaab',
      ur_en: 'Azaab'
    } 
  },
  { 
    id: 'd7-w42',
    arabic: 'أَلِيم', 
    transliteration: 'Alīm', 
    translations: { 
      en: 'Painful',
      ur: 'دردناک',
      hi_en: 'Dardnak',
      ur_en: 'Dardnaak'
    } 
  },
  { 
    id: 'd7-w43',
    arabic: 'جَزَاء', 
    transliteration: 'Jazā\'', 
    translations: { 
      en: 'Recompense',
      ur: 'بدلہ',
      hi_en: 'Badla',
      ur_en: 'Badla'
    } 
  },
  { 
    id: 'd7-w44',
    arabic: 'ثَوَاب', 
    transliteration: 'Thawāb', 
    translations: { 
      en: 'Reward',
      ur: 'ثواب / بدلہ',
      hi_en: 'Sawab',
      ur_en: 'Sawab'
    } 
  },
  { 
    id: 'd7-w45',
    arabic: 'جَنَّة', 
    transliteration: 'Jannah', 
    translations: { 
      en: 'Paradise / Garden',
      ur: 'جنت / باغ',
      hi_en: 'Jannat / Baagh',
      ur_en: 'Jannat / Baagh'
    } 
  }
];

export const CHAPTER_FOUR: LevelNode = {
  id: 'p2-chapter-4',
  section: 'Phase 2: Expansion',
  title: 'Creation & Signs',
  description: 'Words about nature and signs of Allah.',
  icon: '🌍',
  color: 'bg-indigo-500',
  locked: false,
  words: words
};
