import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: "nice foto",
    photo: "",
  },
  {
    name: "nice foto",
    photo: "", 
  },
  {
    name: "nice foto",
    photo: "", 
  },
  {
    name: "nice foto",
    photo: "", 
  },
];

const Team = () => {
  return (
    <section className="team">
      <h2>murat gay</h2>
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

