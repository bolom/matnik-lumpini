
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../utils/translations';

type Language = 'fr' | 'gcf' | 'en';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('gcf');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    if (savedLang && ['fr', 'gcf', 'en'].includes(savedLang)) {
      setCurrentLanguage(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang === 'gcf' ? 'gcf' : lang;
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
