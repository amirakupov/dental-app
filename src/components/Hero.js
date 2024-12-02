import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Title on the Left */}
        <div className="hero-title">
          <h1>
            Dr.med.dent. <br />
            Tatjana <br />
            Ladstätter
          </h1>
        </div>

        {/* Ordination Times on the Right */}
        <div className="hero-ordination">
          <h2>Ordination Times:</h2>
          <ul>
            <li>Tuesday: 9 AM - 3 PM</li>
            <li>Wednesday: 9 AM - 6 PM</li>
            <li>Thursday: 9 AM - 1 PM</li>
            <li>Friday: Closed</li>
            <li>Saturday: Closed</li>
            <li>Monday: 12 PM - 6 PM</li>
          </ul>
        </div>
      </div>

      {/* Team Photo */}
      <div className="hero-photo">
        <img src="hero.jpg" alt="Team" />
        {/* Signature Container
        <div className="signature-container">
          <img
            className="signature"
            src="/signature.png"
            alt="Signature"
          />
          <p>Dr.med.dent. Tatjana Ladstätter</p>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;


