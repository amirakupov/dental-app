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
              href="https://www.instagram.com"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.755407271781!2d16.467400415889056!3d48.1446788792236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d055c9f7eb65b%3A0x546eef31b2286ff5!2sBrauhausstra%C3%9Fe%2023%2C%202320%20Schwechat%2C%20Austria!5e0!3m2!1sen!2sus!4v1698319463204!5m2!1sen!2sus"
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

