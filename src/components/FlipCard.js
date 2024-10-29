// src/components/FlipCard.js
import React, { useState } from "react";
import "./FlipCard.css"; // Ensure you are using the correct CSS file

const FlipCard = ({ image, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="card-title">{title}</div> {/* Title displayed above the card */}
      <div className="flip-card-inner">
        {/* Front of the card */}
        <div className="flip-card-front">
          <img src={image} alt={title} className="flip-card-image" />
        </div>

        {/* Back of the card */}
        <div className="flip-card-back">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
