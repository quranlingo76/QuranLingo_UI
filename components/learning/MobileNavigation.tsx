import React from 'react';
import { Home, Target, Layout, User } from 'lucide-react';

type DashboardTab = 'learn' | 'goals' | 'quests' | 'profile';

interface MobileNavigationProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'learn' as const, icon: Home },
    { id: 'goals' as const, icon: Target },
    { id: 'quests' as const, icon: Layout },
    { id: 'profile' as const, icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 flex justify-around items-center z-50">
      {navItems.map(({ id, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`p-3 transition-all ${
            activeTab === id ? 'text-duo-blue bg-blue-50 rounded-xl' : 'text-gray-400'
          }`}
        >
          <Icon className="w-7 h-7" />
        </button>
      ))}
    </nav>
  );
};

export default MobileNavigation;

