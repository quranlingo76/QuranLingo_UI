import React from 'react';
import { ShieldCheck, Flame, Target } from 'lucide-react';
import { LevelNode } from '../../config/types';

interface ReviewStats {
  dueCount: number;
  weakCount: number;
  totalKnown: number;
  longTermCount: number;
  hardCount: number;
}

interface RightSidebarProps {
  reviewLevel: LevelNode | null;
  reviewStats: ReviewStats;
  onStartReview: (level: LevelNode) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ reviewLevel, reviewStats, onStartReview }) => {
  return (
    <aside className="hidden lg:flex w-80 border-l border-gray-200 flex-col p-6 sticky top-0 h-screen overflow-y-auto bg-white/95 backdrop-blur-sm z-50">
      {reviewLevel && (
        <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 mb-8 shadow-sm group hover:border-duo-blue transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-duo-blue rounded-2xl flex items-center justify-center shadow-md">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <h4 className="font-bold text-[#4b4b4b] uppercase tracking-wide text-sm">Pattern Guard</h4>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-6 leading-relaxed">
            Some of your mastered patterns need reinforcement. Protect your long-term memory!
          </p>
          <button 
            onClick={() => onStartReview(reviewLevel)}
            className="w-full btn-duo bg-duo-blue border-duo-blue-dark text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs"
          >
            Start Review
          </button>
        </div>
      )}

      <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm">
        <h4 className="font-bold text-[#4b4b4b] uppercase tracking-wide text-sm mb-6">Daily Progress</h4>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-duo-yellow rounded-xl flex items-center justify-center shadow-sm">
              <Flame className="text-white w-5 h-5 fill-current" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">XP Goal</p>
              <div className="w-full h-3 bg-gray-100 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-duo-yellow w-1/4 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-duo-green rounded-xl flex items-center justify-center shadow-sm">
              <Target className="text-white w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mastery</p>
              <p className="text-lg font-bold text-[#4b4b4b]">
                {reviewStats.longTermCount} / {reviewStats.totalKnown} Words
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;

