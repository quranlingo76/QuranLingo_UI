import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CURRICULUM, SRS_INTERVALS } from '../constants/index';
import LessonView from '../components/LessonView';
import IntroScreen from '../components/IntroScreen';
import Sidebar from '../components/learning/Sidebar';
import RightSidebar from '../components/learning/RightSidebar';
import MobileNavigation from '../components/learning/MobileNavigation';
import MobileHeader from '../components/learning/MobileHeader';
import StatsBar from '../components/learning/StatsBar';
import LearnTab from '../components/learning/LearnTab';
import ProfileTab from '../components/learning/ProfileTab';
import ComingSoonTab from '../components/learning/ComingSoonTab';
import SuccessScreen from '../components/learning/SuccessScreen';
import LoadingOverlay from '../components/learning/LoadingOverlay';
import { calculateTotalComprehension, parseWord, shuffleArray } from '../config/utils';
import { LevelNode, MasteryData } from '../config/types';
import { generateSentenceExercises } from '../services/GeminiService';

const LearningPage: React.FC = () => {
  const { dayId } = useParams<{ dayId?: string }>();
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<'intro' | 'dashboard' | 'lesson' | 'success'>('dashboard');
  const [dashboardTab, setDashboardTab] = useState<'learn' | 'goals' | 'quests' | 'profile'>('learn');
  const [activeLevel, setActiveLevel] = useState<LevelNode | null>(null);
  const [unlockedLevels, setUnlockedLevels] = useState<string[]>([]);
  const [completedLevels, setCompletedLevels] = useState<string[]>([]);
  const [wordMastery, setWordMastery] = useState<Record<string, MasteryData>>({});
  const [streak, setStreak] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  // Handle URL day parameter
  useEffect(() => {
    if (dayId) {
      const level = CURRICULUM.find(l => l.id === dayId);
      if (level) {
        setCurrentView('dashboard');
        handleStartLevel(level, true);
      }
    }
  }, [dayId]);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro && !dayId) setCurrentView('dashboard');

    const savedCompleted = localStorage.getItem('completedLevels');
    const savedMastery = localStorage.getItem('wordMastery');
    const savedStreak = localStorage.getItem('neuralStreak');

    const completed = savedCompleted ? JSON.parse(savedCompleted) : [];
    setCompletedLevels(completed);
    if (savedStreak) setStreak(parseInt(savedStreak));
    
    // Progressive unlocking: Only unlock first level + all completed levels + next level
    const unlocked: string[] = [];
    
    // Always unlock the first level
    if (CURRICULUM.length > 0) {
      unlocked.push(CURRICULUM[0].id);
    }
    
    // Unlock all completed levels
    completed.forEach((levelId: string) => {
      if (!unlocked.includes(levelId)) {
        unlocked.push(levelId);
      }
    });
    
    // Unlock the next level after the last completed one
    if (completed.length > 0) {
      const lastCompletedIndex = CURRICULUM.findIndex(l => l.id === completed[completed.length - 1]);
      if (lastCompletedIndex !== -1 && lastCompletedIndex + 1 < CURRICULUM.length) {
        const nextLevel = CURRICULUM[lastCompletedIndex + 1];
        if (!unlocked.includes(nextLevel.id)) {
          unlocked.push(nextLevel.id);
        }
      }
    }
    
    setUnlockedLevels(unlocked);
    
    if (savedMastery) {
      try {
        const parsed = JSON.parse(savedMastery);
        const migrated: Record<string, MasteryData> = {};
        Object.entries(parsed).forEach(([id, val]) => {
           if (typeof val === 'number') {
             migrated[id] = { strength: val, lastTested: Date.now() };
           } else {
             migrated[id] = val as MasteryData;
           }
        });
        setWordMastery(migrated);
      } catch (e) { console.error("Mastery Load Error", e); }
    }
  }, [dayId]);

  const handleUpdateMastery = (wordId: string, newStrength: number) => {
    setWordMastery(prev => {
      const current = prev[wordId] || { strength: 0, lastTested: 0, markedHard: false };
      
      const updated = { 
        ...prev, 
        [wordId]: { 
          ...current,
          strength: newStrength, 
          lastTested: Date.now() 
        } 
      };
      localStorage.setItem('wordMastery', JSON.stringify(updated));
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
          markedHard: !current.markedHard
        }
      };
      localStorage.setItem('wordMastery', JSON.stringify(updated));
      return updated;
    });
  };

  const reviewStats = useMemo(() => {
    const now = Date.now();
    let dueCount = 0;
    let weakCount = 0;
    let totalKnown = 0;
    let longTermCount = 0;
    let hardCount = 0;

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
    let candidateWords: string[] = [];
    const now = Date.now();

    CURRICULUM.forEach(level => {
      if (unlockedLevels.includes(level.id)) {
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
  }, [unlockedLevels, wordMastery]);

  const comprehensionPercentage = useMemo(() => {
    return calculateTotalComprehension(completedLevels, CURRICULUM);
  }, [completedLevels]);

  const nextLevelId = useMemo(() => {
    return CURRICULUM.find(l => !completedLevels.includes(l.id))?.id;
  }, [completedLevels]);

  const getHardWordsList = () => {
    const hardWords: string[] = [];
    Object.entries(wordMastery).forEach(([id, data]) => {
      const mastery = data as MasteryData;
      if (mastery.markedHard || mastery.strength <= 2) {
        for (const level of CURRICULUM) {
          const found = level.words.find(w => parseWord(w, 0).id === id);
          if (found) {
            hardWords.push(parseWord(found, 0).arabic);
            break;
          }
        }
      }
    });
    return shuffleArray(hardWords).slice(0, 8);
  };

  const handleStartLevel = async (level: LevelNode, skipNavigation = false) => {
    if (!skipNavigation && level.id !== 'smart-review') {
      navigate(`/learning/${level.id}`);
      return;
    }

    if (level.id === 'p3-chapter-2') {
      const hardWords = getHardWordsList();
      
      if (hardWords.length > 3) {
        setIsGenerating(true);
        const generatedSentences = await generateSentenceExercises(hardWords);
        setIsGenerating(false);
        
        if (generatedSentences.length > 0) {
           const dynamicLevel: LevelNode = {
             ...level,
             description: "AI-Generated sentences targeting your hardest words.",
             words: generatedSentences
           };
           setActiveLevel(dynamicLevel);
           setCurrentView('lesson');
           return;
        }
      }
    }
    
    setActiveLevel(level);
    setCurrentView('lesson');
  };

  const handleEnterApp = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    setCurrentView('dashboard');
  };

  const handleSuccessContinue = () => {
    setActiveLevel(null);
    setCurrentView('dashboard');
  };

  const renderDashboardContent = () => {
    if (dashboardTab === 'learn') {
      return (
        <LearnTab
          curriculum={CURRICULUM}
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

             {renderDashboardContent()}
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
       {currentView === 'lesson' && activeLevel && (
         <LessonView 
            level={activeLevel} 
            onComplete={() => setCurrentView('success')} 
            onExit={handleSuccessContinue} 
            wordMastery={wordMastery} 
            onUpdateMastery={handleUpdateMastery} 
            onToggleHard={handleToggleHard}
         />
       )}
       {currentView === 'success' && (
         <SuccessScreen
           comprehensionPercentage={comprehensionPercentage}
           onContinue={handleSuccessContinue}
         />
       )}
    </div>
  );
};

export default LearningPage;

