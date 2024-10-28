import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <nav className="page-nav">
        <Link to="/" className="back-button">
          <span className="back-arrow">←</span>
          Back to Home
        </Link>
        <h1 className="nav-title">Tech Fest 2024</h1>
      </nav>

      <section className="about-detail-section">
        <div className="about-container">
          <div className="about-header">
            <h2 className="about-title">About Tech Fest</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="about-content">
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>To create a platform that brings together tech enthusiasts, innovators, and industry leaders to shape the future of technology.</p>
            </div>

            <div className="about-card">
              <h3>Our Mission</h3>
              <p>Fostering innovation, collaboration, and learning through engaging tech events and workshops that inspire the next generation of technologists.</p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Expected Participants</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Events Planned</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Industry Speakers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;