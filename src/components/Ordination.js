import React from 'react';
import { useTranslation } from 'react-i18next';
import './Ordination.css';

const Ordination = () => {
  const { t } = useTranslation();
  const ordinationItems = t('ordinationItems', { returnObjects: true });

  return (
    <section className="ordination">
      <h2 className="ordination-title">{t('ordinationTitle')}</h2>
      <div className="ordination-gallery">
        {ordinationItems.map((item, index) => (
          <div key={index} className="ordination-item">
            <img
              src={`/images/ordination${index + 1}.jpeg`}
              alt={item.caption}
              className="ordination-image"
            />
            <p className="ordination-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ordination;

