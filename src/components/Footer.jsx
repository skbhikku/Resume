/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-heading">
              <span className="footer-logo">Fresher</span>
              <span className="footer-logo-highlight">Sync</span>
              <div className="company-name">
            by Webhndal
          </div>
            </h3>
            <p className="footer-text">
              Empowering professionals with smart career solutions and resume analysis.
            </p>
          </div>
          

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/analysis" className="footer-link">Resume Check</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subheading">Contact Us</h4>
            <ul className="footer-contact">
              <li>📧 freshersync@gmail.com</li>
              <li>📞 +91 Update Soon...</li>
              {/* <li>📍 123 Career Street, Tech Valley</li> */}
            </ul>
          </div>

          {/* Social Media */}
          {/* <div className="footer-section">
            <h4 className="footer-subheading">Follow Us</h4>
            <div className="social-icons">
              <a href="/" className="social-icon">💼</a>
              <a href="/" className="social-icon">📘</a>
              <a href="/" className="social-icon">📸</a>
              <a href="/" className="social-icon"></a>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2023 CareerPath. All rights reserved.</p>
          {/* <div className="legal-links">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <span> | </span>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}