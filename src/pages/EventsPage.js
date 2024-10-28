import React from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';

const EventsPage = () => {
  return (
    <div className="events-page">
      <nav className="page-nav">
        <Link to="/" className="back-button">
          <span className="back-arrow">←</span>
          Back to Home
        </Link>
        <h1 className="nav-title">Tech Fest 2024</h1>
      </nav>

      <section className="events-detail-section">
        <div className="events-container">
          <div className="events-header">
            <h2 className="events-title">Our Events</h2>
            <div className="title-underline"></div>
          </div>

          <div className="coming-soon-container">
            <div className="coming-soon-card">
              <div className="pulse-circle"></div>
              <h3 className="coming-soon-text">Coming Soon</h3>
              <p className="coming-soon-subtext">
                Exciting events are on the way!
                <br /> Stay tuned for more information.
              </p>
              <div className="decorative-line"></div>
              <div className="tech-icons">
                <span className="tech-dot"></span>
                <span className="tech-dot"></span>
                <span className="tech-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
