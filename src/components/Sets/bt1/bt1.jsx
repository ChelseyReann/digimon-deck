import { useEffect, useState } from "react";
import axios from "axios";
import "./bt1.css";

export default function Bt1({ user, setname }) {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (e, card) => {
    e.preventDefault();
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const addCard = async (cardId) => {
    await axios.post("https://digimon-api.herokuapp.com/addCard", {
      cardId: cardId,
      userId: user.id,
    });
  };

  useEffect(() => {
    const cardSets = async () => {
      try {
        const res = await axios.get(
          `https://digimon-api.herokuapp.com/setname/${setname}`
        );
        setCards(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    cardSets();
  }, [setname]);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCard]);

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div
          onClick={() => {
            addCard(card._id);
            const messageContainer = document.createElement("div"); // Create a new <div> container element
            messageContainer.style.position = "fixed"; // Set the position to fixed
            messageContainer.style.top = "50%"; // Set the top to 50%
            messageContainer.style.left = "50%"; // Set the left to 50%
            messageContainer.style.transform = "translate(-50%, -50%)"; // Center the container horizontally and vertically
            messageContainer.style.backgroundColor = "lightblue";
            messageContainer.style.maxWidth = "35%";
            messageContainer.style.borderRadius = "1rem";
            messageContainer.style.border = "3px solid #2D2B2E";
            messageContainer.style.boxShadow = "6px 6px 8px #2D2B2E";
            const message = document.createElement("h3"); // Create a new <h3> element
            message.textContent = `${card.name} has been added to your deck!`; // Set the message
            messageContainer.appendChild(message); // Add the <h3> element to the container
            document.body.appendChild(messageContainer); // Add the container to the body of the document
            setTimeout(() => {
              // Set a timeout of 3 seconds
              messageContainer.remove(); // Remove the container after the timeout
            }, 1000);
          }}
          onContextMenu={(e) => openModal(e, card)}
          className="cards"
          key={index}
          r
          style={{
            backgroundImage: `url(${card.image_url})`,
            color: "transparent",
          }}
        >
          {card.name}
        </div>
      ))}

      {selectedCard && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2 className="cardName">{selectedCard.name}</h2>
            <img
              className="cardImg"
              src={selectedCard.image_url}
              alt={selectedCard.name}
            />
            <ul className="cardData">
              <li>Type: {selectedCard.type}</li>
              <li>Color: {selectedCard.color}</li>
              <li>Stage: {selectedCard.stage}</li>
              <li>Digi-Type: {selectedCard.digi_type}</li>
              <li>Attribute: {selectedCard.attribute}</li>
              <li>Level: {selectedCard.level}</li>
              <li>Play Cost: {selectedCard.play_cost}</li>
              <li>Evolution Cost: {selectedCard.evolution_cost}</li>
              <li>Card Rarity: {selectedCard.cardrarity}</li>
              <li>DP: {selectedCard.dp}</li>
              <li>Card Number:{selectedCard.cardnumber}</li>
              <li>Set Name: {selectedCard.set_name}</li>
            </ul>
            <p className="cardEffect">{selectedCard.maineffect}</p>
          </div>
        </div>
      )}
    </div>
  );
}
