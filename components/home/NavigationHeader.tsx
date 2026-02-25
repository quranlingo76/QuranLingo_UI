import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import { useAuth } from '../../contexts/AuthContext';

interface NavigationHeaderProps {
  onGetStarted?: () => void;
  showGetStarted?: boolean;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  onGetStarted,
  showGetStarted = true,
}) => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      navigate(isAuthenticated ? '/learning' : '/auth');
    }
  };

  return (
    <header className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Logo />
      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <>
            <span className="text-sm font-bold text-gray-500 hidden md:block">
              Hi, {user?.name?.split(' ')[0]}!
            </span>
            <button
              onClick={() => navigate('/learning')}
              className="px-5 py-2.5 bg-duo-green text-white font-bold rounded-xl hover:bg-duo-green-hover transition-all shadow-md text-sm"
            >
              Continue Learning
            </button>
            <button
              onClick={async () => { await logout(); }}
              className="px-4 py-2.5 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate('/auth')}
              className="px-5 py-2.5 bg-white text-duo-blue font-bold rounded-xl border-2 border-gray-200 hover:border-duo-blue transition-all text-sm"
            >
              Login
            </button>
            {showGetStarted && (
              <button
                onClick={handleGetStarted}
                className="px-6 py-2.5 bg-duo-blue text-white font-bold rounded-xl hover:bg-duo-blue-dark transition-all hover:scale-105 shadow-lg border-b-4 border-duo-blue-dark active:border-b-0 active:mt-1"
              >
                Get Started
              </button>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default NavigationHeader;
