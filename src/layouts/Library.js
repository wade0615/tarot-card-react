import React from "react";
import styled from "styled-components";
import cards from "../assets/cards/index";
import Link from "@mui/material/Link";

const StyleLibrary = styled.section`
  position: relative;
`;

/** 過濾陣列中的指定物件 key */
function filterObjKeyInArr(arr, key, filterSting) {
  return arr.filter((item) => item[key].includes(filterSting));
}
/** 過濾陣列中不含指定物件 key 的 filterSting */
function filterWithoutObjKeyInArr(arr, key, filterStingArr) {
  return arr.filter((item) => {
    const filterBoolean = filterStingArr.map((filterSting) => {
      return item[key].includes(filterSting) ? true : false;
    });
    return !filterBoolean.includes(true);
  });
}
/** 陣列生成卡片列表 */
function returnCardsElement(cards) {
  return cards.map((card, index) => {
    return (
      <div key={index} className="inline-block align-top w-1/5 mb-4 p-1">
        <Link
          href={`/${card.route.split(" ").join("-").toLowerCase()}`}
          underline="none"
          color="inherit"
        >
          <img src={card.img} alt={card.name} />
          <p className="text-center">{card.name}</p>
        </Link>
      </div>
    );
  });
}

function Library() {
  const majorArcana = filterWithoutObjKeyInArr(cards, "name", [
    "cups",
    "pentacles",
    "wands",
    "swords",
  ]);
  const cardCups = filterObjKeyInArr(cards, "name", "cups");
  const cardPentacles = filterObjKeyInArr(cards, "name", "pentacles");
  const cardWands = filterObjKeyInArr(cards, "name", "wands");
  const cardSwords = filterObjKeyInArr(cards, "name", "swords");
  return (
    <StyleLibrary className="max-w-screen-sm m-auto">
      <h2 className="p-5 text-xl text-center">大阿爾克那</h2>
      {returnCardsElement(majorArcana)}
      <h2 className="p-5 text-xl text-center">聖杯</h2>
      {returnCardsElement(cardCups)}
      <h2 className="p-5 text-xl text-center">寶劍</h2>
      {returnCardsElement(cardSwords)}
      <h2 className="p-5 text-xl text-center">錢幣</h2>
      {returnCardsElement(cardPentacles)}
      <h2 className="p-5 text-xl text-center">權杖</h2>
      {returnCardsElement(cardWands)}
    </StyleLibrary>
  );
}

export default Library;
