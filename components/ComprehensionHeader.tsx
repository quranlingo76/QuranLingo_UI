
import React from 'react';
import { BookOpen } from 'lucide-react';

interface ComprehensionHeaderProps {
  percentage: number;
}

const ComprehensionHeader: React.FC<ComprehensionHeaderProps> = ({ percentage }) => {
  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm py-6 px-4 mb-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-gray-700">
            <BookOpen className="w-5 h-5 text-lingo-blue" />
            <span className="font-bold text-xs tracking-widest uppercase text-gray-400">Fluency Mastery</span>
          </div>
          <span className="font-black text-2xl text-lingo-blue">{percentage}%</span>
        </div>
        
        <div className="relative h-4 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-50">
          <div 
            className="absolute top-0 left-0 h-full bg-lingo-blue transition-all duration-1000 ease-out rounded-full"
            style={{ width: `${percentage}%` }}
          />
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
        </div>
        
        <p className="mt-3 text-center text-gray-500 text-sm font-bold">
          You now unlock <span className="text-lingo-blue font-black">{percentage}%</span> of the Quran's core vocabulary.
        </p>
      </div>
    </div>
  );
};

export default ComprehensionHeader;
