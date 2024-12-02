import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: "Dr.med.dent Tatjana Ladstätter",
    title: "Head Dentist",
    photo: "bro1.jpeg", // Replace with actual photo path
  },
  {
    name: "Dr. Anton Seliverstov",
    title: "Oral Surgeon",
    photo: "bro2.jpeg", // Replace with actual photo path
  },
  {
    name: "Dr. Sandra Pauser",
    title: "Orthodontist",
    photo: "bro3.jpg", // Replace with actual photo path
  },
  {
    name: "Dr. Julia Berg",
    title: "Pediatric Dentist",
    photo: "bro4.jpeg", // Replace with actual photo path
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

