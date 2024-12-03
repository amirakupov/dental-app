import React from 'react';
import './Footer.css';
import { FaInstagram, FaPhone, FaMailBulk} from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-address">
          <h3>Dr.med.dent Tatjana Ladstätter</h3>
          <p>Brauhausstraße 1</p>
          <p>2320 Schwechat</p>
          <p>Austria</p>
          <div className="contact-info">
            <FaPhone className="icon" />
            <a href="tel:+4313671607">+43 1 367 1607</a>
          </div>
          <div className="contact-info">
            <FaMailBulk className="icon" />
            <a href="mailto:dr.ladstaetter.tanja@gmail.com">dr.ladstaetter.tanja@gmail.com</a>
          </div>
          <div className="social-media">
            <FaInstagram className="icon" />
            <a
              href="https://www.instagram.com/dr_tatjana_ladstaetter?igsh=azV5dHNsazhnaDdj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Right Section: Map Screenshot */}
        <div className="footer-map">
          <img
            src="address-dental.png" // Update with the actual path
            alt="Google Map of Brauhausstraße 23, 2320 Schwechat"
            className="static-map"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

