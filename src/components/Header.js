import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons
import { IoMdArrowDropdown } from 'react-icons/io';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for hamburger menu
  const [languageOpen, setLanguageOpen] = useState(false); // Toggle for language dropdown

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  
    if (!menuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };
  

  return (
    <header className="header">
      <nav className="nav">
        <div className="burger-menu" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="HOME" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="ORDINATION" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              ORDINATION
            </Link>
          </li>
          <li>
            <Link to="TEAM" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              TEAM
            </Link>
          </li>
          <li>
            <Link to="LEISTUNGEN" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              LEISTUNGEN
            </Link>
          </li>
          <li>
            <Link to="KONTAKT" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              KONTAKT
            </Link>
          </li>
        </ul>

        <div className="actions">
          <a href="tel:+4313671607" className="call-now">
            <FaPhone className="phone-icon" />
            <span>CALL NOW</span>
          </a>
          <div className="language" onClick={() => setLanguageOpen(!languageOpen)}>
            <span>ENG</span>
            <IoMdArrowDropdown className="dropdown-arrow" />
            {languageOpen && (
              <ul className="language-dropdown">
                <li>German</li>
                <li>Russian</li>
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
              HOME
            </Link>
          </li>
          <li>
            <Link to="ORDINATION" smooth={true} duration={500} onClick={toggleMenu}>
              ORDINATION
            </Link>
          </li>
          <li>
            <Link to="TEAM" smooth={true} duration={500} onClick={toggleMenu}>
              TEAM
            </Link>
          </li>
          <li>
            <Link to="LEISTUNGEN" smooth={true} duration={500} onClick={toggleMenu}>
              LEISTUNGEN
            </Link>
          </li>
          <li>
            <Link to="KONTAKT" smooth={true} duration={500} onClick={toggleMenu}>
              KONTAKT
            </Link>
          </li>
          <a href="tel:+4313671607" className="call-now">
            <FaPhone className="phone-icon" />
            <span>CALL NOW</span>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;




