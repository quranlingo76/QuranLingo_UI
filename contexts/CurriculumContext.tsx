import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { curriculumApi, ApiPhase, ApiWord } from '../services/api';
import { LevelNode, Word } from '../config/types';

// ─── Types ────────────────────────────────────────────────────────

interface CurriculumContextType {
  /** The curriculum array (LevelNode[]) — always from API */
  curriculum: LevelNode[];
  /** Whether the curriculum is currently being loaded from the API */
  isLoading: boolean;
  /** Any error that occurred during loading */
  error: string | null;
  /** Fetch words for a specific chapter (lazy loading) */
  fetchChapterWords: (levelId: string) => Promise<LevelNode | null>;
  /** Reload curriculum from API */
  refreshCurriculum: () => Promise<void>;
}

// ─── Helpers ──────────────────────────────────────────────────────

// Color palette for chapters
const PHASE_COLORS: Record<string, string[]> = {
  'Phase 1': ['bg-green-500', 'bg-blue-500', 'bg-purple-500', 'bg-rose-500', 'bg-orange-500', 'bg-teal-500', 'bg-indigo-500'],
  'Phase 2': ['bg-cyan-500', 'bg-violet-500', 'bg-emerald-500', 'bg-blue-500', 'bg-rose-500', 'bg-orange-500', 'bg-green-500', 'bg-purple-500', 'bg-teal-500', 'bg-indigo-500', 'bg-cyan-500', 'bg-red-500'],
  'Phase 3': ['bg-indigo-500', 'bg-rose-500'],
};

const CHAPTER_ICONS = ['📖', '✨', '🌟', '🎯', '💎', '🔥', '⭐', '🌙', '📚', '🏆', '🎓', '👑'];

/** Convert API word to frontend Word type */
const apiWordToWord = (apiWord: ApiWord): Word => ({
  id: apiWord.wordId,
  arabic: apiWord.arabic,
  transliteration: apiWord.transliteration,
  translations: apiWord.translations,
  gender: apiWord.gender,
  examples: apiWord.examples?.map(ex => ({
    arabic: ex.arabic,
    translation: ex.translation || ex.translations?.en || '',
    translations: ex.translations,
    ref: ex.ref,
  })),
});

/** Convert API phases overview into LevelNode[] (without words — lazy loaded) */
const buildCurriculumFromApi = (phases: ApiPhase[]): LevelNode[] => {
  const levels: LevelNode[] = [];

  phases.forEach((phase, phaseIdx) => {
    const phaseNumber = phaseIdx + 1;
    const sectionName = phaseNumber === 1 ? 'Phase 1: Foundation'
      : phaseNumber === 2 ? 'Phase 2: Expansion'
      : 'Phase 3: Mastery';

    const colors = PHASE_COLORS[`Phase ${phaseNumber}`] || PHASE_COLORS['Phase 1'];

    phase.chapters.forEach((chapter, chapterIdx) => {
      levels.push({
        id: `${phase.phaseId}__${chapter.chapterId}`,
        section: sectionName,
        title: chapter.name,
        description: chapter.description,
        icon: CHAPTER_ICONS[chapterIdx % CHAPTER_ICONS.length],
        color: colors[chapterIdx % colors.length],
        locked: false,
        words: [], // Words are lazy-loaded when a chapter is opened
      });
    });
  });

  return levels;
};

// ─── Context ──────────────────────────────────────────────────────

const CurriculumContext = createContext<CurriculumContextType | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────

export const CurriculumProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [curriculum, setCurriculum] = useState<LevelNode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCurriculum = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await curriculumApi.getOverview();
      if (response.success && response.data && response.data.length > 0) {
        const levels = buildCurriculumFromApi(response.data);
        setCurriculum(levels);
      } else {
        setCurriculum([]);
        setError('No curriculum data available from server');
      }
    } catch (err: any) {
      console.error('Failed to load curriculum from API:', err.message);
      setCurriculum([]);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCurriculum();
  }, [loadCurriculum]);

  /** Fetch words for a specific chapter by its composite id (phaseId__chapterId) */
  const fetchChapterWords = useCallback(async (levelId: string): Promise<LevelNode | null> => {
    const existingLevel = curriculum.find(l => l.id === levelId);
    if (!existingLevel) return null;

    // If it already has words loaded, return it
    if (existingLevel.words.length > 0) return existingLevel;

    // Split the composite ID to get phaseId and chapterId
    if (!levelId.includes('__')) return existingLevel;

    const [phaseId, chapterId] = levelId.split('__');

    try {
      const response = await curriculumApi.getChapterWords(phaseId, chapterId);
      if (response.success && response.data) {
        const words: Word[] = response.data.words.map(apiWordToWord);

        // Update the curriculum state with the loaded words
        setCurriculum(prev =>
          prev.map(level =>
            level.id === levelId
              ? { ...level, words }
              : level
          )
        );

        return { ...existingLevel, words };
      }
    } catch (err: any) {
      console.error('Failed to fetch chapter words:', err.message);
    }

    return existingLevel;
  }, [curriculum]);

  return (
    <CurriculumContext.Provider value={{
      curriculum,
      isLoading,
      error,
      fetchChapterWords,
      refreshCurriculum: loadCurriculum,
    }}>
      {children}
    </CurriculumContext.Provider>
  );
};

// ─── Hook ─────────────────────────────────────────────────────────

export const useCurriculum = () => {
  const context = useContext(CurriculumContext);
  if (!context) {
    throw new Error('useCurriculum must be used within a CurriculumProvider');
  }
  return context;
};
