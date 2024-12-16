import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaMailBulk, FaInstagram } from 'react-icons/fa';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDw7Snl7bhWqaPxBai-lEV2Z5KE2EWPKTE',
  });

  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const center = {
    lat: 48.2082, // Latitude of your location
    lng: 16.3738, // Longitude of your location
  };

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

        {/* Right Section: Google Map */}
        <div className="footer-map">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          ) : (
            <p>{t('loadingMap')}</p> // Display while the map is loading
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;


