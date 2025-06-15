
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const InfoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="info-section">
      <h3>{t('schedule-address')}</h3>
      <div className="info-grid">
        <div className="schedule-section">
          <ul className="schedule">
            <li>
              <span className="day">{t('monday')}</span>
              <span className="time">19h — 21h</span>
              <span className="group">{t('all-levels')}</span>
            </li>
            <li>
              <span className="day">{t('wednesday')}</span>
              <span className="time">19h — 21h</span>
              <span className="group">{t('advanced')}</span>
            </li>
            <li>
              <span className="day">{t('thursday')}</span>
              <span className="time">19h — 21h</span>
              <span className="group">{t('beginners')}</span>
            </li>
          </ul>
        </div>
        
        <div className="address-section">
          <h4>{t('our-location')}</h4>
          <div className="address">
            17 Route de Balata<br />
            97200 Fort-de-France<br />
            Martinique
          </div>
          <a href="https://maps.google.com/?q=17+Route+de+Balata,+97200+Fort-de-France,+Martinique" target="_blank" rel="noopener" className="map-link">
            <span>{t('visit-site')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
