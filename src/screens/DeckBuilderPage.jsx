import React from "react";
import Bt1 from "../components/Sets/bt1/bt1";
import { useState } from "react";
import "./CSSscreens/DeckBuilderPage.css";
import axios from "axios";

export default function DeckBuilder({ selectedCard }) {
  const [data, setData] = useState({});

  const addCard = async () => {
    let data = {
      name: selectedCard.name,
      type: selectedCard.type,
      color: selectedCard.color,
      stage: selectedCard.stage,
      digi_type: selectedCard.digi_type,
      attribute: selectedCard.attribute,
      level: selectedCard.level,
      play_cost: selectedCard.play_cost,
      evolution_cost: selectedCard.evolution_cost,
      cardrarity: selectedCard.cardrarity,
      dp: selectedCard.dp,
      cardnumber: selectedCard.cardnumber,
      set_name: selectedCard.set_name,
    };
    let addedCard = await axios.post(
      "https://digimon-api.herokuapp.com/addCard",
      data
    );
  };

  return (
    <>
      <div></div>
    </>
  );
}
