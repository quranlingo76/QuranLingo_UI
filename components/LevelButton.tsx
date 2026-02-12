
import React from 'react';
import { Lock, Check, Star } from 'lucide-react';
import { LevelNode } from '../config/types';

interface LevelButtonProps {
  level: LevelNode;
  isUnlocked: boolean;
  isCompleted: boolean;
  isActive?: boolean;
  onClick: () => void;
  // Offset is handled by the parent container for the path alignment
}

const LevelButton: React.FC<LevelButtonProps> = ({ level, isUnlocked, isCompleted, isActive, onClick }) => {
  const getColors = (bgClass: string) => {
    if (bgClass.includes('green') || bgClass.includes('emerald')) return { bg: 'bg-duo-green', border: 'border-duo-green-dark', ring: 'ring-duo-green/30' };
    if (bgClass.includes('blue') || bgClass.includes('cyan')) return { bg: 'bg-duo-blue', border: 'border-duo-blue-dark', ring: 'ring-duo-blue/30' };
    if (bgClass.includes('purple') || bgClass.includes('violet')) return { bg: 'bg-[var(--color-accent-purple)]', border: 'border-[var(--color-accent-purple-dark)]', ring: 'ring-[var(--color-accent-purple-ring)]' };
    if (bgClass.includes('rose') || bgClass.includes('red')) return { bg: 'bg-duo-red', border: 'border-duo-red-dark', ring: 'ring-duo-red/30' };
    if (bgClass.includes('orange')) return { bg: 'bg-[var(--color-accent-orange)]', border: 'border-[var(--color-accent-orange-dark)]', ring: 'ring-[var(--color-accent-orange-ring)]' };
    if (bgClass.includes('indigo')) return { bg: 'bg-[var(--color-accent-indigo)]', border: 'border-[var(--color-accent-indigo-dark)]', ring: 'ring-[var(--color-accent-indigo-ring)]' };
    if (bgClass.includes('teal')) return { bg: 'bg-[var(--color-accent-teal)]', border: 'border-[var(--color-accent-teal-dark)]', ring: 'ring-[var(--color-accent-teal-ring)]' };
    return { bg: 'bg-duo-green', border: 'border-duo-green-dark', ring: 'ring-duo-green/30' };
  };

  const { bg, border, ring } = isUnlocked ? getColors(level.color) : { bg: 'bg-duo-gray', border: 'border-duo-gray-dark', ring: 'ring-gray-200' };
  
  return (
    <div className="relative flex flex-col items-center group z-10">
      {/* Tooltip for Active Level */}
      {isActive && !isCompleted && (
        <div className="absolute -top-14 bg-white text-[var(--color-text-heading)] px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl border-2 border-duo-gray animate-bounce whitespace-nowrap z-20">
          Start
          <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-3 h-3 bg-white border-r-2 border-b-2 border-duo-gray rotate-45" />
        </div>
      )}

      {/* Ripple Effect for Active */}
      {isActive && (
        <div className={`absolute top-0 left-0 w-20 h-20 rounded-full ${ring} ring-8 animate-pulse opacity-50`} />
      )}
      
      {/* Crown for Completed */}
      {isCompleted && (
        <div className="absolute -top-2 -right-2 bg-duo-yellow rounded-full p-1.5 shadow-md z-20 border-2 border-white animate-pop">
          <Star className="w-4 h-4 text-white fill-current" />
        </div>
      )}
      
      <button
        onClick={isUnlocked ? onClick : undefined}
        className={`
          relative w-20 h-20 rounded-full flex items-center justify-center 
          text-4xl text-white shadow-lg btn-duo z-10
          ${bg} ${border}
          ${isUnlocked ? 'cursor-pointer active:top-[4px]' : 'cursor-not-allowed'}
        `}
      >
        {isUnlocked ? (
           <span className="drop-shadow-sm filter">{level.icon}</span>
        ) : (
          <Lock className="w-7 h-7 text-[var(--color-text-muted)]" />
        )}
        
        {/* Glossy Reflection */}
        {isUnlocked && (
          <div className="absolute top-3 left-4 w-5 h-2.5 bg-white opacity-20 rounded-full rotate-[-40deg]" />
        )}
      </button>

      {/* Title Label */}
      <div className="mt-3 bg-white/90 backdrop-blur-sm px-2 rounded-lg">
         <p className="font-black text-[var(--color-text-muted)] text-xs uppercase tracking-wider">{level.title}</p>
      </div>
    </div>
  );
};

export default LevelButton;

