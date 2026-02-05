
import React from 'react';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", withText = true }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative flex items-center justify-center ${className}`}>
         {/* The "Q-Bubble" Symbol */}
         <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
            {/* Outer Bubble Shape */}
            <path d="M50 5C25.1472 5 5 22.9086 5 45C5 59.5 13.5 72.3 26 79.5V95L42 84.5C44.6 84.8 47.3 85 50 85C74.8528 85 95 67.0914 95 45C95 22.9086 74.8528 5 50 5Z" fill="#58cc02"/>
            {/* Inner Glare/Detail */}
            <path d="M50 12C70 12 87 26 87 45C87 48 86.5 51 85.5 54C91 48 93 40 93 45C93 25 74 8 50 8C35 8 25 15 18 25C25 16 36 12 50 12Z" fill="white" fillOpacity="0.2"/>
            {/* The Arabic 'Qaf' Stylized Dots/Stroke */}
            <circle cx="40" cy="35" r="5" fill="white"/>
            <circle cx="60" cy="35" r="5" fill="white"/>
            <path d="M35 55C35 55 42 62 50 62C58 62 65 55 65 55" stroke="white" strokeWidth="6" strokeLinecap="round"/>
         </svg>
      </div>
      
      {withText && (
        <div className="flex flex-col justify-center">
            <h1 className="font-black text-[#58cc02] tracking-tighter text-2xl leading-none">QURAN<span className="text-[#1cb0f6]">LINGO</span></h1>
        </div>
      )}
    </div>
  );
};

export default Logo;

