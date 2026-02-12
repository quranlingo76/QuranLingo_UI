import { LevelNode, Word } from '../../config/types';

/**
 * Chapter 4: Prepositions
 * Phase 1: Foundation
 * 
 * What this chapter teaches:
 * Relationship words that show location, direction, relationship, and cause.
 * 
 * Examples: In, On, From, To, With, Over, Under
 * 
 * Purpose:
 * These words appear everywhere in Qur'an and help understand:
 * - Location
 * - Direction  
 * - Relationship
 * - Cause
 */

// TODO: Replace with actual preposition words from PDF List 4
const words: Word[] = [
  {
    id: 'ch4-w1',
    arabic: 'فَوْقَ',
    transliteration: 'Fawqa',
    translations: {
      en: 'Above',
      ur: 'اوپر',
      ur_en: 'Oopar'
    }
  },
  {
    id: 'ch4-w2',
    arabic: 'تَحْتَ',
    transliteration: 'Taḥta',
    translations: {
      en: 'Under',
      ur: 'نیچے',
      ur_en: 'Neeche'
    }
  },
  {
    id: 'ch4-w3',
    arabic: 'يَمِين',
    transliteration: 'Yamīn',
    translations: {
      en: 'Right',
      ur: 'دائیں',
      ur_en: 'Daayein'
    }
  },
  {
    id: 'ch4-w4',
    arabic: 'شِمَال',
    transliteration: 'Shimāl',
    translations: {
      en: 'Left',
      ur: 'بائیں',
      ur_en: 'Baayein'
    }
  },
  {
    id: 'ch4-w5',
    arabic: 'بَيْنَ',
    transliteration: 'Bayna',
    translations: {
      en: 'Between',
      ur: 'درمیان',
      ur_en: 'Darmiyan'
    }
  },
  {
    id: 'ch4-w6',
    arabic: 'بَيْنَ أَيْدِي',
    transliteration: 'Bayna aydī',
    translations: {
      en: 'Before (between hands)',
      ur: 'سامنے (ہاتھوں کے درمیان)',
      ur_en: 'Saamne'
    }
  },
  {
    id: 'ch4-w7',
    arabic: 'خَلْفَ',
    transliteration: 'Khalfa',
    translations: {
      en: 'After / Behind',
      ur: 'پیچھے',
      ur_en: 'Peeche'
    }
  },
  {
    id: 'ch4-w8',
    arabic: 'وَرَاءَ',
    transliteration: 'Warā\'a',
    translations: {
      en: 'Behind / Beyond',
      ur: 'پیچھے / پرے',
      ur_en: 'Peeche / Pare'
    }
  },
  {
    id: 'ch4-w9',
    arabic: 'حَوْلَ',
    transliteration: 'Ḥawla',
    translations: {
      en: 'Around',
      ur: 'ارد گرد',
      ur_en: 'Ird gird'
    }
  },
  {
    id: 'ch4-w10',
    arabic: 'حَيْثُ',
    transliteration: 'Ḥaythu',
    translations: {
      en: 'Wherever',
      ur: 'جہاں',
      ur_en: 'Jahan'
    }
  },
  {
    id: 'ch4-w11',
    arabic: 'أَيْنَمَا',
    transliteration: 'Aynamā',
    translations: {
      en: 'Wherever',
      ur: 'جہاں کہیں',
      ur_en: 'Jahan kahin'
    }
  },
  {
    id: 'ch4-w12',
    arabic: 'بـِ',
    transliteration: 'Bi',
    translations: {
      en: 'In / By / With',
      ur: 'ساتھ / ذریعے / میں',
      ur_en: 'Saath / Zariye / Mein'
    }
  }
];

export const CHAPTER_FOUR: LevelNode = {
  id: 'chapter-4',
  section: 'Phase 1: Foundation',
  title: 'Prepositions',
  description: 'Relationship words showing location, direction, and cause.',
  icon: '📍',
  color: 'bg-indigo-500',
  locked: false,
  words: words
};
