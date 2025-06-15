
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <h2>{t('hero-title')}</h2>
      <p className="hero-description">
        {t('hero-description')}
      </p>
      <a href="https://www.instagram.com/matnik_lumpini/" target="_blank" rel="noopener" className="cta-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
        <span>{t('follow-us')}</span>
      </a>
    </section>
  );
};

export default Hero;
