import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/AboutPage.css';
import image from '../assets/image.png';

export default function AboutPage() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Advanced Career Matching Through
            <span className="highlight"> Skill Analysis</span>
          </h1>
          <p className="hero-subtitle">
            Our system uses verified industry patterns and comprehensive
            skill evaluation to provide accurate career recommendations
          </p>
        </div>
        <div className="hero-illustration">
          <img src={image} alt="Career Growth" />
        </div>
      </section>

      <section className="mission-section">
        <h2 className="section-title">Our Methodology</h2>
        <div className="mission-grid">
          <div className="mission-card">
            <div className="mission-icon">📚</div>
            <h3>Industry Standards</h3>
            <p>Based on latest tech industry requirements</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">🔍</div>
            <h3>Detailed Analysis</h3>
            <p>Comprehensive skill pattern recognition</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">💼</div>
            <h3>Career Mapping</h3>
            <p>Proven career path recommendations</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Start Your Career Analysis</h2>
        <Link to="/analysis" className="cta-button">
          Begin Now
        </Link>
      </section>
    </div>
  );
}