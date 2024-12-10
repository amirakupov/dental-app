import React from 'react';
import './Services.css';
import { useTranslation } from 'react-i18next';


const Services = () => {
  const { t } = useTranslation();

  const servicesLeftColumn = t('servicesLeftColumn', { returnObjects: true });
  const servicesRightColumn = t('servicesRightColumn', { returnObjects: true });

  return (
    <section className="services">
      <div className="vertical-text">{t('servicesTitle')}</div>
      <div className="services-columns">
        {/* Left Column */}
        <div className="services-column left-column">
          {servicesLeftColumn.map((service, index) => (
            <div key={index} className="service-item">
              <img src="/Vector.png" alt="Golden Icon" className="icon" />
              <div>
                <span className="service-title">{service.title}</span>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="services-column">
          {servicesRightColumn.map((service, index) => (
            <div key={index} className="service-item">
              <img src="/Vector.png" alt="Golden Icon" className="icon" />
              <div>
                <span className="service-title">{service.title}</span>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


