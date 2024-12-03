import React from 'react';
import './Footer.css';
import { FaInstagram, FaPhone } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-address">
          <h3>Dr.med.dent Tatjana Ladstätter</h3>
          <p>Brauhausstraße 23</p>
          <p>2320 Schwechat</p>
          <p>Austria</p>
          <div className="contact-info">
            <FaPhone className="icon" />
            <a href="tel:+4313671607">+43 1 367 1607</a>
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

        {/* Right Section: Google Maps */}
        <div className="footer-map">
          <iframe
            title="Google Maps"
            src="https://maps.app.goo.gl/8oGWrHysP8vd6kkK6"
            width="100%"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

