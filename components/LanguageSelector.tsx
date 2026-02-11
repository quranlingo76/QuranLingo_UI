import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage, AVAILABLE_LANGUAGES, LanguageCode } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = AVAILABLE_LANGUAGES.find(l => l.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 px-3 py-2 rounded-xl transition-all text-sm font-medium"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang?.label}</span>
        <span className="sm:hidden">{currentLang?.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 animate-fade-in origin-top-right">
          {AVAILABLE_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as LanguageCode);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors ${
                language === lang.code ? 'text-duo-green font-bold bg-green-50' : 'text-gray-600'
              }`}
            >
              <span>{lang.label}</span>
              {language === lang.code && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

