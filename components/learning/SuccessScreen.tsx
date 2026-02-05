import React from 'react';
import { Trophy } from 'lucide-react';

interface SuccessScreenProps {
  comprehensionPercentage: number;
  onContinue: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ comprehensionPercentage, onContinue }) => {
  const particles = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i * 30) * (Math.PI / 180);
    const distance = 100 + Math.random() * 50;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    const delay = Math.random() * 0.2;
    return { tx, ty, delay, id: i };
  });

  return (
    <div className="min-h-screen bg-grid-pattern flex flex-col items-center justify-center p-8 text-center overflow-hidden relative">
      <div className="relative z-10 animate-pop max-w-sm w-full">
        {/* Particle Explosion Container */}
        <div className="relative inline-block mb-10">
          {particles.map(p => (
            <div 
              key={p.id}
              className="absolute top-1/2 left-1/2 w-3 h-3 bg-gold-light rounded-full"
              style={{
                '--tx': `${p.tx}px`,
                '--ty': `${p.ty}px`,
                animationDelay: `${p.delay}s`
              } as React.CSSProperties}
              id="particle"
            />
          ))}
          <div className="relative bg-duo-yellow p-10 rounded-[3rem] border-b-8 border-duo-yellow-dark shadow-2xl animate-bounce z-10">
            <Trophy className="w-20 h-20 text-white" />
          </div>
        </div>

        <h2 className="text-4xl font-kufic font-bold mb-4 text-[#4b4b4b] tracking-tight">
          Lesson Complete!
        </h2>
        <p className="text-lg font-medium text-gray-500 mb-10">
          You're decoding the Quran, one pattern at a time. Keep it up!
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="bg-white p-4 rounded-3xl border-2 border-gray-100 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">XP EARNED</p>
            <p className="text-2xl font-bold text-duo-yellow">+15</p>
          </div>
          <div className="bg-white p-4 rounded-3xl border-2 border-gray-100 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">FLUENCY</p>
            <p className="text-2xl font-bold text-duo-blue">{comprehensionPercentage}%</p>
          </div>
        </div>
        
        <button 
          onClick={onContinue} 
          className="w-full bg-duo-green text-white font-bold text-xl py-5 rounded-2xl btn-duo border-duo-green-dark shadow-xl active:scale-[0.98]"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;

