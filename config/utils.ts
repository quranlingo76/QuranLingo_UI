
import { ParsedWord, LevelNode, Word } from './types';

const generateStableId = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `wd-${Math.abs(hash)}`;
};

/**
 * Parse word data - supports both old string format and new Word object format
 */
export const parseWord = (rawData: string | Word, index: number, lang: string = 'en'): ParsedWord => {
  try {
    // New format: Word object
    if (typeof rawData === 'object' && 'arabic' in rawData) {
      const word = rawData as Word;
      const stableId = generateStableId(word.arabic);
      
      const translation = (word.translations as any)[lang] || word.translations.en;
      
      // Debug log to verify language selection
      // console.log(`Parsing word: ${word.id}, Lang: ${lang}, Translation: ${translation}`);

      return {
        id: stableId,
        original: `${word.arabic} (${word.transliteration}) - ${translation}`,
        arabic: word.arabic,
        transliteration: word.transliteration,
        english: translation, // We map the selected translation to the 'english' field for UI compatibility
        examples: word.examples?.map(ex => ({
          ...ex,
          translation: (ex.translations && (ex.translations as any)[lang]) || 
                       (ex.translations && ex.translations.en) || 
                       ex.translation
        })),
        gender: word.gender
      };
    }
    
    // Old format: String parsing
    const rawString = rawData as string;
    const parts = rawString.split(/ - | – /);
    const arabicPart = parts[0].trim();
    const stableId = generateStableId(arabicPart);

    if (parts.length < 2) {
      return {
        id: stableId,
        original: rawString,
        arabic: rawString,
        transliteration: '',
        english: 'Translation unavailable'
      };
    }

    const english = parts.slice(1).join(' - ').trim(); 
    const transliterationMatch = arabicPart.match(/\((.*?)\)/);
    const transliteration = transliterationMatch ? transliterationMatch[1] : '';
    const arabic = arabicPart.replace(/\(.*?\)/, '').trim();

    return {
      id: stableId,
      original: rawString,
      arabic,
      transliteration,
      english
    };
  } catch (e) {
    console.error("Error parsing word:", rawData, e);
    const fallbackArabic = typeof rawData === 'string' ? rawData : rawData.arabic;
    return {
      id: `word-error-${index}`,
      original: typeof rawData === 'string' ? rawData : `${rawData.arabic} (${rawData.transliteration})`,
      arabic: fallbackArabic,
      transliteration: '',
      english: ''
    };
  }
};

export const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const calculateTotalComprehension = (completedLevelIds: string[], curriculum: LevelNode[]): number => {
  let foundationWords = 0;
  let foundationCompleted = 0;
  
  let expansionWords = 0;
  let expansionCompleted = 0;
  
  let masteryWords = 0;
  let masteryCompleted = 0;

  curriculum.forEach(level => {
    const wordCount = level.words.length;
    const isCompleted = completedLevelIds.includes(level.id);
    
    if (level.section.includes('Foundation')) {
      foundationWords += wordCount;
      if (isCompleted) foundationCompleted += wordCount;
    } 
    else if (level.section.includes('Expansion')) {
      expansionWords += wordCount;
      if (isCompleted) expansionCompleted += wordCount;
    } 
    else if (level.section.includes('Mastery')) {
      masteryWords += wordCount;
      if (isCompleted) masteryCompleted += wordCount;
    }
  });

  const fScore = foundationWords > 0 ? (foundationCompleted / foundationWords) * 50 : 0;
  const eScore = expansionWords > 0 ? (expansionCompleted / expansionWords) * 40 : 0;
  const mScore = masteryWords > 0 ? (masteryCompleted / masteryWords) * 10 : 0;
  
  return Math.floor(fScore + eScore + mScore);
};
