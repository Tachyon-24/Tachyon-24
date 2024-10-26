// CardFlipSection.js
import React from "react";
import "./FlipCard.css";
import FlipCard from "./FlipCard";

const FlipCard2 = () => {
  
  const cards = [
    { image: "https://example.com/image1.jpg", title: "Card 1", description: "Info about Card 1" },
    { image: "https://example.com/image2.jpg", title: "Card 2", description: "Info about Card 2" },
    { image: "https://example.com/image3.jpg", title: "Card 3", description: "Info about Card 3" },
    { image: "https://example.com/image1.jpg", title: "Card 4", description: "Info about Card 1" },
    { image: "https://example.com/image2.jpg", title: "Card 5", description: "Info about Card 2" },
    { image: "https://example.com/image3.jpg", title: "Card 6", description: "Info about Card 3" },
    { image: "https://example.com/image1.jpg", title: "Card 7", description: "Info about Card 1" },
    { image: "https://example.com/image2.jpg", title: "Card 8", description: "Info about Card 2" },
    { image: "https://example.com/image3.jpg", title: "Card 9", description: "Info about Card 3" },
    // Add other cards similarly...
  ];

  return (
    <div className="card-container">
      <div className="card-scroll">
        {cards.map((card, index) => (
          <FlipCard key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default FlipCard2;
