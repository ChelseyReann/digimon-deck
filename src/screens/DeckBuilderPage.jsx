import React from "react";
import Bt1 from "../components/Sets/bt1/bt1";
import { useState } from "react";
import "./CSSscreens/DeckBuilderPage.css";

export default function DeckBuilder() {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardSelect = (selectedCard) => {
    setSelectedCards([...selectedCards, selectedCard]);
  };

  return (
    <div className="deck-builder">
      <h2>Deck Builder</h2>
      <div className="selected-cards">
        {selectedCards.map((card) => (
          <div key={card.id}>
            <h3>{card.name}</h3>
            <img src={card.image_url} alt={card.name} />
          </div>
        ))}
      </div>
      <Bt1 handleCardSelect={handleCardSelect} />
    </div>
  );
}
