import React from 'react';
import './Services.css';

const servicesLeftColumn = [
  {
    title: "Prophylaxe & Zahnreinigung",
    description: "PROFESSIONAL CLEANING AND DENTAL HYGIENE",
  },
  {
    title: "Zahnersatz",
    description: "CROWNS, BRIDGES, AND DENTAL PROSTHETICS",
  },
  {
    title: "Füllungstherapie",
    description: "FILLINGS USING HIGH-QUALITY MATERIALS",
  },
  {
    title: "Zahnimplantate",
    description: "INDIVIDUAL IMPLANT SOLUTIONS",
  },
  {
    title: "Kieferorthopädie",
    description: "MODERN ORTHODONTIC TREATMENTS",
  },
];

const servicesRightColumn = [
  {
    title: "Wurzelbehandlung",
    description: "ROOT CANAL TREATMENT WITH ADVANCED TECHNIQUES",
  },
  {
    title: "Ästhetische Zahnmedizin",
    description: "COSMETIC DENTISTRY INCLUDING WHITENING",
  },
  {
    title: "Notfallbehandlung",
    description: "IMMEDIATE HELP FOR DENTAL EMERGENCIES",
  },
  {
    title: "Beratung und Diagnostik",
    description: "PERSONALIZED CONSULTATION AND DIAGNOSIS",
  },
  {
    title: "Kinderzahnheilkunde",
    description: "CHILD-FRIENDLY DENTAL CARE",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="vertical-text">LEISTUNGEN</div>
      <div className="services-columns">
        {/* Left Column */}
        <div className="services-column">
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


