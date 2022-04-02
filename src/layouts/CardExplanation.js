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
  const [cardExp, setCardExp] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  useEffect(() => {
    function getCurrentCard() {
      const currentCard = cards.filter((card) => `/${card.route}` === pathName);
      setCardName(currentCard[0]?.name);
      setCardUrl(currentCard[0]?.img);
      if (currentCard[0]?.waiteExp) {
        setCardExp(currentCard[0]?.waiteExp);
      }
    }
    getCurrentCard();
  }, [pathName]);

  return (
    <CardExplanationWrapper className="min-h-screen p-6">
      <h2 className="text-3xl text-center">{cardName}</h2>
      <img className="mx-auto" src={cardUrl} alt={cardName} />
      <p
        className="whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: cardExp }}
      ></p>
    </CardExplanationWrapper>
  );
}

export default CardExplanation;
