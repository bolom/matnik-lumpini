
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 8 6 6"></path>
        <path d="m4 14 6-6 2-3"></path>
        <path d="M2 5h12"></path>
        <path d="M7 2h1"></path>
        <path d="m22 22-5-10-5 10"></path>
        <path d="M14 18h6"></path>
      </svg>
      <select 
        value={currentLanguage} 
        onChange={(e) => setLanguage(e.target.value as 'fr' | 'gcf' | 'en')}
      >
        <option value="fr">Français</option>
        <option value="gcf">Kréol</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
