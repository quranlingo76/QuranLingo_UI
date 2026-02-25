import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SRS_INTERVALS } from '../constants/shared';
import IntroScreen from '../components/IntroScreen';
import Sidebar from '../components/learning/Sidebar';
import RightSidebar from '../components/learning/RightSidebar';
import MobileNavigation from '../components/learning/MobileNavigation';
import MobileHeader from '../components/learning/MobileHeader';
import StatsBar from '../components/learning/StatsBar';
import LearnTab from '../components/learning/LearnTab';
import ProfileTab from '../components/learning/ProfileTab';
import ComingSoonTab from '../components/learning/ComingSoonTab';
import LessonView from '../components/LessonView';
import SuccessScreen from '../components/learning/SuccessScreen';
import LoadingOverlay from '../components/learning/LoadingOverlay';
import { calculateTotalComprehension, parseWord, shuffleArray } from '../config/utils';
import { LevelNode, MasteryData } from '../config/types';
import { generateSentenceExercises } from '../services/GeminiService';
import { useCurriculum } from '../contexts/CurriculumContext';
import { useAuth } from '../contexts/AuthContext';
import { progressApi } from '../services/api';
import { slugify } from './LessonPage';

const LearningPage: React.FC = () => {
  const navigate = useNavigate();
  const { curriculum, isLoading: isCurriculumLoading, fetchChapterWords, error: curriculumError } = useCurriculum();
  const { isAuthenticated } = useAuth();

  const [currentView, setCurrentView] = useState<'intro' | 'dashboard' | 'review' | 'review-success'>('dashboard');
  const [dashboardTab, setDashboardTab] = useState<'learn' | 'goals' | 'quests' | 'profile'>('learn');
  const [unlockedLevels, setUnlockedLevels] = useState<string[]>([]);
  const [completedLevels, setCompletedLevels] = useState<string[]>([]);
  const [wordMastery, setWordMastery] = useState<Record<string, MasteryData>>({});
  const [streak, setStreak] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeReviewLevel, setActiveReviewLevel] = useState<LevelNode | null>(null);

  // Load progress from server
  useEffect(() => {
    const loadProgress = async () => {
      const hasSeenIntro = localStorage.getItem('hasSeenIntro');
      if (hasSeenIntro) setCurrentView('dashboard');

      if (isAuthenticated) {
        try {
          const response = await progressApi.getUserProgress();
          if (response.success && response.data) {
            const { completedLevels: cl, wordMastery: wm, streak: s } = response.data;
            setCompletedLevels(cl || []);
            setStreak(s || 0);

            if (wm && typeof wm === 'object') {
              const migrated: Record<string, MasteryData> = {};
              Object.entries(wm).forEach(([id, val]) => {
                if (typeof val === 'number') {
                  migrated[id] = { strength: val, lastTested: Date.now() };
                } else {
                  migrated[id] = val as MasteryData;
                }
              });
              setWordMastery(migrated);
            }
          }
        } catch (err: any) {
          console.warn('Failed to load progress from server:', err.message);
        }
      }
    };

    if (!isCurriculumLoading) {
      loadProgress();
    }
  }, [isAuthenticated, isCurriculumLoading]);

  // Compute unlocked levels whenever completedLevels or curriculum changes
  useEffect(() => {
    if (curriculum.length === 0) return;

    const unlocked: string[] = [];
    unlocked.push(curriculum[0].id);
    
    completedLevels.forEach((levelId: string) => {
      if (!unlocked.includes(levelId)) {
        unlocked.push(levelId);
      }
    });
    
    if (completedLevels.length > 0) {
      const lastCompletedIndex = curriculum.findIndex(l => l.id === completedLevels[completedLevels.length - 1]);
      if (lastCompletedIndex !== -1 && lastCompletedIndex + 1 < curriculum.length) {
        const nextLevel = curriculum[lastCompletedIndex + 1];
        if (!unlocked.includes(nextLevel.id)) {
          unlocked.push(nextLevel.id);
        }
      }
    }
    
    setUnlockedLevels(unlocked);
  }, [completedLevels, curriculum]);

  // Save progress to server
  const saveProgressToServer = useCallback(
    (data: { completedLevels?: string[]; wordMastery?: Record<string, MasteryData>; streak?: number }) => {
      if (!isAuthenticated) return;
      const today = new Date().toISOString().split('T')[0];
      progressApi.saveUserProgress({ ...data, lastActiveDate: today }).catch(err => {
        console.warn('Failed to save progress to server:', err.message);
      });
    },
    [isAuthenticated]
  );

  const handleUpdateMastery = (wordId: string, newStrength: number) => {
    setWordMastery(prev => {
      const current = prev[wordId] || { strength: 0, lastTested: 0, markedHard: false };
      const updated = { 
        ...prev, 
        [wordId]: { ...current, strength: newStrength, lastTested: Date.now() } 
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
        [wordId]: { ...current, markedHard: !current.markedHard }
      };
      saveProgressToServer({ wordMastery: updated });
      return updated;
    });
  };

  const reviewStats = useMemo(() => {
    const now = Date.now();
    let dueCount = 0, weakCount = 0, totalKnown = 0, longTermCount = 0, hardCount = 0;

    (Object.values(wordMastery) as MasteryData[]).forEach(m => {
      totalKnown++;
      if (m.strength < 3) weakCount++;
      if (m.strength >= 4) longTermCount++;
      if (m.markedHard) hardCount++;
      const interval = SRS_INTERVALS[m.strength] || 0;
      if (now > m.lastTested + interval) dueCount++;
    });

    return { dueCount, weakCount, totalKnown, longTermCount, hardCount };
  }, [wordMastery]);

  const reviewLevel = useMemo(() => {
    let candidateWords: any[] = [];
    const now = Date.now();

    curriculum.forEach(level => {
      if (unlockedLevels.includes(level.id) && level.words.length > 0) {
        level.words.forEach(rawWord => {
          const parsed = parseWord(rawWord, 0);
          const mastery = wordMastery[parsed.id];
          if (!mastery) return;

          const interval = SRS_INTERVALS[mastery.strength] || 0;
          const isDue = now > mastery.lastTested + interval;
          const isWeak = mastery.strength < 3;
          const isHard = mastery.markedHard;

          if (isDue || isWeak || isHard) candidateWords.push(rawWord);
        });
      }
    });

    if (candidateWords.length > 0) {
      const sessionWords = shuffleArray(candidateWords).slice(0, 20);
      return {
        id: 'smart-review',
        section: 'Pattern Guard',
        title: 'Daily Pattern Boost',
        description: `Strengthening ${sessionWords.length} essential patterns.`,
        icon: '🛡️',
        color: 'bg-duo-blue',
        locked: false,
        words: sessionWords
      } as LevelNode;
    }
    return null;
  }, [unlockedLevels, wordMastery, curriculum]);

  const comprehensionPercentage = useMemo(() => {
    return calculateTotalComprehension(completedLevels, curriculum);
  }, [completedLevels, curriculum]);

  const nextLevelId = useMemo(() => {
    return curriculum.find(l => !completedLevels.includes(l.id))?.id;
  }, [completedLevels, curriculum]);

  /**
   * Navigate to a chapter's lesson page using slug-based URL
   * For smart review, handle inline (no separate page needed)
   */
  const handleStartLevel = async (level: LevelNode) => {
    // Smart review stays inline
    if (level.id === 'smart-review') {
      setActiveReviewLevel(level);
      setCurrentView('review');
      return;
    }

    // Navigate to the dedicated lesson page with readable URL
    const phaseSlug = slugify(level.section);
    const chapterSlug = slugify(level.title);
    navigate(`/learning/${phaseSlug}/${chapterSlug}`);
  };

  const handleEnterApp = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    setCurrentView('dashboard');
  };

  const renderDashboardContent = () => {
    if (dashboardTab === 'learn') {
      return (
        <LearnTab
          curriculum={curriculum}
          unlockedLevels={unlockedLevels}
          completedLevels={completedLevels}
          nextLevelId={nextLevelId}
          onStartLevel={handleStartLevel}
        />
      );
    } else if (dashboardTab === 'profile') {
      return (
        <ProfileTab
          streak={streak}
          completedLevelsCount={completedLevels.length}
          reviewStats={reviewStats}
        />
      );
    } else {
      return <ComingSoonTab />;
    }
  };

  const renderDashboard = () => {
    return (
      <div className="min-h-screen bg-grid-pattern flex flex-col md:flex-row">
        <Sidebar activeTab={dashboardTab} onTabChange={setDashboardTab} />

        <main className="flex-1 flex flex-col items-center">
          <MobileHeader streak={streak} />

           <div className="w-full max-w-2xl px-4 md:px-6 py-8">
             <StatsBar
               streak={streak}
               comprehensionPercentage={comprehensionPercentage}
               longTermCount={reviewStats.longTermCount}
             />

             {isCurriculumLoading ? (
               <div className="flex flex-col items-center justify-center py-20">
                 <div className="w-12 h-12 border-4 border-duo-green/30 border-t-duo-green rounded-full animate-spin mb-4" />
                 <p className="text-gray-500 font-semibold">Loading curriculum from server...</p>
               </div>
             ) : curriculumError ? (
               <div className="flex flex-col items-center justify-center py-20 text-center">
                 <div className="text-5xl mb-4">⚠️</div>
                 <p className="text-gray-700 font-bold text-lg mb-2">Could not load curriculum</p>
                 <p className="text-gray-500 text-sm mb-6 max-w-sm">{curriculumError}</p>
                 <button
                   onClick={() => window.location.reload()}
                   className="px-6 py-3 bg-duo-blue text-white font-bold rounded-xl hover:bg-duo-blue-hover transition-all"
                 >
                   Retry
                 </button>
               </div>
             ) : (
               renderDashboardContent()
             )}
           </div>
        </main>

        <RightSidebar
          reviewLevel={reviewLevel}
          reviewStats={reviewStats}
          onStartReview={handleStartLevel}
        />

        <MobileNavigation activeTab={dashboardTab} onTabChange={setDashboardTab} />

        {isGenerating && <LoadingOverlay />}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
       {currentView === 'intro' && <IntroScreen onStart={handleEnterApp} />}
       {currentView === 'dashboard' && renderDashboard()}
       {currentView === 'review' && activeReviewLevel && (
         <LessonView 
            level={activeReviewLevel} 
            onComplete={() => setCurrentView('review-success')} 
            onExit={() => { setActiveReviewLevel(null); setCurrentView('dashboard'); }}
            wordMastery={wordMastery} 
            onUpdateMastery={handleUpdateMastery} 
            onToggleHard={handleToggleHard}
         />
       )}
       {currentView === 'review-success' && (
         <SuccessScreen
           comprehensionPercentage={comprehensionPercentage}
           onContinue={() => { setActiveReviewLevel(null); setCurrentView('dashboard'); }}
         />
       )}
    </div>
  );
};

export default LearningPage;
