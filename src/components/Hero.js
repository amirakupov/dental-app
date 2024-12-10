import React from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Title on the Left */}
        <div className="hero-title">
          <h1>
            DR.MED.DENT. <br />
            TATJANA <br />
            LADSTÄTTER
            <img src="e-card.png" alt="Decoration" className="title-image" />
          </h1>
        </div>

        {/* Ordination Times on the Right */}
        <div className="hero-ordination">
          <h2>{t('ordinationTimes.title')}</h2>
          <ul>
            <li>{t('ordinationTimes.monday')}</li>
            <li>{t('ordinationTimes.tuesday')}</li>
            <li>{t('ordinationTimes.wednesday')}</li>
            <li>{t('ordinationTimes.thursday')}</li>
            <li>{t('ordinationTimes.friday')}</li>
            <li>{t('ordinationTimes.saturday')}</li>
            <li>{t('ordinationTimes.sunday')}</li>
          </ul>
        </div>
      </div>

      {/* Team Photo */}
      <div className="hero-photo">
        <img src="hero.jpg" alt="Team" />
      </div>
    </section>
  );
};

export default Hero;


