import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
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
  const { isAuthenticated, user, logout } = useAuth();

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      navigate('/learning');
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Logo />

      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <>
            {/* User greeting */}
            <span className="hidden md:inline-block text-sm text-gray-600 font-medium">
              Assalamualaikum, <span className="text-duo-blue font-bold">{user?.name?.split(' ')[0]}</span>
            </span>

            {/* Dashboard button */}
            <button
              onClick={() => navigate('/learning')}
              className="px-5 py-2.5 bg-duo-blue text-white font-bold rounded-xl hover:bg-duo-blue-dark transition-all hover:scale-105 shadow-lg border-b-4 border-duo-blue-dark active:border-b-0 active:mt-1 text-sm"
            >
              Dashboard
            </button>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 bg-gray-100 text-gray-600 font-semibold rounded-xl hover:bg-gray-200 transition-all text-sm border border-gray-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Login link */}
            <Link
              to="/login"
              className="px-5 py-2.5 text-duo-blue font-bold rounded-xl hover:bg-duo-blue/5 transition-all text-sm"
            >
              Sign In
            </Link>

            {/* Get Started / Register */}
            {showGetStarted && (
              <Link
                to="/register"
                className="px-6 py-2.5 bg-duo-blue text-white font-bold rounded-xl hover:bg-duo-blue-dark transition-all hover:scale-105 shadow-lg border-b-4 border-duo-blue-dark active:border-b-0 active:mt-1 text-sm"
              >
                Get Started
              </Link>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default NavigationHeader;
