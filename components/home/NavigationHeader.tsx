import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';

interface NavigationHeaderProps {
  onGetStarted?: () => void;
  showGetStarted?: boolean;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  onGetStarted,
  showGetStarted = true,
}) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      navigate('/learning');
    }
  };

  return (
    <header className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Logo />
      {showGetStarted && (
        <button
          onClick={handleGetStarted}
          className="px-6 py-2.5 bg-duo-blue text-white font-bold rounded-xl hover:bg-duo-blue-dark transition-all hover:scale-105 shadow-lg border-b-4 border-duo-blue-dark active:border-b-0 active:mt-1"
        >
          Get Started
        </button>
      )}
    </header>
  );
};

export default NavigationHeader;

