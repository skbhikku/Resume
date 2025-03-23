import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Style/Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <div className="main-title">
            <span className="logo-text">Fresher</span>
            <span className="logo-highlight">Sync</span>
          </div>
          <div className="company-name">
            by Webhndal
          </div>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/analysis" className={`nav-link ${isActive('/analysis') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              Resume Check
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </div>
    </nav>
  );
}