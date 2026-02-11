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
