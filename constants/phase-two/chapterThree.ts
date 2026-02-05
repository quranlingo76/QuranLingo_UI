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
      hi_en: 'Rasool / Paigham lane wala',
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
      hi_en: 'Nabi',
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
      hi_en: 'Amanat daar',
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
      hi_en: 'Darane wala',
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
      hi_en: 'Nishani / Ayat',
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
      hi_en: 'Quran',
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
      hi_en: 'Injeel',
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
      hi_en: 'Taurat',
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
      hi_en: 'Janwar (Maweshi)',
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
      hi_en: 'Pahad',
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
      hi_en: 'Samandar',
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
      hi_en: 'Nehar',
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
      hi_en: 'Sooraj',
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
      hi_en: 'Chaand',
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
      hi_en: 'Raat',
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
      hi_en: 'Din',
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
      hi_en: 'Zameen',
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
      hi_en: 'Aasman',
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
      hi_en: 'Naimatein',
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
      hi_en: 'Wala',
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
      hi_en: 'Fazal',
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
      hi_en: 'Paani',
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
      hi_en: 'Deen',
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
      hi_en: 'Hukum / Kaam',
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
      hi_en: 'Kaam (plural)',
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
      hi_en: 'Namaz',
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
      hi_en: 'Zakat',
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
      hi_en: 'Haq / Sach',
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
      hi_en: 'Baatil / Jhoot',
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
      hi_en: 'Tareef',
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
      hi_en: 'Hikmat',
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
      hi_en: 'Taqwa / Dar',
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
      hi_en: 'Gawah',
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
      hi_en: 'Saaf / Wazeh',
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
      hi_en: 'Roshni',
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
      hi_en: 'Salamati / Aman',
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
      hi_en: 'Badshahat',
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
      hi_en: 'Ghalba / Daleel',
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
