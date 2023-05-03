import { useEffect, useState } from "react";
import axios from "axios";
import "./bt1.css";

export default function Bt1(props) {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (e, card) => {
    e.preventDefault();
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const cardSets = async () => {
    //BT-01: Booster New Evolution
    await axios
      .get(`https://digimon-api.herokuapp.com/setname/${props.setname}`)
      .then((res) => setCards(res.data));
  };

  useEffect(() => {
    cardSets();
  }, []);

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
          onContextMenu={(e) => openModal(e, card)}
          className="cards"
          key={index}
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
            <h2>{selectedCard.name}</h2>
            <img src={selectedCard.image_url} alt={selectedCard.name} />
            <p>{selectedCard.type}</p>
            <p>{selectedCard.color}</p>
            <p>{selectedCard.stage}</p>
          </div>
        </div>
      )}
    </div>
  );
}
