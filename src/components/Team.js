import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: "Tatjana Ladstätter",
    photo: "biba2.png",
  },
  {
    name: "Anton Seliverstov",
    photo: "biba1.png", 
  },
  {
    name: "Anja Ercegovac",
    photo: "biba45.png", 
  },
  {
    name: "Lisa Vorkonyi",
    photo: "biba3.png", 
  },
];

const Team = () => {
  return (
    <section className="team">
      <h2>OUR TEAM</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

