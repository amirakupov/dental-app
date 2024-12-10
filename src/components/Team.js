import React from 'react';
import { useTranslation } from 'react-i18next';
import './Team.css';

const teamPhotos = [
  "biba2.png",
  "biba1.png",
  "biba45.png",
  "biba3.png"
];

const Team = () => {
  const { t } = useTranslation();
  const teamMembers = t('teamMembers', { returnObjects: true });

  return (
    <section className="team">
      <h2>{t('teamTitle')}</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member"> {/* Add the team-member class */}
            <img src={teamPhotos[index]} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
