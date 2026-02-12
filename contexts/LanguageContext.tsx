import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LanguageCode = 'en' | 'ur' | 'ur_en';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string; // Basic translation helper
}

const LANGUAGES = {
  en: 'English',
  ur: 'Urdu',
  ur_en: 'Roman Urdu'
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  useEffect(() => {
    const saved = localStorage.getItem('appLanguage') as LanguageCode;
    if (saved && Object.keys(LANGUAGES).includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('appLanguage', lang);
  };

  // Simple translation helper placeholder
  const t = (text: string) => text; 

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const AVAILABLE_LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ur', label: 'Urdu', flag: '🇵🇰' },
  { code: 'ur_en', label: 'Roman Urdu', flag: '🇵🇰' }
];

