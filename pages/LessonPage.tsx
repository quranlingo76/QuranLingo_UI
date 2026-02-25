import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LessonView from '../components/LessonView';
import SuccessScreen from '../components/learning/SuccessScreen';
import LoadingOverlay from '../components/learning/LoadingOverlay';
import { calculateTotalComprehension } from '../config/utils';
import { LevelNode, MasteryData } from '../config/types';
import { useCurriculum } from '../contexts/CurriculumContext';
import { useAuth } from '../contexts/AuthContext';
import { progressApi } from '../services/api';

/**
 * Dedicated lesson page — accessed via /learning/:phaseSlug/:chapterSlug
 * 
 * Handles:
 *  - Loading the chapter words from the API
 *  - Rendering the LessonView component
 *  - Saving progress to the server
 *  - Showing success screen on completion
 */
const LessonPage: React.FC = () => {
  const { phaseSlug, chapterSlug } = useParams<{ phaseSlug: string; chapterSlug: string }>();
  const navigate = useNavigate();
  const { curriculum, isLoading: isCurriculumLoading, fetchChapterWords } = useCurriculum();
  const { isAuthenticated } = useAuth();

  const [activeLevel, setActiveLevel] = useState<LevelNode | null>(null);
  const [isLoadingChapter, setIsLoadingChapter] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [wordMastery, setWordMastery] = useState<Record<string, MasteryData>>({});
  const [completedLevels, setCompletedLevels] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Load progress from server
  useEffect(() => {
    const loadProgress = async () => {
      if (isAuthenticated) {
        try {
          const response = await progressApi.getUserProgress();
          if (response.success && response.data) {
            setCompletedLevels(response.data.completedLevels || []);
            if (response.data.wordMastery && typeof response.data.wordMastery === 'object') {
              const migrated: Record<string, MasteryData> = {};
              Object.entries(response.data.wordMastery).forEach(([id, val]) => {
                migrated[id] = val as MasteryData;
              });
              setWordMastery(migrated);
            }
          }
        } catch (err: any) {
          console.warn('Failed to load progress:', err.message);
        }
      }
    };
    loadProgress();
  }, [isAuthenticated]);

  // Find and load the chapter based on URL slugs
  useEffect(() => {
    if (isCurriculumLoading || !phaseSlug || !chapterSlug || curriculum.length === 0) return;

    // Find the matching level by slug
    const matchingLevel = curriculum.find(level => {
      const levelPhaseSlug = slugify(level.section);
      const levelChapterSlug = slugify(level.title);
      return levelPhaseSlug === phaseSlug && levelChapterSlug === chapterSlug;
    });

    if (!matchingLevel) {
      setError('Chapter not found');
      setIsLoadingChapter(false);
      return;
    }

    // Load words if needed
    const loadWords = async () => {
      setIsLoadingChapter(true);
      if (matchingLevel.words.length > 0) {
        setActiveLevel(matchingLevel);
        setIsLoadingChapter(false);
        return;
      }

      const loaded = await fetchChapterWords(matchingLevel.id);
      if (loaded && loaded.words.length > 0) {
        setActiveLevel(loaded);
      } else {
        setError('No words found for this chapter');
      }
      setIsLoadingChapter(false);
    };

    loadWords();
  }, [phaseSlug, chapterSlug, curriculum, isCurriculumLoading, fetchChapterWords]);

  // Save progress to server
  const saveProgressToServer = useCallback(
    (data: { completedLevels?: string[]; wordMastery?: Record<string, MasteryData>; streak?: number }) => {
      if (!isAuthenticated) return;
      const today = new Date().toISOString().split('T')[0];
      progressApi.saveUserProgress({ ...data, lastActiveDate: today }).catch(err => {
        console.warn('Failed to save progress:', err.message);
      });
    },
    [isAuthenticated]
  );

  const handleUpdateMastery = (wordId: string, newStrength: number) => {
    setWordMastery(prev => {
      const current = prev[wordId] || { strength: 0, lastTested: 0, markedHard: false };
      const updated = {
        ...prev,
        [wordId]: {
          ...current,
          strength: newStrength,
          lastTested: Date.now(),
        },
      };
      saveProgressToServer({ wordMastery: updated });
      return updated;
    });
  };

  const handleToggleHard = (wordId: string) => {
    setWordMastery(prev => {
      const current = prev[wordId] || { strength: 0, lastTested: Date.now(), markedHard: false };
      const updated = {
        ...prev,
        [wordId]: {
          ...current,
          markedHard: !current.markedHard,
        },
      };
      saveProgressToServer({ wordMastery: updated });
      return updated;
    });
  };

  const handleComplete = () => {
    if (activeLevel) {
      const newCompleted = [...completedLevels];
      if (!newCompleted.includes(activeLevel.id)) {
        newCompleted.push(activeLevel.id);
        setCompletedLevels(newCompleted);
        saveProgressToServer({ completedLevels: newCompleted });
      }
    }
    setShowSuccess(true);
  };

  const handleExit = () => {
    navigate('/learning');
  };

  const comprehensionPercentage = calculateTotalComprehension(completedLevels, curriculum);

  // Loading state
  if (isCurriculumLoading || isLoadingChapter) {
    return <LoadingOverlay />;
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="text-5xl mb-4">😔</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{error}</h2>
        <p className="text-gray-500 mb-6 max-w-sm">The chapter you're looking for doesn't exist or couldn't be loaded.</p>
        <button
          onClick={() => navigate('/learning')}
          className="px-6 py-3 bg-duo-green text-white font-bold rounded-xl hover:bg-duo-green-hover transition-all"
        >
          Back to Learning
        </button>
      </div>
    );
  }

  // Success screen
  if (showSuccess) {
    return (
      <SuccessScreen
        comprehensionPercentage={comprehensionPercentage}
        onContinue={handleExit}
      />
    );
  }

  // Lesson view
  if (activeLevel) {
    return (
      <LessonView
        level={activeLevel}
        onComplete={handleComplete}
        onExit={handleExit}
        wordMastery={wordMastery}
        onUpdateMastery={handleUpdateMastery}
        onToggleHard={handleToggleHard}
      />
    );
  }

  return null;
};

// ─── Helper ───────────────────────────────────────────────────────

/**
 * Convert a string to a URL-friendly slug
 * "Phase 1: Foundation" → "phase-1-foundation"
 * "Demonstrative Pronouns" → "demonstrative-pronouns"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove special chars
    .replace(/\s+/g, '-')          // spaces to hyphens
    .replace(/-+/g, '-')           // collapse multiple hyphens
    .replace(/^-|-$/g, '');        // trim hyphens
}

export default LessonPage;
