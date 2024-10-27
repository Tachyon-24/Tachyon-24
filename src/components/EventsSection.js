import React from "react";
import "./EventsSection.css";

const EventsSection = () => {
  return (
    <section className="events" id="events">
      <h1>Our Events</h1>
      <div className="events-grid">
        <div className="event-card">
          <h3>Games</h3>
          <p>Coming Soon...</p>
        </div>
        <div className="event-card">
          <h3>Workshops</h3>
          <p>Coming Soon...</p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
