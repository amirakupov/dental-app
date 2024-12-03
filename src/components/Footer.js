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
            src="https://www.google.com/maps/place/Zahn%C3%A4rztin+Ordination:+Dr.med.dent.+Tatjana+Ladst%C3%A4tter+Alle+Kassen+und+Privat/@48.1437361,16.4728395,17z/data=!3m1!5s0x476daae5b1a85ddd:0xbb508064e8a5de7d!4m6!3m5!1s0x476dab4e53b1b16f:0x55747ae5bc5480e4!8m2!3d48.1422658!4d16.4736967!16s%2Fg%2F11vqrs32yy?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
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

