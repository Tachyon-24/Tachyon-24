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
          
          <div className="events-grid">
            <div className="event-detail-card">
              <div className="event-icon">🚀</div>
              <h3>Hackathon</h3>
              <p>24-hour coding challenge to build innovative solutions.</p>
              <div className="event-meta">
                <span>Date: Coming Soon</span>
                <span>Prize Pool: $5000</span>
              </div>
            </div>

            <div className="event-detail-card">
              <div className="event-icon">💡</div>
              <h3>Tech Talks</h3>
              <p>Industry leaders sharing insights and experiences.</p>
              <div className="event-meta">
                <span>Date: Coming Soon</span>
                <span>Multiple Sessions</span>
              </div>
            </div>

            <div className="event-detail-card">
              <div className="event-icon">🎨</div>
              <h3>UI/UX Workshop</h3>
              <p>Learn design principles and tools from experts.</p>
              <div className="event-meta">
                <span>Date: Coming Soon</span>
                <span>Hands-on Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;