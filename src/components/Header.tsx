
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header>
      <img src="/img/logo.png" alt="Matnik Lumpini Logo" className="logo" />
      <h1>Matnik Lumpini</h1>
      <p className="subtitle">{t('subtitle')}</p>
      <p className="location">Fodfwans, Matinik</p>
    </header>
  );
};

export default Header;
