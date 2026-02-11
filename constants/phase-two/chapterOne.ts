import { LevelNode, Word } from '../../config/types';

/**
 * Phase 2 — EXPANSION (50% → 65%)
 * Chapter 1: Divine Attributes
 * Names and qualities of Allah.
 */

const words: Word[] = [
  { 
    id: 'd5-w1',
    arabic: 'رَبّ', 
    transliteration: 'Rabb', 
    translations: {
      en: 'Lord',
      ur: 'رب / پروردگار',
      ur_en: 'Rabb / Parwardigar'
    } 
  },
  { 
    id: 'd5-w2',
    arabic: 'الرَّحْمٰن', 
    transliteration: 'Ar-Raḥmān', 
    translations: {
      en: 'Entirely Merciful',
      ur: 'نہایت مہربان',
      ur_en: 'Nihayat Meherban'
    } 
  },
  { 
    id: 'd5-w3',
    arabic: 'الرَّحِيم', 
    transliteration: 'Ar-Raḥīm', 
    translations: {
      en: 'Especially Merciful',
      ur: 'رحم کرنے والا',
      ur_en: 'Reham karne wala'
    } 
  },
  { 
    id: 'd5-w4',
    arabic: 'عَزِيز', 
    transliteration: '\'Azīz', 
    translations: {
      en: 'Mighty',
      ur: 'غالب / زبردست',
      ur_en: 'Ghalib / Zabardast'
    } 
  },
  { 
    id: 'd5-w5',
    arabic: 'حَكِيم', 
    transliteration: 'Ḥakīm', 
    translations: {
      en: 'Wise',
      ur: 'حکمت والا',
      ur_en: 'Hikmat wala'
    } 
  },
  { 
    id: 'd5-w6',
    arabic: 'غَفُور', 
    transliteration: 'Ghafūr', 
    translations: {
      en: 'Forgiving',
      ur: 'بخشنے والا',
      ur_en: 'Bakhushne wala'
    } 
  },
  { 
    id: 'd5-w7',
    arabic: 'حَلِيم', 
    transliteration: 'Ḥalīm', 
    translations: {
      en: 'Forbearing',
      ur: 'بردبار / تحمل والا',
      ur_en: 'Burd-baar'
    } 
  },
  { 
    id: 'd5-w8',
    arabic: 'عَظِيم', 
    transliteration: '\'Aẓīm', 
    translations: {
      en: 'Great',
      ur: 'عظمت والا',
      ur_en: 'Azmat wala'
    } 
  },
  { 
    id: 'd5-w9',
    arabic: 'عَلِيّ', 
    transliteration: '\'Aliyy', 
    translations: {
      en: 'High/Exalted',
      ur: 'بلند / عالی',
      ur_en: 'Buland / Aali'
    } 
  },
  { 
    id: 'd5-w10',
    arabic: 'عَلِيم', 
    transliteration: '\'Alīm', 
    translations: {
      en: 'All-Knowing',
      ur: 'جاننے والا',
      ur_en: 'Jaanne wala'
    } 
  },
  { 
    id: 'd5-w11',
    arabic: 'خَبِير', 
    transliteration: 'Khabīr', 
    translations: {
      en: 'Acquainted',
      ur: 'باخبر',
      ur_en: 'Ba-khabar'
    } 
  },
  { 
    id: 'd5-w12',
    arabic: 'سَمِيع', 
    transliteration: 'Samī\'', 
    translations: {
      en: 'All-Hearing',
      ur: 'سننے والا',
      ur_en: 'Sunne wala'
    } 
  },
  { 
    id: 'd5-w13',
    arabic: 'بَصِير', 
    transliteration: 'Baṣīr', 
    translations: {
      en: 'All-Seeing',
      ur: 'دیکھنے والا',
      ur_en: 'Dekhne wala'
    } 
  },
  { 
    id: 'd5-w14',
    arabic: 'شَكُور', 
    transliteration: 'Shakūr', 
    translations: {
      en: 'Appreciative',
      ur: 'قدردان',
      ur_en: 'Qadardaan'
    } 
  },
  { 
    id: 'd5-w15',
    arabic: 'قَدِير', 
    transliteration: 'Qadīr', 
    translations: {
      en: 'Competent',
      ur: 'قدرت والا',
      ur_en: 'Qudrat wala'
    } 
  },
  { 
    id: 'd5-w16',
    arabic: 'وَكِيل', 
    transliteration: 'Wakīl', 
    translations: {
      en: 'Disposer of Affairs',
      ur: 'کارساز',
      ur_en: 'Kaarsaaz'
    } 
  },
  { 
    id: 'd5-w17',
    arabic: 'نَصِير', 
    transliteration: 'Naṣīr', 
    translations: {
      en: 'Helper',
      ur: 'مددگار',
      ur_en: 'Madadgaar'
    } 
  },
  { 
    id: 'd5-w18',
    arabic: 'حَمِيد', 
    transliteration: 'Ḥamīd', 
    translations: {
      en: 'Praiseworthy',
      ur: 'تعریف والا',
      ur_en: 'Hameed'
    } 
  },
  { 
    id: 'd5-w19',
    arabic: 'تَوَّاب', 
    transliteration: 'Tawwāb', 
    translations: {
      en: 'Acceptor of Repentance',
      ur: 'توبہ قبول کرنے والا',
      ur_en: 'Tauba qubool karne wala'
    } 
  },
  { 
    id: 'd5-w20',
    arabic: 'أَوَّل', 
    transliteration: 'Awwal', 
    translations: {
      en: 'First',
      ur: 'پہلا',
      ur_en: 'Pehla'
    } 
  },
  { 
    id: 'd5-w21',
    arabic: 'ءَاخِر', 
    transliteration: 'Ākhir', 
    translations: {
      en: 'Last',
      ur: 'آخر',
      ur_en: 'Aakhir'
    } 
  },
  { 
    id: 'd5-w22',
    arabic: 'قَرِيب', 
    transliteration: 'Qarīb', 
    translations: {
      en: 'Near',
      ur: 'قریب',
      ur_en: 'Qareeb'
    } 
  },
  { 
    id: 'd5-w23',
    arabic: 'بَعِيد', 
    transliteration: 'Ba\'īd', 
    translations: {
      en: 'Far',
      ur: 'دور',
      ur_en: 'Door'
    } 
  },
  { 
    id: 'd5-w24',
    arabic: 'شَدِيد', 
    transliteration: 'Shadīd', 
    translations: {
      en: 'Severe / Strong',
      ur: 'سخت / شدید',
      ur_en: 'Shadeed / Sakht'
    } 
  },
  { 
    id: 'd5-w25',
    arabic: 'كَبِير', 
    transliteration: 'Kabīr', 
    translations: {
      en: 'Big / Great',
      ur: 'بڑا',
      ur_en: 'Bada / Kabeer'
    } 
  },
  { 
    id: 'd5-w26',
    arabic: 'أَكْبَر', 
    transliteration: 'Akbar', 
    translations: {
      en: 'Greater / Biggest',
      ur: 'سب سے بڑا',
      ur_en: 'Sab se bada'
    } 
  },
  { 
    id: 'd5-w27',
    arabic: 'كَثِير', 
    transliteration: 'Kathīr', 
    translations: {
      en: 'Many',
      ur: 'زیادہ / بہت',
      ur_en: 'Kaseer / Bohot'
    } 
  },
  { 
    id: 'd5-w28',
    arabic: 'أَكْثَر', 
    transliteration: 'Akthar', 
    translations: {
      en: 'More',
      ur: 'زیادہ تر',
      ur_en: 'Aksar'
    } 
  },
  { 
    id: 'd5-w29',
    arabic: 'سَرِيع', 
    transliteration: 'Sarī\'', 
    translations: {
      en: 'Fast / Swift',
      ur: 'جلد',
      ur_en: 'Jald'
    } 
  },
  { 
    id: 'd5-w30',
    arabic: 'قَلِيل', 
    transliteration: 'Qalīl', 
    translations: {
      en: 'Little / Few',
      ur: 'تھوڑا / کم',
      ur_en: 'Qaleel / Kam'
    } 
  },
  { 
    id: 'd5-w31',
    arabic: 'كَرِيم', 
    transliteration: 'Karīm', 
    translations: {
      en: 'Noble',
      ur: 'بزرگ',
      ur_en: 'Kareem / Buzurg'
    } 
  },
  { 
    id: 'd5-w32',
    arabic: 'حَفِيظ', 
    transliteration: 'Ḥafīẓ', 
    translations: {
      en: 'Guardian',
      ur: 'حفاظت کرنے والا',
      ur_en: 'Muhaafiz'
    } 
  },
  { 
    id: 'd5-w33',
    arabic: 'أَحْسَن', 
    transliteration: 'Aḥsan', 
    translations: {
      en: 'Better / Best',
      ur: 'بہترین / زیادہ اچھا',
      ur_en: 'Behtareen'
    } 
  },
  { 
    id: 'd5-w34',
    arabic: 'أَظْلَم', 
    transliteration: 'Aẓlam', 
    translations: {
      en: 'More Unjust',
      ur: 'زیادہ ظالم',
      ur_en: 'Bada zalim'
    } 
  },
  { 
    id: 'd5-w35',
    arabic: 'أَحَقّ', 
    transliteration: 'Aḥaqq', 
    translations: {
      en: 'More Worthy',
      ur: 'زیادہ حقدار',
      ur_en: 'Zyada haqdar'
    } 
  },
  { 
    id: 'd5-w36',
    arabic: 'أَدْنَىٰ', 
    transliteration: 'Adnā', 
    translations: {
      en: 'Nearer / Lower',
      ur: 'قریب تر / ادنیٰ',
      ur_en: 'Adna / Qareeb tar'
    } 
  }
];

export const CHAPTER_ONE: LevelNode = {
  id: 'p2-chapter-1',
  section: 'Phase 2: Expansion',
  title: 'Divine Attributes',
  description: 'Names and qualities of Allah.',
  icon: '✨',
  color: 'bg-blue-500',
  locked: false,
  words: words
};
