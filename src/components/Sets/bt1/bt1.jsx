import { useEffect, useState } from "react";
import axios from "axios";
import "./bt1.css";
import DeckBuilder from "../../../screens/DeckBuilderPage";
import PropTypes from "prop-types";

export default function Bt1(props) {
  const [cards, setCards] = useState([]);
  const [selectedCardForDb, setSelectedCardForDb] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  //   const { handleCardSelect } = props;

  const openModal = (e, card) => {
    e.preventDefault();
    setSelectedCardForDb(card);
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    const cardSets = async () => {
      try {
        const res = await axios.get(
          `https://digimon-api.herokuapp.com/setname/${props.setname}`
        );
        setCards(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    cardSets();
  }, [props.setname]);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCard]);

  return (
    <div className="cards-container" onClick={closeModal}>
      {cards.map((card, index) => (
        <div
          onClick={() => props.handleCardSelect(card)}
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
            <h2 className="cardName">{selectedCard.name}</h2>
            <img
              className="cardImg"
              src={selectedCard.image_url}
              alt={selectedCard.name}
            />
            <ul className="cardData">
              <li>{selectedCard.type}</li>
              <li>{selectedCard.color}</li>
              <li>{selectedCard.stage}</li>
              <li>{selectedCard.digi_type}</li>
              <li>{selectedCard.attribute}</li>
              <li>{selectedCard.level}</li>
              <li>{selectedCard.play_cost}</li>
              <li>{selectedCard.evolution_cost}</li>
              <li>{selectedCard.cardrarity}</li>
              <li>{selectedCard.dp}</li>
              <li>{selectedCard.cardnumber}</li>
              <li>{selectedCard.set_name}</li>
            </ul>
            <p className="cardEffect">{selectedCard.maineffect}</p>
          </div>
        </div>
      )}

      {selectedCardForDb && <DeckBuilder selectedCard={selectedCardForDb} />}
    </div>
  );
}

Bt1.propTypes = {
  handleCardSelect: PropTypes.func.isRequired,
};
