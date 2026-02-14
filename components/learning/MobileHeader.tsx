import React from 'react';
import Logo from '../Logo';
import { Flame } from 'lucide-react';

interface MobileHeaderProps {
  streak: number;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ streak }) => {
  return (
    <div className="md:hidden w-full flex justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <Logo className="w-32 h-10" />
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-duo-yellow font-bold">
          <Flame className="w-6 h-6 fill-current" /> {streak}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;

