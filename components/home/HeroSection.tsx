import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-duo-green/10 text-duo-green px-4 py-2 rounded-full font-bold text-sm mb-6 animate-bounce">
        <Sparkles className="w-4 h-4" />
        <span>AI-Powered Quranic Learning</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-kufic font-bold text-gray-800 mb-6 tracking-tight leading-tight">
        Master the Language
        <br />
        <span className="text-duo-green">of the Quran</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
        Learn Classical Arabic through an interactive, gamified experience designed to unlock deep understanding of the Quranic text.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={() => navigate('/learning')}
          className="group flex items-center gap-3 px-8 py-4 bg-duo-green text-white font-bold text-lg rounded-2xl hover:bg-duo-green-dark transition-all hover:scale-105 shadow-xl border-b-4 border-duo-green-dark active:border-b-0 active:mt-1"
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <button className="px-8 py-4 bg-white text-gray-700 font-bold text-lg rounded-2xl hover:bg-gray-50 transition-all border-2 border-gray-200 shadow-md">
          Watch Demo
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

