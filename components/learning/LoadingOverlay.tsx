import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-[100] flex flex-col items-center justify-center animate-fade-up">
      <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-100 flex flex-col items-center max-w-xs text-center">
        <Loader2 className="w-12 h-12 text-duo-blue animate-spin mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">Generating Lesson</h3>
        <p className="text-gray-500 font-medium text-sm">
          Muallim AI is building custom sentence challenges based on your hard words...
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;

