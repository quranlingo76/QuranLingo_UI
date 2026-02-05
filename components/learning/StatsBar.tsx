import React from 'react';
import { Flame, Zap, Trophy } from 'lucide-react';

interface StatsBarProps {
  streak: number;
  comprehensionPercentage: number;
  longTermCount: number;
}

const StatsBar: React.FC<StatsBarProps> = ({ streak, comprehensionPercentage, longTermCount }) => {
  return (
    <div className="hidden md:flex justify-between items-center mb-8 bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-gray-100 z-30 sticky top-4 shadow-sm">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 text-duo-yellow font-bold">
          <Flame className="w-6 h-6 fill-current" />
          <span className="text-lg">{streak}</span>
        </div>
        <div className="flex items-center gap-2 text-duo-blue font-bold">
          <Zap className="w-6 h-6 fill-current" />
          <span className="text-lg">{comprehensionPercentage}% Fluency</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-400 font-bold">
        <Trophy className="w-5 h-5" />
        <span className="text-sm">{longTermCount} Patterns Secure</span>
      </div>
    </div>
  );
};

export default StatsBar;

