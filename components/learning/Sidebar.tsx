import React from 'react';
import Logo from '../Logo';
import { Home, Target, Layout, User } from 'lucide-react';

type DashboardTab = 'learn' | 'goals' | 'quests' | 'profile';

interface SidebarProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'learn' as const, icon: Home, label: 'Learn' },
    { id: 'goals' as const, icon: Target, label: 'Goals' },
    { id: 'quests' as const, icon: Layout, label: 'Quests' },
    { id: 'profile' as const, icon: User, label: 'Profile' },
  ];

  return (
    <aside className="hidden md:flex w-64 border-r border-gray-200 flex-col p-4 sticky top-0 h-screen z-50 bg-white/95 backdrop-blur-sm">
      <div className="mb-8 px-2">
        <Logo />
      </div>
      
      <nav className="flex flex-col gap-2">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex items-center gap-4 p-3 rounded-xl font-bold uppercase text-xs border-2 tracking-widest transition-all ${
              activeTab === id
                ? 'bg-[var(--color-secondary-light)] text-duo-blue border-[var(--color-secondary-border)]'
                : 'border-transparent text-gray-400 hover:bg-gray-50'
            }`}
          >
            <Icon className="w-6 h-6" /> {label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

