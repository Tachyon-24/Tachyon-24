// FlipCard.js
import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = ({ image, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        {/* Front side of the card */}
        <div className="flip-card-front">
          <img src={image} alt={title} className="flip-card-image" />
          <h3>{title}</h3>
        </div>
        {/* Back side of the card */}
        <div className="flip-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
