
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <p>© 2025 <strong style={{ color: 'var(--accent)' }}>Matnik Lumpini</strong> — {t('boxing-club')}</p>
      <a href="https://www.instagram.com/matnik_lumpini/" target="_blank" rel="noopener" className="social-link">
        @matnik_lumpini
      </a>
    </footer>
  );
};

export default Footer;
