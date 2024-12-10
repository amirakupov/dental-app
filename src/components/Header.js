import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for hamburger menu
  const [languageOpen, setLanguageOpen] = useState(false); // Toggle for language dropdown
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageOpen(false); // Close dropdown after selection
  };

  return (
    <header className="header">
      <nav className="nav">
        {/* Tooth Icon */}
        <div className="tooth-icon">
          <img src="/tooth.svg" alt="Tooth Icon" />
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="HOME" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              {t('home')}
            </Link>
          </li>
          <li>
            <Link to="ORDINATION" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              {t('ordination')}
            </Link>
          </li>
          <li>
            <Link to="TEAM" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              {t('team')}
            </Link>
          </li>
          <li>
            <Link to="LEISTUNGEN" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              {t('services')}
            </Link>
          </li>
          <li>
            <Link to="KONTAKT" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              {t('contact')}
            </Link>
          </li>
        </ul>

        <div className="actions">
          <a href="tel:+4313671607" className="call-now">
            <FaPhone className="phone-icon" />
            <span>{t('callNow')}</span>
          </a>
          <div className="language" onClick={() => setLanguageOpen(!languageOpen)}>
            <span>{i18n.language.toUpperCase()}</span>
            <IoMdArrowDropdown className="dropdown-arrow" />
            {languageOpen && (
              <ul className="language-dropdown">
                <li onClick={() => changeLanguage('en')}>ENGLISH</li>
                <li onClick={() => changeLanguage('ru')}>РУССКИЙ</li>
                <li onClick={() => changeLanguage('sr')}>СРПСКИ</li>
                <li onClick={() => changeLanguage('de')}>DEUTSCH</li>
              </ul>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <Link to="HOME" smooth={true} duration={500} onClick={toggleMenu}>
              {t('home')}
            </Link>
          </li>
          <li>
            <Link to="ORDINATION" smooth={true} duration={500} onClick={toggleMenu}>
              {t('ordination')}
            </Link>
          </li>
          <li>
            <Link to="TEAM" smooth={true} duration={500} onClick={toggleMenu}>
              {t('team')}
            </Link>
          </li>
          <li>
            <Link to="LEISTUNGEN" smooth={true} duration={500} onClick={toggleMenu}>
              {t('services')}
            </Link>
          </li>
          <li>
            <Link to="KONTAKT" smooth={true} duration={500} onClick={toggleMenu}>
              {t('contact')}
            </Link>
          </li>
          {/* Language Dropdown */}
          <li className="language">
            <div onClick={() => setLanguageOpen(!languageOpen)}>
              <span>{i18n.language.toUpperCase()}</span>
              <IoMdArrowDropdown className="dropdown-arrow" />
            </div>
            {languageOpen && (
              <ul className="language-dropdown">
                <li onClick={() => changeLanguage('en')}>ENGLISH</li>
                <li onClick={() => changeLanguage('ru')}>РУССКИЙ</li>
                <li onClick={() => changeLanguage('sr')}>СРПСКИ</li>
                <li onClick={() => changeLanguage('de')}>DEUTSCH</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;






