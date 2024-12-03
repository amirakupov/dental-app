import React from 'react';
import './Hero.css';

const Hero = () => {
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
          <h2>ORDINATIONSZEITEN:</h2>
          <ul>
            <li>MONTAG: 12:00 - 18:00</li>
            <li>DIENSTAG: 9:00 - 15:00</li>
            <li>MITTWOCH: 9:00 - 18:00</li>
            <li>DONNERSTAG: 9:00 - 13:00</li>
            <li>FREITAG: GESCHLOSSEN</li>
            <li>SAMSTAG: GESCHLOSSEN</li>
            <li>SONNTAG: GESCHLOSSEN</li>
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


