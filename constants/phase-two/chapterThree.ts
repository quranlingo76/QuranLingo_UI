import { LevelNode, Word } from '../../config/types';

/**
 * Phase 2 — EXPANSION (50% → 65%)
 * Chapter 3: Messengers & Prophets
 * Words related to prophets and their message.
 */

const words: Word[] = [
  { 
    id: 'd6-w1',
    arabic: 'رَسُول', 
    transliteration: 'Rasūl', 
    translations: {
      en: 'Messenger',
      ur: 'رسول / پیغام لانے والا',
      ur_en: 'Rasool / Paigham lane wala'
    } 
  },
  { 
    id: 'd6-w2',
    arabic: 'نَبِيّ', 
    transliteration: 'Nabīyy', 
    translations: {
      en: 'Prophet',
      ur: 'نبی',
      ur_en: 'Nabi'
    } 
  },
  { 
    id: 'd6-w3',
    arabic: 'أَمِين', 
    transliteration: 'Amīn', 
    translations: {
      en: 'Trustworthy',
      ur: 'امانت دار',
      ur_en: 'Amanat daar'
    } 
  },
  { 
    id: 'd6-w4',
    arabic: 'نَذِير', 
    transliteration: 'Nadhīr', 
    translations: {
      en: 'Warner',
      ur: 'ڈرانے والا',
      ur_en: 'Darane wala'
    } 
  },
  { 
    id: 'd6-w5',
    arabic: 'ءَايَة', 
    transliteration: 'Āyah', 
    translations: {
      en: 'Sign/Verse',
      ur: 'نشانی / آیت',
      ur_en: 'Nishani / Ayat'
    } 
  },
  { 
    id: 'd6-w6',
    arabic: 'الْقُرْءَان', 
    transliteration: 'Al-Qur\'ān', 
    translations: {
      en: 'The Qur\'an',
      ur: 'قرآن',
      ur_en: 'Quran'
    } 
  },
  { 
    id: 'd6-w7',
    arabic: 'الْإِنْجِيل', 
    transliteration: 'Al-Injīl', 
    translations: {
      en: 'The Gospel',
      ur: 'انجیل',
      ur_en: 'Injeel'
    } 
  },
  { 
    id: 'd6-w8',
    arabic: 'التَّوْرَاة', 
    transliteration: 'At-Tawrāt', 
    translations: {
      en: 'The Torah',
      ur: 'تورات',
      ur_en: 'Taurat'
    } 
  },
  { 
    id: 'd6-w9',
    arabic: 'أَنْعَام', 
    transliteration: 'An\'ām', 
    translations: {
      en: 'Livestock',
      ur: 'مویشی',
      ur_en: 'Maweshi'
    } 
  },
  { 
    id: 'd6-w10',
    arabic: 'جَبَل', 
    transliteration: 'Jabal', 
    translations: {
      en: 'Mountain',
      ur: 'پہاڑ',
      ur_en: 'Pahaar'
    } 
  },
  { 
    id: 'd6-w11',
    arabic: 'بَحْر', 
    transliteration: 'Baḥr', 
    translations: {
      en: 'Sea',
      ur: 'سمندر',
      ur_en: 'Samandar'
    } 
  },
  { 
    id: 'd6-w12',
    arabic: 'نَهْر', 
    transliteration: 'Nahr', 
    translations: {
      en: 'River',
      ur: 'نہر',
      ur_en: 'Nehar'
    } 
  },
  { 
    id: 'd6-w13',
    arabic: 'شَمْس', 
    transliteration: 'Shams', 
    translations: {
      en: 'Sun',
      ur: 'سورج',
      ur_en: 'Sooraj'
    } 
  },
  { 
    id: 'd6-w14',
    arabic: 'قَمَر', 
    transliteration: 'Qamar', 
    translations: {
      en: 'Moon',
      ur: 'چاند',
      ur_en: 'Chaand'
    } 
  },
  { 
    id: 'd6-w15',
    arabic: 'لَيْل', 
    transliteration: 'Layl', 
    translations: {
      en: 'Night',
      ur: 'رات',
      ur_en: 'Raat'
    } 
  },
  { 
    id: 'd6-w16',
    arabic: 'نَهار', 
    transliteration: 'Nahār', 
    translations: {
      en: 'Daytime',
      ur: 'دن',
      ur_en: 'Din'
    } 
  },
  { 
    id: 'd6-w17',
    arabic: 'أَرْض', 
    transliteration: 'Arḍ', 
    translations: {
      en: 'Earth',
      ur: 'زمین',
      ur_en: 'Zameen'
    } 
  },
  { 
    id: 'd6-w18',
    arabic: 'سَمَاء', 
    transliteration: 'Samā\'', 
    translations: {
      en: 'Sky',
      ur: 'آسمان',
      ur_en: 'Aasman'
    } 
  },
  { 
    id: 'd6-w19',
    arabic: 'ءَالَاء', 
    transliteration: 'Ālā\'', 
    translations: {
      en: 'Favors',
      ur: 'نعمتیں / احسانات',
      ur_en: 'Naimatein'
    } 
  },
  { 
    id: 'd6-w20',
    arabic: 'نِعْمَة', 
    transliteration: 'Ni\'mah', 
    translations: {
      en: 'Blessing',
      ur: 'نعمت',
      ur_en: 'Naimat'
    } 
  },
  { 
    id: 'd6-w21',
    arabic: 'فَضْل', 
    transliteration: 'Faḍl', 
    translations: {
      en: 'Bounty',
      ur: 'فضل / کرم',
      ur_en: 'Fazal'
    } 
  },
  { 
    id: 'd6-w22',
    arabic: 'مَاء', 
    transliteration: 'Mā\'', 
    translations: {
      en: 'Water',
      ur: 'پانی',
      ur_en: 'Paani'
    } 
  },
  { 
    id: 'd6-w23',
    arabic: 'دِين', 
    transliteration: 'Dīn', 
    translations: {
      en: 'Religion / Judgment',
      ur: 'دین / بدلے کا دن',
      ur_en: 'Deen / Badla'
    } 
  },
  { 
    id: 'd6-w24',
    arabic: 'أَمْر', 
    transliteration: 'Amr', 
    translations: {
      en: 'Command',
      ur: 'حکم / کام',
      ur_en: 'Hukam'
    } 
  },
  { 
    id: 'd6-w25',
    arabic: 'أُمُور', 
    transliteration: 'Umūr', 
    translations: {
      en: 'Matters',
      ur: 'کام (جمع)',
      ur_en: 'Kaam (plural)'
    } 
  },
  { 
    id: 'd6-w26',
    arabic: 'صَلَاة', 
    transliteration: 'Ṣalāh', 
    translations: {
      en: 'Prayer',
      ur: 'نماز',
      ur_en: 'Namaz'
    } 
  },
  { 
    id: 'd6-w27',
    arabic: 'زَكَاة', 
    transliteration: 'Zakāh', 
    translations: {
      en: 'Charity',
      ur: 'زکوٰۃ',
      ur_en: 'Zakat'
    } 
  },
  { 
    id: 'd6-w28',
    arabic: 'حَقّ', 
    transliteration: 'Ḥaqq', 
    translations: {
      en: 'Truth',
      ur: 'حق / سچ',
      ur_en: 'Haq'
    } 
  },
  { 
    id: 'd6-w29',
    arabic: 'بَاطِل', 
    transliteration: 'Bāṭil', 
    translations: {
      en: 'Falsehood',
      ur: 'باطل / جھوٹ',
      ur_en: 'Baatil'
    } 
  },
  { 
    id: 'd6-w30',
    arabic: 'حَمْد', 
    transliteration: 'Ḥamd', 
    translations: {
      en: 'Praise',
      ur: 'تعریف / حمد',
      ur_en: 'Hamd / Tareef'
    } 
  },
  { 
    id: 'd6-w31',
    arabic: 'حِكْمَة', 
    transliteration: 'Ḥikmah', 
    translations: {
      en: 'Wisdom',
      ur: 'حکمت / دانائی',
      ur_en: 'Hikmat'
    } 
  },
  { 
    id: 'd6-w32',
    arabic: 'تَقْوىٰ', 
    transliteration: 'Taqwā', 
    translations: {
      en: 'Piety / Consciousness',
      ur: 'تقویٰ / پرہیزگاری',
      ur_en: 'Taqwa'
    } 
  },
  { 
    id: 'd6-w33',
    arabic: 'شَهِيد', 
    transliteration: 'Shahīd', 
    translations: {
      en: 'Witness',
      ur: 'گواہ',
      ur_en: 'Gawah'
    } 
  },
  { 
    id: 'd6-w34',
    arabic: 'مُبِين', 
    transliteration: 'Mubīn', 
    translations: {
      en: 'Clear',
      ur: 'واضح / کھلا',
      ur_en: 'Wazeh'
    } 
  },
  { 
    id: 'd6-w35',
    arabic: 'نُور', 
    transliteration: 'Nūr', 
    translations: {
      en: 'Light',
      ur: 'نور / روشنی',
      ur_en: 'Noor'
    } 
  },
  { 
    id: 'd6-w36',
    arabic: 'سَلَام', 
    transliteration: 'Salām', 
    translations: {
      en: 'Peace',
      ur: 'سلامتی',
      ur_en: 'Salamti'
    } 
  },
  { 
    id: 'd6-w37',
    arabic: 'مُلْك', 
    transliteration: 'Mulk', 
    translations: {
      en: 'Dominion / Kingdom',
      ur: 'بادشاہی / ملک',
      ur_en: 'Baadshahi'
    } 
  },
  { 
    id: 'd6-w38',
    arabic: 'سُلْطَان', 
    transliteration: 'Sulṭān', 
    translations: {
      en: 'Authority',
      ur: 'غلبہ / دلیل',
      ur_en: 'Ghalba / Daleel'
    } 
  }
];

export const CHAPTER_THREE: LevelNode = {
  id: 'p2-chapter-3',
  section: 'Phase 2: Expansion',
  title: 'Messengers & Prophets',
  description: 'Words related to prophets and their message.',
  icon: '📜',
  color: 'bg-amber-500',
  locked: false,
  words: words
};
