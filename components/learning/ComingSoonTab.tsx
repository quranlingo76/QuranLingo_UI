import React from 'react';
import { Layout } from 'lucide-react';

const ComingSoonTab: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center px-6 animate-pop">
      <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <Layout className="w-20 h-20 text-gray-300" />
      </div>
      <h2 className="text-2xl font-bold text-[var(--color-text-heading)] mb-2">Coming Soon</h2>
      <p className="text-duo-gray-dark font-medium max-w-xs">
        We are crafting new quests and goals to accelerate your Quranic journey.
      </p>
    </div>
  );
};

export default ComingSoonTab;

