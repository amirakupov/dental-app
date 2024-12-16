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
            <FaPhone className="icon" aria-label="Phone" />
            <a href="tel:+4313671607" aria-label="Call us">
              {t('footer.contact.phone')}
            </a>
          </div>
          <div className="contact-info">
            <FaMailBulk className="icon" aria-label="Email" />
            <a href="mailto:dr.ladstaetter.tanja@gmail.com" aria-label="Email us">
              {t('footer.contact.email')}
            </a>
          </div>
          <div className="social-media">
            <FaInstagram className="icon" aria-label="Instagram" />
            <a
              href="https://www.instagram.com/dr_tatjana_ladstaetter?igsh=azV5dHNsazhnaDdj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              {t('footer.social.instagram')}
            </a>
          </div>
        </div>

        {/* Right Section: Embedded Google Map */}
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11308.21333572552!2d16.4658114!3d48.1422658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476dab4e53b1b16f%3A0x55747ae5bc5480e4!2sZahn%C3%A4rztin%20Ordination%3A%20Dr.med.dent.%20Tatjana%20Ladst%C3%A4tter%20Alle%20Kassen%20und%20Privat!5e0!3m2!1sen!2sat!4v1702547651684!5m2!1sen!2sat"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


