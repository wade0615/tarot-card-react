import React, { useState } from "react";
import styled from "styled-components";

import CardArrayRadioGroup from "../components/CardArrayRadioGroup";
import SingleCardResult from "../components/SingleCardResult";
import ThreeCardsResult from "../components/ThreeCardsResult";

import cards from "../assets/cards/index";

import Button from "@mui/material/Button";

const HomeDiv = styled.div`
  position: relative;
  color: #878787;
`;

function Home() {
  const [cardArray, setCardArray] = useState(undefined);
  const [firstCard, setFirstCard] = useState(undefined);
  const [threeCards, setThreeCards] = useState([]);

  const cardArrayHandleChange = (e) => {
    setCardArray(e);
  };
  function getCardsResult() {
    if (cardArray === "single") {
      getACard();
    } else if (cardArray === "treble") {
      getThreeCards();
    }
  }

  function getRangeRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getACard() {
    const firstCardIndex = getRangeRandom(0, cards.length - 1);
    const firstCardInversion = getRangeRandom(0, 1);
    let firstCard = JSON.parse(JSON.stringify(cards[firstCardIndex]));
    firstCard.inversion = firstCardInversion === 1 ? true : false;
    setFirstCard(firstCard);
  }
  function getThreeCards() {
    setThreeCards(getMultipleRandomCards(3, cards));
  }
  function getMultipleRandomCards(num, cardsArr) {
    let randomCards = [];
    let arr = JSON.parse(JSON.stringify(cardsArr));
    for (var index = 0; index < num; index++) {
      const pickedIndex = getRangeRandom(0, arr.length - 1);
      randomCards.push(arr.splice(pickedIndex, 1)[0]);
      const cardInversion = getRangeRandom(0, 1);
      randomCards[randomCards.length - 1].inversion =
        cardInversion === 1 ? true : false;
    }
    return randomCards;
  }

  let cardsResults;
  if (cardArray === "single") {
    cardsResults = (
      <SingleCardResult
        name={firstCard?.name}
        imgUrl={firstCard?.img}
        inversion={firstCard?.inversion}
      ></SingleCardResult>
    );
  } else if (cardArray === "treble") {
    cardsResults = <ThreeCardsResult cards={threeCards}></ThreeCardsResult>;
  }

  return (
    <HomeDiv className="min-h-screen flex justify-center items-center flex-col">
      <section className="mb-4">
        <CardArrayRadioGroup handleChange={cardArrayHandleChange} />
        <Button variant="outlined" onClick={getCardsResult}>
          我在此鄭重發誓，我絕對不懷好意
        </Button>
      </section>
      {cardsResults}
    </HomeDiv>
  );
}

export default Home;
