import React from 'react';
import './Services.css';

const servicesLeftColumn = [
  {
    title: "Prophylaxe & Zahnreinigung",
    description: "Professionelle Zahnreinigung (PZR)Parodontitisbehandlung Individuelle Beratung zur Mundhygiene",
  },
  {
    title: "Zahnersatz",
    description: "Kronen, Brücken und Prothesen Implantatgetragener Zahnersatz Total und Teilprothesen",
  },
  {
    title: "Füllungstherapie",
    description: "Zahnfüllungen aus Kunststoff oder Keramik Amalgamfreie Füllungen Reparaturen und Inlays",
  },
  {
    title: "Zahnimplantate",
    description: "Individuelle Implantatversorgung Knochentransplantation und Augmentation Sofortimplantation",
  },
  {
    title: "Kieferorthopädie",
    description: "MODERNE kieferorthopädische Behandlungen"
  },
];

const servicesRightColumn = [
  {
    title: "Wurzelbehandlung",
    description: "Moderne Wurzelkanalbehandlung Schmerzarme Verfahren Erfolgskontrolle und Nachbehandlung",
  },
  {
    title: "Ästhetische Zahnmedizin",
    description: "Zahnaufhellung (Bleaching) Veneers und Lumineers Zahnumformung und kosmetische Korrekturen",
  },
  {
    title: "Notfallbehandlung",
    description: "Akute Zahnschmerzen und Verletzungen Zahnunfälle und Zahnausfall Schmerztherapie und sofortige Hilfe",
  },
  {
    title: "Beratung und Diagnostik",
    description: "Umfassende zahnärztliche Untersuchung Röntgenuntersuchung und digitale Bildgebung Individuelle Therapieplanung",
  },
  {
    title: "Kinderzahnheilkunde",
    description: "Frühzeitige Kariesprophylaxe Fissurenversiegelung Kinderfreundliche Behandlungen",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="vertical-text">LEISTUNGEN</div>
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


