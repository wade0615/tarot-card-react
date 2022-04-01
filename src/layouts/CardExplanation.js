import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cards from "../assets/cards/index";

const CardExplanationWrapper = styled.div`
  position: relative;
  color: #878787;
`;

function CardExplanation() {
  const [pathName, setPathName] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardUrl, setCardUrl] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  useEffect(() => {
    function getCurrentCard() {
      const currentCard = cards.filter((card) => `/${card.route}` === pathName);
      setCardName(currentCard[0]?.name);
      setCardUrl(currentCard[0]?.img);
    }
    getCurrentCard();
  }, [pathName]);

  return (
    <CardExplanationWrapper className="min-h-screen flex justify-center items-center flex-col">
      <h2>{cardName}</h2>
      <img src={cardUrl} alt={cardName} />
    </CardExplanationWrapper>
  );
}

export default CardExplanation;
