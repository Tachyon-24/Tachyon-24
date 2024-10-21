import React from "react";
import "./EventsSection.css";

const EventsSection = () => {
  return (
    <section className="events" id="events">
      <h2>Our Events</h2>
      <div className="events-grid">
        <div className="event-card">
          <h3>Hackathon</h3>
          <p>Compete in a 24-hour hackathon.</p>
        </div>
        <div className="event-card">
          <h3>Workshops</h3>
          <p>Attend sessions by industry leaders.</p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
