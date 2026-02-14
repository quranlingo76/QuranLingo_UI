import React from 'react';
import Logo from '../Logo';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-gray-200 bg-white/80 backdrop-blur-md mt-20 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center gap-6">
        <Logo className="w-48 h-16" />
        <p className="text-gray-600 font-medium text-center">
          © 2024 QuranLingo. Built with ❤️ for the Ummah.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

