import { useEffect, useState } from "react";
import axios from "axios";
import "./bt2.css";

export default function Bt2(user) {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  console.log(user.user.id);
  console.log(cards);

  //   let article = { quantity: (prevState) => prevState + 1 };

  //   const updateQuantity = async () => {
  //     await axios.put(
  //       `https://digimon-api.herokuapp.com/updateQuantity/${selectedCard.id}`,
  //       article
  //     );
  //   };

  const updateQuantity = async (cardId) => {
    await axios.post("https://digimon-api.herokuapp.com/addCard", {
      cardId: cardId,
      userId: user.user.id,
    });
  };

  let article1 = { quantity: (prevState) => prevState - 1 };
  const openModal = (e, card) => {
    e.preventDefault();
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const deleteCard = async (cardId) => {
    await axios
      .delete(`https://digimon-api.herokuapp.com/deleteCard/${cardId}`, {
        cardId: cardId,
        userId: user._id,
      })
      .then(console.log(cardId));
  };

  useEffect(() => {
    const cardSets = async () => {
      try {
        const res = await axios.get(
          `https://digimon-api.herokuapp.com/deck1/${user.user.id}`
        );
        setCards(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    cardSets();
  }, []);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCard]);

  const fullDeck = cards.deck1;

  return (
    <div className="cards-container" onClick={closeModal}>
      {fullDeck?.map((card, index) => (
        <div
          onClick={() => deleteCard(card._id)}
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
      {/* {fullDeck?.map((card, index) => (
        <p key={index}>{card.name}</p>
      ))} */}
    </div>
  );
}
