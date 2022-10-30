import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CardArrayRadioGroup from "../components/CardArrayRadioGroup";
import SingleCardResult from "../components/SingleCardResult";
import ThreeCardsResult from "../components/ThreeCardsResult";
import Select from "../components/Select";

import waiteTarotCards from "../assets/cards/index";
import angelTarotCards from "../assets/angelTarotCards/index";

import Button from "@mui/material/Button";

const HomeDiv = styled.div`
  position: relative;
  color: #878787;
`;

/** 牌種 */
const CardType = Object.freeze({
  WaiteTarot: "WaiteTarot",
  AngelTarot: "AngelTarot",
});

/** 牌堆選項 */
const CardTypesOptions = [
  {
    label: "偉特塔羅",
    value: CardType.WaiteTarot,
  },
  {
    label: "天使塔羅",
    value: CardType.AngelTarot,
  },
];

function Home() {
  const [typeOfCard, setTypeOfCard] = useState("");
  const [cards, setCards] = useState(waiteTarotCards);
  const [cardArray, setCardArray] = useState(undefined);
  const [cardsResults, setCardsResults] = useState(<></>);
  const [singleCard, setSingleCard] = useState(undefined);
  const [threeCards, setThreeCards] = useState([]);

  /** 選擇牌組 */
  function handleCardType(cardType) {
    setTypeOfCard(cardType);
  }

  /** 若牌組換了，切換牌堆 */
  useEffect(() => {
    if (typeOfCard === CardType.WaiteTarot) {
      setCards(waiteTarotCards);
    } else if (typeOfCard === CardType.AngelTarot) {
      setCards(angelTarotCards);
    }
  }, [typeOfCard]);

  /** 切換牌陣 */
  const cardArrayHandleChange = (e) => {
    setCardArray(e);
  };

  /** 取亂數 */
  function getRangeRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /** 取一張牌 */
  function getACard() {
    const CardIndex = getRangeRandom(0, cards.length - 1);
    const CardInversion = getRangeRandom(0, 1);
    let singleCard = JSON.parse(JSON.stringify(cards[CardIndex]));
    singleCard.inversion = false;
    if (typeOfCard === CardType.WaiteTarot) {
      singleCard.inversion = CardInversion === 1 ? true : false;
    }
    setSingleCard(singleCard);
  }

  /** 取三張牌 */
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
      randomCards[randomCards.length - 1].inversion = false;
      if (typeOfCard === CardType.WaiteTarot) {
        randomCards[randomCards.length - 1].inversion =
          cardInversion === 1 ? true : false;
      }
    }
    return randomCards;
  }

  useEffect(() => {
    if (cardArray === "single" && singleCard) {
      const res = (
        <SingleCardResult
          name={singleCard?.name}
          imgUrl={singleCard?.img}
          route={singleCard?.route}
          inversion={singleCard?.inversion}
        ></SingleCardResult>
      );
      setCardsResults(res);
    } else if (cardArray === "treble" && threeCards.length > 0) {
      const res = <ThreeCardsResult cards={threeCards}></ThreeCardsResult>;
      setCardsResults(res);
    }
  }, [cardArray, singleCard, threeCards]);

  /** 取得抽牌結果 */
  function getCardsResult() {
    if (cardArray === "single") {
      getACard();
    } else if (cardArray === "treble") {
      getThreeCards();
    }
  }

  return (
    <HomeDiv className="min-h-screen flex justify-center items-center flex-col">
      <section className="mb-4 p-8">
        <Select
          options={CardTypesOptions}
          onSelect={handleCardType}
          placeholder="選取你的牌組"
        />
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
