import React from "react";
import Bt2 from "../components/Sets/bt1/bt2.jsx";
import selectedCard from "../components/Sets/bt1/bt2.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DeckBuilder({ selectedCard, user }) {
  return (
    <>
      <div>
        <Bt2 user={user} />
      </div>
    </>
  );
}
