import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaMailBulk, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-address">
          <h3>{t('footer.title')}</h3>
          <p>{t('footer.address.line1')}</p>
          <p>{t('footer.address.line2')}</p>
          <p>{t('footer.address.country')}</p>
          <div className="contact-info">
            <FaPhone className="icon" />
            <a href="tel:+4313671607">{t('footer.contact.phone')}</a>
          </div>
          <div className="contact-info">
            <FaMailBulk className="icon" />
            <a href="mailto:dr.ladstaetter.tanja@gmail.com">{t('footer.contact.email')}</a>
          </div>
          <div className="social-media">
            <FaInstagram className="icon" />
            <a
              href="https://www.instagram.com/dr_tatjana_ladstaetter?igsh=azV5dHNsazhnaDdj"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('footer.social.instagram')}
            </a>
          </div>
        </div>

        {/* Right Section: Map Screenshot */}
        <div className="footer-map">
          <img
            src="address-dental.png" // Update with the actual path
            alt={t('footer.address.line1') + ', ' + t('footer.address.line2')}
            className="static-map"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;


