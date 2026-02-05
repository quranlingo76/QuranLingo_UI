import React from 'react';
import { Flame, Zap, Target, ShieldCheck } from 'lucide-react';

interface ReviewStats {
  dueCount: number;
  weakCount: number;
  totalKnown: number;
  longTermCount: number;
  hardCount: number;
}

interface ProfileTabProps {
  streak: number;
  completedLevelsCount: number;
  reviewStats: ReviewStats;
}

const ProfileTab: React.FC<ProfileTabProps> = ({ streak, completedLevelsCount, reviewStats }) => {
  return (
    <div className="w-full max-w-lg mx-auto space-y-8 animate-pop">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 bg-duo-blue rounded-full border-4 border-dashed border-duo-blue-dark flex items-center justify-center text-4xl font-bold text-white uppercase shadow-lg">
          You
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#4b4b4b]">Student of Quran</h2>
          <p className="text-duo-gray-dark font-medium">Joined 2024</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-duo-yellow" />
            <span className="font-bold text-[#4b4b4b]">Streak</span>
          </div>
          <p className="text-2xl font-bold text-gray-500">{streak}</p>
        </div>
        <div className="border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-duo-blue" />
            <span className="font-bold text-[#4b4b4b]">Total XP</span>
          </div>
          <p className="text-2xl font-bold text-gray-500">{completedLevelsCount * 15}</p>
        </div>
        <div className="border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-duo-green" />
            <span className="font-bold text-[#4b4b4b]">Words</span>
          </div>
          <p className="text-2xl font-bold text-gray-500">{reviewStats.totalKnown}</p>
        </div>
        <div className="border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-[#a346ff]" />
            <span className="font-bold text-[#4b4b4b]">Hard Words</span>
          </div>
          <p className="text-2xl font-bold text-gray-500">{reviewStats.hardCount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;

