import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons
import { IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for hamburger menu
  const [languageOpen, setLanguageOpen] = useState(false); // Toggle for language dropdown

  return (
    <header className="header">
      <nav className="nav">

        {/* Navigation List */}
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

        {/* Actions */}
        <div className="actions">
          {/* Call Now Button */}
          <a href="tel:+4313671607" className="call-now">
            <FaPhone className="phone-icon" />
            <span>CALL NOW</span>
          </a>

          {/* Language Dropdown */}
          <div
            className="language"
            onClick={() => setLanguageOpen(!languageOpen)}
          >
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
    </header>
  );
};

export default Header;



