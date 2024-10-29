// src/components/FlipCard2.js
import React from "react";
import "./FlipCard.css"; // Importing the CSS styling for FlipCard
import FlipCard from "./FlipCard";

const FlipCard2 = () => {
  const cards = [
    { image: "/image12.png", title: "CSE", description: "Info about Card 1" },
    { image: "/image13.png", title: "Mech", description: "Info about Card 2" },
    { image: "/image14.png", title: "Civil", description: "Info about Card 3" },
    { image: "/image15.png", title: "Electronics", description: "Info about Card 1" },
    { image: "/image16.png", title: "Chemical", description: "Info about Card 2" },
  ];

  // Duplicate the cards array by combining cards with itself for seamless scrolling
  const allCards = [...cards, ...cards];

  return (
    <div className="card-container">
      <div className="card-scroll">
        {allCards.map((card, index) => (
          <FlipCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FlipCard2;
