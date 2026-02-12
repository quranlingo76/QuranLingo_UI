
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CheckCircle, AlertCircle, Volume2, Sparkles, Loader2, Brain, ArrowRight, Star, Tag, LayoutPanelLeft, Bot, Zap, BookOpen, Bookmark, ArrowLeft, User, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { LevelNode, ParsedWord, Question, MasteryData } from '../config/types';
import { parseWord, shuffleArray } from '../config/utils';
import { getGrammarExplanation } from '../services/GeminiService';
import { initializeAudio, playArabicText } from '../services/AudioService';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MuallimTutor from './MuallimTutor';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

interface LessonViewProps {
  level: LevelNode;
  onComplete: () => void;
  onExit: () => void;
  wordMastery: Record<string, MasteryData>;
  onUpdateMastery: (wordId: string, newStrength: number) => void;
  onToggleHard: (wordId: string) => void;
}

type ViewState = 'intro' | 'quiz' | 'summary';



function getInitialIntroStep(levelId: string): number {
  const saved = localStorage.getItem(`lesson_progress_${levelId}`);
  return saved ? parseInt(saved, 10) : 0;
}

const LessonView: React.FC<LessonViewProps> = ({ level, onComplete, onExit, wordMastery, onUpdateMastery, onToggleHard }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [viewState, setViewState] = useState<ViewState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [sentenceTokens, setSentenceTokens] = useState<string[]>([]);
  const [builtSentence, setBuiltSentence] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [mistakeShake, setMistakeShake] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [tutorWord, setTutorWord] = useState<ParsedWord | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [introStep, setIntroStep] = useState(() => getInitialIntroStep(level.id));

  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
     if (introStep > 0) {
        localStorage.setItem(`lesson_progress_${level.id}`, introStep.toString());
     }
     // Reset slider to first slide when word changes
     sliderRef.current?.slickGoTo(0);
  }, [introStep, level.id]);

  // Sound Effects Context
  const sfxContext = useRef<AudioContext | null>(null);

  useEffect(() => {
     // Init SFX context
     const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
     sfxContext.current = new AudioCtx();
     
     // Init Web Speech API for Arabic pronunciation
     initializeAudio().then(() => {
       console.log('Audio initialized successfully');
     }).catch((err) => {
       console.error('Failed to initialize audio:', err);
     });
  }, []);

  const playSfx = (type: 'correct' | 'incorrect' | 'click') => {
    if (!sfxContext.current) return;
    const ctx = sfxContext.current;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'incorrect') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'click') {
        // Subtle thud
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    }
  };

  const allParsedWords = useMemo(() => {
    return level.words.map((w, i) => parseWord(w, i, language));
  }, [level, language]);

  const questions = useMemo(() => {
    const qs: Question[] = [];
    const isSentenceBuilder = level.id === 'day-10';

    if (isSentenceBuilder) {
        allParsedWords.forEach((word) => {
             qs.push({ id: `sb-${word.id}`, type: 'sentence-builder', word: word });
        });
    } else {
        allParsedWords.forEach((word) => {
            const otherOptions = shuffleArray(allParsedWords.filter(w => w.id !== word.id)).slice(0, 3);
            const options = shuffleArray([word, ...otherOptions]);
            const isReverse = Math.random() > 0.5;
            qs.push({
                id: `q-${word.id}`,
                type: 'multiple-choice',
                word: isReverse ? { ...word, original: 'reverse' } : word, 
                options: options
            });
        });
    }
    return isSentenceBuilder ? qs : shuffleArray(qs);
  }, [allParsedWords, level.id]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  const isReverse = currentQuestion?.word.original === 'reverse';
  const isBuilder = currentQuestion?.type === 'sentence-builder';

  const questionText = isBuilder 
        ? currentQuestion?.word.english 
        : (isReverse ? currentQuestion?.word.english : currentQuestion?.word.arabic);

  // Check if current word is marked hard
  const isHard = wordMastery[currentQuestion?.word.id]?.markedHard;

  useEffect(() => {
    if (isBuilder && currentQuestion) {
        const tokens = currentQuestion.word.arabic.split(' ').filter(t => t.trim() !== '');
        setSentenceTokens(shuffleArray(tokens));
        setBuiltSentence([]);
    }
  }, [currentQuestionIndex, isBuilder, currentQuestion]);

  const handlePlayAudio = async (text: string) => {
    if (!text || isPlayingAudio) return;
    
    setIsPlayingAudio(true);
    try {
      // Pass the level ID so the audio service knows which folder to look in
      await playArabicText(text, level.id);
      setIsPlayingAudio(false);
    } catch (e) {
      console.error('Audio playback error:', e);
      setIsPlayingAudio(false);
    }
  };

  const handleOptionSelect = (id: string) => {
    if (isChecking) return;
    playSfx('click');
    setSelectedOption(id);
  };

  const handleCheck = async () => {
    if (isBuilder ? builtSentence.length === 0 : !selectedOption) return;

    setIsChecking(true);
    const wordId = currentQuestion.word.id;
    let isCorrect = false;

    if (isBuilder) {
        const userSentence = builtSentence.join(' ');
        const targetSentence = currentQuestion.word.arabic.split(' ').filter(t => t.trim() !== '').join(' ');
        isCorrect = userSentence === targetSentence;
    } else {
        isCorrect = selectedOption === currentQuestion.word.id;
    }
    
    if (isCorrect) {
      setFeedback('correct');
      playSfx('correct');
      const currentMastery = wordMastery[wordId];
      onUpdateMastery(wordId, Math.min((currentMastery?.strength || 0) + 1, 5));
      // Removed automatic audio playback
    } else {
      const answer = isBuilder ? currentQuestion.word.arabic : (isReverse ? currentQuestion.word.arabic : currentQuestion.word.english);
      setFeedback('incorrect');
      setCorrectAnswer(answer);
      setMistakeShake(true);
      playSfx('incorrect');
      setTimeout(() => setMistakeShake(false), 500);

      onUpdateMastery(wordId, 0);
      
      setIsLoadingAi(true);
      const explanation = await getGrammarExplanation(
          isBuilder ? `Construct: ${currentQuestion.word.english}` : questionText, 
          isBuilder ? currentQuestion.word.arabic : (isReverse ? currentQuestion.word.arabic : currentQuestion.word.english), 
          isBuilder ? builtSentence.join(' ') : (currentQuestion.options?.find(o => o.id === selectedOption)?.english || ''), 
          isReverse || isBuilder
      );
      setAiExplanation(explanation);
      setIsLoadingAi(false);
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setIsChecking(false);
    setSelectedOption(null);
    setCorrectAnswer('');
    setAiExplanation(null);
    setBuiltSentence([]);
    setSentenceTokens([]);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const openTutor = (word: ParsedWord) => {
    setIsTutorOpen(true);
    setTutorWord(word);
  };

  const handleBackToLearning = () => {
    const isCompleted = introStep >= allParsedWords.length;
    
    // If on completion screen, go back to reviewing words
    if (isCompleted) {
      setIntroStep(allParsedWords.length - 1);
    } else {
      // Otherwise, navigate back to learning dashboard
      navigate('/learning');
    }
  };


// ... inside component ...

  const renderIntro = () => {
    const isCompleted = introStep >= allParsedWords.length;
    const currentWord = !isCompleted ? allParsedWords[introStep] : null;
    const isLastWord = introStep === allParsedWords.length - 1;

    return (
      <div className="flex flex-col h-screen bg-grid-pattern max-w-2xl mx-auto w-full relative">
        {/* Shared Navbar */}
        <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100 flex flex-col">
          <div className="p-6 pb-2 flex items-center justify-between">
            <button onClick={handleBackToLearning} className="text-gray-400 hover:text-gray-600 transition-all rounded-xl hover:bg-gray-100 p-2 flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 stroke-[3]" />
              <span className="text-sm font-bold">Back</span>
            </button>
            
            <span className="font-kufic text-gray-400 uppercase tracking-widest text-xs bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">{level.section}</span>
            
            <LanguageSelector />
          </div>

          {/* Progress Bar Row */}
          <div className="px-6 pb-4 w-full flex items-center gap-4">
             <div className="flex gap-1 justify-center flex-1">
               {allParsedWords.map((_, idx) => {
                 let isActive = idx === introStep;
                 const isPast = idx < introStep;
                 const isCurrent = idx === introStep;
                 
                 return (
                   <div 
                     key={idx} 
                     className={`h-1.5 rounded-full transition-all ${
                       isCompleted 
                         ? 'bg-duo-green w-1.5' // All green on completion
                         : isCurrent 
                            ? 'bg-duo-blue w-6' 
                            : isPast 
                               ? 'bg-duo-blue/40 w-1.5' 
                               : 'bg-gray-200 w-1.5'
                     }`} 
                   />
                 );
               })}
             </div>
          </div>
        </div>

        {/* Content Area */}
        {isCompleted ? (
          // 1. Completion Phase
          <div className="flex-1 flex flex-col items-center justify-center p-8 animate-fade-up">
            <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-pop">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-kufic font-bold text-gray-800 mb-4 text-center">Lesson Completed!</h1>
            <p className="text-gray-500 text-center text-lg mb-8 max-w-md">
              You've reviewed all the words for this lesson. Now it's time to test your knowledge.
            </p>
            
             <button 
              onClick={() => setViewState('quiz')}
              className="w-full max-w-sm py-4 bg-duo-green hover:bg-duo-green-hover text-white rounded-2xl font-bold text-lg shadow-[0_4px_0_0_var(--color-primary-dark)] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-3"
            >
              <span>Start Exam</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          // 2. Learning Phase
          <>
            <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
               <div className="animate-pop w-full flex flex-col items-center mb-6">
                   {/* Header removed as requested */}
               </div>

               {/* Card Container - Reverted visual style */}
               {currentWord && (
                 <div className="w-full max-w-lg bg-white rounded-2xl p-8 flex flex-col items-start shadow-sm border-2 border-duo-blue transition-all animate-pop relative">
                    {/* Gender Badge */}
                    {currentWord.gender && (
                       <div className="w-full flex justify-center mb-4 -mt-2">
                          <div className={`
                             px-4 py-2 rounded-full flex items-center justify-center gap-2 shadow-sm border-2
                             ${currentWord.gender === 'male' ? 'bg-blue-50 border-blue-100 text-blue-500' : ''}
                             ${currentWord.gender === 'female' ? 'bg-red-50 border-red-100 text-red-500' : ''}
                             ${currentWord.gender === 'plural' ? 'bg-green-50 border-green-100 text-green-500' : ''}
                          `}>
                             {currentWord.gender === 'male' && <User className="w-4 h-4 fill-current" />}
                             {currentWord.gender === 'female' && <User className="w-4 h-4 fill-current" />}
                             {currentWord.gender === 'plural' && <Users className="w-4 h-4 fill-current" />}
                             <span className="text-xs font-bold uppercase tracking-widest leading-none mt-0.5">
                               {currentWord.gender}
                             </span>
                          </div>
                       </div>
                    )}

                    <div className="flex w-full justify-between items-start mb-6">
                       <span className="font-arabic text-5xl font-bold text-gray-800 leading-loose">{currentWord.arabic}</span>
                       <button 
                         onClick={(e) => { e.stopPropagation(); handlePlayAudio(currentWord.arabic); }} 
                         className="p-3 bg-gray-50 text-duo-blue rounded-xl hover:bg-duo-blue hover:text-white transition-all active:scale-95"
                       >
                         <Volume2 className="w-6 h-6" />
                       </button>
                    </div>

                     <div className="flex-1 w-full mb-6">
                        {currentWord.transliteration && (
                           <p className="text-duo-blue font-bold text-base mb-2 tracking-wide opacity-80">{currentWord.transliteration}</p>
                        )}
                        <p className="text-gray-500 font-bold text-xl leading-tight">{currentWord.english}</p>
                     </div>

                     {/* Examples Section */}
                     {currentWord.examples && currentWord.examples.length > 0 && (
                        <div className="w-full mb-6 border-t border-gray-100 pt-4">
                           <div className="flex items-center gap-2 mb-3">
                              <BookOpen className="w-4 h-4 text-duo-blue" />
                              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Quranic Examples</span>
                           </div>
                           <div className="w-full quranic-slider">
                              <Slider
                                 ref={sliderRef}
                                 dots={true}
                                 fade={true}
                                 infinite={true}
                                 speed={500}
                                 slidesToShow={1}
                                 slidesToScroll={1}
                                 waitForAnimate={false}
                                 arrows={true}
                                 dotsClass="slick-dots custom-dots"
                                 prevArrow={
                                    <button className="slick-prev-custom">
                                       <ChevronLeft className="w-5 h-5" />
                                    </button>
                                 }
                                 nextArrow={
                                    <button className="slick-next-custom">
                                       <ChevronRight className="w-5 h-5" />
                                    </button>
                                 }
                              >
                                 {currentWord.examples.map((ex, idx) => {
                                    // Helper function to strip Arabic diacritics for comparison
                                    const stripDiacritics = (str: string) => str.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED]/g, '');
                                    const targetBase = stripDiacritics(currentWord.arabic.trim());
                                    
                                    return (
                                       <div key={idx} className="px-1">
                                          <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 hover:border-duo-blue/50 transition-colors">
                                             <div className="font-arabic text-[28px] font-bold text-gray-800 mb-3 text-right leading-loose" dir="rtl">
                                                {ex.arabic.split(' ').map((word, wIdx) => {
                                                   const wordBase = stripDiacritics(word);
                                                   const isTarget = wordBase.includes(targetBase) || targetBase.includes(wordBase); 
                                                   return (
                                                      <span key={wIdx} className={isTarget ? "text-duo-green font-bold" : ""}>
                                                         {word}{" "}
                                                      </span>
                                                   );
                                                })}
                                             </div>
                                             <p className="text-sm text-gray-600 mb-3 leading-relaxed font-medium">{ex.translation}</p>
                                             <div className="flex justify-end">
                                                <span className="text-sm font-bold text-duo-blue bg-white border border-blue-100 px-3 py-1 rounded-full shadow-sm">{ex.ref}</span>
                                             </div>
                                          </div>
                                       </div>
                                    );
                                 })}
                              </Slider>
                           </div>
                        </div>
                     )}


                 </div>
               )}
            </div>

            {/* Footer Navigation */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 z-20">
               <div className="flex gap-3">
                 {introStep > 0 && (
                   <button 
                     onClick={() => {
                       playSfx('click'); 
                       setIntroStep(prev => prev - 1);
                     }}
                     className="py-4 px-6 bg-white hover:bg-gray-50 text-duo-blue border-2 border-gray-200 hover:border-duo-blue rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
                   >
                     <ArrowLeft className="w-5 h-5" />
                     <span>Last Word</span>
                   </button>
                 )}
                 
                 <button 
                   onClick={() => {
                     playSfx('click'); 
                     setIntroStep(prev => prev + 1);
                   }}
                   className="flex-1 py-4 bg-duo-blue hover:bg-duo-blue-hover text-white rounded-2xl font-bold text-lg shadow-[0_4px_0_0_var(--color-secondary)] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-3"
                 >
                   <span>{isLastWord ? 'Finish' : 'Next Word'}</span>
                   <ArrowRight className="w-5 h-5" />
                 </button>
               </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const renderQuiz = () => (
    <div className="flex flex-col h-screen bg-grid-pattern max-w-3xl mx-auto w-full relative">
      {/* Progress Header */}
      <div className="flex items-center px-6 py-6 gap-6">
        <button onClick={() => setViewState('intro')} className="text-gray-400 hover:text-gray-600 transition-all"><X className="w-8 h-8 stroke-[3]" /></button>
        <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-duo-green transition-all duration-700 ease-out rounded-full shadow-[inset_0_2px_0_rgba(255,255,255,0.4)] relative" style={{ width: `${Math.max(5, progress)}%` }}>
             <div className="absolute top-1 right-2 w-full h-0.5 bg-white opacity-20 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 md:px-12 py-4 overflow-y-auto pb-40">
        <div className={`w-full max-w-lg transition-all ${mistakeShake ? 'animate-shake' : ''}`}>
          <div className="flex justify-between items-start mb-6">
             <h2 className="text-2xl font-kufic font-bold text-gray-800 text-center md:text-left animate-fade-up leading-tight flex-1">
               {isBuilder ? 'Construct the sentence' : (isReverse ? 'Select the correct pattern' : 'Which is the translation?')}
             </h2>
             
             {/* Bookmark / Mark Hard Button */}
             <button 
               onClick={() => {
                 onToggleHard(currentQuestion.word.id);
                 playSfx('click');
               }}
               className={`ml-4 p-3 rounded-xl border-2 transition-all active:scale-95 ${isHard ? 'bg-duo-red border-duo-red-dark text-white' : 'bg-white border-gray-200 text-gray-300 hover:border-duo-red hover:text-duo-red'}`}
               title={isHard ? "Unmark hard word" : "Mark as hard"}
             >
               <Bookmark className={`w-5 h-5 ${isHard ? 'fill-current' : ''}`} />
             </button>
          </div>
          
          <div className="mb-12 flex flex-col items-center w-full">
            {isBuilder ? (
               <div className="w-full flex flex-col items-center animate-pop">
                  {/* Speaker/Prompt Block */}
                  <div className="flex items-start gap-4 mb-8 bg-white border-2 border-gray-100 rounded-3xl p-6 relative shadow-sm w-full group hover:border-duo-blue transition-colors">
                     <button onClick={() => handlePlayAudio(currentQuestion.word.arabic)} className="w-12 h-12 bg-duo-blue rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform active:scale-95">
                       <Volume2 className="text-white w-6 h-6" />
                     </button>
                     <div className="flex flex-col justify-center min-h-[48px]">
                        <p className="text-xl font-bold text-gray-800 leading-tight">{questionText}</p>
                     </div>
                     <div className="absolute -left-3 top-8 w-4 h-4 bg-white border-l-2 border-b-2 border-gray-100 rotate-45 group-hover:border-duo-blue" />
                  </div>
                  
                  {/* Answer Slots (Sentence Builder Area) */}
                  <div className="w-full min-h-[160px] border-t-2 border-x-2 border-b-4 border-gray-100 rounded-2xl mb-8 flex flex-wrap gap-2 items-center content-start py-6 px-4 bg-gray-50/50 shadow-inner">
                      {builtSentence.length === 0 && (
                          <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 pointer-events-none mt-4">
                             <div className="flex gap-2 opacity-50 mb-2">
                                <div className="w-12 h-10 border-2 border-dashed border-gray-300 rounded-xl" />
                                <div className="w-12 h-10 border-2 border-dashed border-gray-300 rounded-xl" />
                                <div className="w-12 h-10 border-2 border-dashed border-gray-300 rounded-xl" />
                             </div>
                             <span className="font-bold text-sm uppercase tracking-widest">Tap words to build</span>
                          </div>
                      )}
                      {builtSentence.map((token, idx) => (
                          <button key={`${token}-${idx}`} onClick={() => {
                              if (isChecking) return;
                              playSfx('click');
                              setBuiltSentence(prev => prev.filter((_, i) => i !== idx));
                              setSentenceTokens(prev => [...prev, token]);
                          }} className="btn-duo bg-white border-gray-200 text-gray-800 rounded-xl px-4 py-3 font-arabic text-2xl shadow-sm animate-pop hover:bg-gray-50">{token}</button>
                      ))}
                  </div>
                  
                  {/* Word Bank (Source Tokens) */}
                  <div className="flex flex-wrap gap-3 justify-center">
                      {sentenceTokens.map((token, idx) => (
                          <button key={`${token}-${idx}`} onClick={() => {
                              if (isChecking) return;
                              playSfx('click');
                              setSentenceTokens(prev => prev.filter((_, i) => i !== idx));
                              setBuiltSentence(prev => [...prev, token]);
                          }} className="btn-duo bg-white border-gray-200 text-gray-800 rounded-xl px-5 py-3 font-arabic text-2xl shadow-sm hover:translate-y-[-2px] active:translate-y-[2px] hover:border-duo-blue transition-all">{token}</button>
                      ))}
                  </div>
               </div>
            ) : (
              <div className="w-full mb-6 md:mb-12 animate-pop">
                {/* Clean Prompt Card - Redesigned */}
                <div className="w-full bg-white border-2 border-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center shadow-sm relative overflow-hidden min-h-[120px] md:min-h-[160px]">
                   {/* Decorative top accent */}
                   <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-50" />
                   
                   <span className={`${isReverse ? 'text-2xl md:text-3xl font-bold font-sans' : 'text-4xl md:text-6xl font-arabic font-bold leading-relaxed'} text-gray-800 text-center transition-all duration-300`}>
                      {questionText}
                   </span>
                   
                   {!isReverse && currentQuestion.word.transliteration && (
                      <span className="text-base md:text-lg text-duo-blue font-bold mt-3 md:mt-4 font-sans tracking-wide bg-blue-50 px-3 py-1 md:px-4 rounded-full transition-all duration-300">{currentQuestion.word.transliteration}</span>
                   )}
                </div>
              </div>
            )}
            
            {!isBuilder && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {currentQuestion?.options?.map((opt, i) => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionSelect(opt.id)}
                    className={`
                        quiz-option p-4 rounded-2xl flex flex-col items-start gap-2 text-left transition-all relative min-h-[100px] justify-center
                        ${selectedOption === opt.id 
                            ? 'selected shadow-md bg-blue-50 border-duo-blue text-duo-blue transform scale-[1.02]' 
                            : 'bg-white text-gray-700 shadow-sm active:shadow-none'
                        }
                    `}
                  >
                    <div className="flex items-center gap-3 w-full">
                       <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center text-xs font-black flex-shrink-0 ${selectedOption === opt.id ? 'border-duo-blue text-duo-blue' : 'border-gray-200 text-gray-300'}`}>
                          {i + 1}
                       </div>
                       {isReverse ? <span className="font-arabic text-3xl font-bold leading-loose">{opt.arabic}</span> : <span className="text-lg font-bold leading-tight">{opt.english}</span>}
                    </div>
                    
                    {isReverse && opt.transliteration && (
                        <span className={`text-sm font-bold ml-10 ${selectedOption === opt.id ? 'text-duo-blue' : 'text-gray-400'}`}>{opt.transliteration}</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Feedback Bar */}
      <div className={`fixed bottom-0 left-0 right-0 p-6 md:p-8 border-t-2 transition-transform duration-300 z-50 ${feedback ? 'translate-y-0' : 'translate-y-[120%]'} ${feedback === 'correct' ? 'bg-[var(--color-success-bg)] border-[var(--color-success-border)]' : (feedback === 'incorrect' ? 'bg-[var(--color-danger-bg)] border-[var(--color-danger-border)]' : 'bg-white border-gray-100')}`}>
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-8">
            {feedback === 'correct' && (
              <div className="flex items-center gap-4 text-[var(--color-primary-text)] animate-pop mb-2 md:mb-0">
                <div className="bg-white rounded-full p-2 shadow-sm"><CheckCircle className="w-8 h-8 fill-current" /></div>
                <div>
                  <p className="text-xl md:text-2xl font-bold">Nicely done!</p>
                </div>
                <button 
                  onClick={() => handlePlayAudio(currentQuestion.word.arabic)}
                  className="bg-white/50 hover:bg-white text-[var(--color-primary-text)] p-3 rounded-xl transition-all ml-2 active:scale-95"
                  title="Listen"
                >
                   <Volume2 className="w-6 h-6" />
                </button>
              </div>
            )}
            {feedback === 'incorrect' && (
              <div className="flex flex-col gap-2 text-[var(--color-danger-dark)] animate-pop flex-1 mb-2 md:mb-0">
                <div className="flex items-center gap-3">
                   <AlertCircle className="w-6 h-6 fill-current flex-shrink-0" />
                   <span className="font-bold text-lg md:text-xl">Correct Answer:</span>
                   <button 
                      onClick={() => handlePlayAudio(currentQuestion.word.arabic)}
                                             className="bg-red-50 hover:bg-white text-[var(--color-danger-dark)] p-2 rounded-lg transition-all active:scale-95"
                      title="Listen"
                   >
                     <Volume2 className="w-5 h-5" />
                   </button>
                </div>
                <p className="text-base md:text-lg font-bold text-[var(--color-danger-dark)] ml-9 leading-snug break-words">{correctAnswer}</p>
              </div>
            )}
            
            <button 
                onClick={handleNext} 
                className={`w-full md:w-auto px-8 py-3 md:py-4 rounded-2xl btn-duo text-lg font-bold tracking-widest text-white shadow-lg min-w-[140px] uppercase ${feedback === 'correct' ? 'bg-duo-green border-duo-green-dark' : 'bg-duo-red border-duo-red-dark'}`}
            >
                Continue
            </button>
        </div>
      </div>

      {/* Bottom Action Bar (Default) */}
      <div className={`fixed bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-white z-40 transition-all duration-300 ${feedback ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100 translate-y-0'}`}>
         <div className="max-w-2xl mx-auto flex items-center gap-4">
            <button 
                onClick={() => openTutor(currentQuestion.word)}
                className="btn-duo bg-white border-gray-200 text-gray-500 p-4 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors"
                title="Ask Muallim AI"
            >
                <Brain className="w-6 h-6" />
            </button>
            <button 
                onClick={handleCheck} 
                disabled={isBuilder ? builtSentence.length === 0 : !selectedOption}
                className={`flex-1 py-4 rounded-2xl btn-duo text-lg font-bold tracking-widest uppercase ${ (isBuilder ? builtSentence.length > 0 : selectedOption) ? 'bg-duo-green border-duo-green-dark text-white shadow-lg active:translate-y-[4px]' : 'bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed'}`}
            >
                Check
            </button>
         </div>
      </div>
      
      {tutorWord && <MuallimTutor currentWord={tutorWord} isOpen={isTutorOpen} onClose={() => setIsTutorOpen(false)} />}
    </div>
  );

  return viewState === 'intro' ? renderIntro() : renderQuiz();
};

export default LessonView;


