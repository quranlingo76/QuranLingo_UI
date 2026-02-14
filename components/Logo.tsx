
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-40 h-12" }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative flex items-center justify-center ${className}`}>
         <img 
           src="/images/logo.png" 
           alt="QuranLingo Logo" 
           className="w-full h-full object-contain"
         />
      </div>
    </div>
  );
};

export default Logo;

