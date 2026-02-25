import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Zap, Target, ShieldCheck, LogIn, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

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
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  // Not logged in — show login prompt
  if (!isAuthenticated) {
    return (
      <div className="w-full max-w-lg mx-auto animate-pop">
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
          <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-6 border-4 border-dashed border-gray-200">
            <User className="w-14 h-14 text-gray-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Please login to see your profile</h2>
          <p className="text-gray-500 text-base mb-8 max-w-sm">
            Sign in to track your progress, streaks, and learning stats.
          </p>
          <button
            onClick={() => navigate('/auth')}
            className="px-8 py-4 bg-duo-green hover:bg-duo-green-hover text-white rounded-2xl font-bold text-lg shadow-[0_4px_0_0_var(--color-primary-dark)] active:shadow-none active:translate-y-[4px] transition-all flex items-center gap-3"
          >
            <LogIn className="w-5 h-5" />
            <span>Login / Sign Up</span>
          </button>
        </div>
      </div>
    );
  }

  // Logged in — show full profile
  const initials = user?.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U';

  return (
    <div className="w-full max-w-lg mx-auto space-y-8 animate-pop">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 bg-duo-blue rounded-full border-4 border-dashed border-duo-blue-dark flex items-center justify-center text-3xl font-bold text-white uppercase shadow-lg">
          {initials}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-heading)]">{user?.name || 'Student of Quran'}</h2>
          <p className="text-duo-gray-dark font-medium">{user?.email}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-duo-yellow" />
            <span className="font-bold text-[var(--color-text-heading)]">Streak</span>
          </div>
          <p className="text-2xl font-bold text-gray-500">{streak}</p>
        </div>
        <div className="border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-duo-blue" />
            <span className="font-bold text-[var(--color-text-heading)]">Total XP</span>
          </div>
          <p className="text-2xl font-bold text-gray-500">{completedLevelsCount * 15}</p>
        </div>
        <div className="border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-duo-green" />
            <span className="font-bold text-[var(--color-text-heading)]">Words</span>
          </div>
          <p className="text-2xl font-bold text-gray-500">{reviewStats.totalKnown}</p>
        </div>
        <div className="border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-[var(--color-accent-purple)]" />
            <span className="font-bold text-[var(--color-text-heading)]">Hard Words</span>
          </div>
          <p className="text-2xl font-bold text-gray-500">{reviewStats.hardCount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
