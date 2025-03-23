import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/HomePage.css';
import image from '../assets/image.png';
export default function HomePage() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Smart Resume Analysis for
            <span className="highlight"> Tech Careers</span>
          </h1>
          <p className="hero-subtitle">
            Get detailed resume feedback and discover best-matched tech roles
            through comprehensive skill analysis
          </p>
          <Link to="/analysis" className="cta-button">
            Analyze Your Resume
          </Link>
        </div>
        <div className="hero-illustration">
          <img src={image} alt="Career Analysis" />
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Skill Analytics</h3>
          <p>Detailed breakdown of your technical competencies</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Role Matching</h3>
          <p>Identify ideal positions based on your experience</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Career Growth</h3>
          <p>Personalized development recommendations</p>
        </div>
      </section>
    </div>
  );
}