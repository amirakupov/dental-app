import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section>
      <h2>Book a Date</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
