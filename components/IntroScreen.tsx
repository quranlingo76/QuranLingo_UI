
import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Brain, Globe, BookOpen, Layout, Repeat, CheckCircle } from 'lucide-react';
import Logo from './Logo';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans selection:bg-duo-green selection:text-white flex flex-col">
      
      {/* Navigation */}
      <nav className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto z-50 relative">
         <Logo className="w-10 h-10" />
         <button onClick={onStart} className="hidden md:flex items-center font-bold text-gray-500 hover:text-gray-900 transition-colors tracking-wide text-sm">
            ALREADY HAVE AN ACCOUNT?
         </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 pt-10 pb-20">
        {/* Background Grid Pattern specifically for Hero area */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        
        <div className="max-w-7xl w-full flex items-center justify-center relative z-10">
          <button 
            onClick={onStart}
            className="btn-duo btn-shimmer px-10 py-5 bg-duo-green text-white font-bold text-xl rounded-2xl border-duo-green-dark shadow-[0_10px_40px_-10px_rgba(88,204,2,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(88,204,2,0.6)] active:scale-[0.98] flex items-center justify-center gap-3 group transition-all"
          >
            START LEARNING
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>


      {/* Simple Footer */}
      <footer className="w-full bg-white border-t border-gray-100 py-10 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
             <Logo className="w-6 h-6" withText={false} />
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© 2024 QuranLingo. Built for the Ummah.</p>
         </div>
      </footer>
    </div>
  );
};

export default IntroScreen;

