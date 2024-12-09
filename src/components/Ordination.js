import React from 'react';
import './Ordination.css';


const Ordination = () => {
  const ordinationItems = [
    {
      src: "/images/ordination1.jpeg",
      caption: 'Modern Equipment',
    },
    {
      src: "/images/ordination2.jpeg",
      caption: 'Aesthetic Interior',
    },
    {
      src: "/images/ordination3.jpeg",
      caption: 'Many Rooms',
    },
    {
        src: "/images/ordination4.jpeg",
        caption: 'Сomfortable Waiting Area',
    },
  ];

  return (
    <section className="ordination">
      <h2 className="ordination-title">ORDINATION</h2>
      <div className="ordination-gallery">
        {ordinationItems.map((item, index) => (
          <div key={index} className="ordination-item">
            <img src={item.src} alt={item.caption} className="ordination-image" />
            <p className="ordination-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ordination;

