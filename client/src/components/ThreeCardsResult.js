import React from "react";
import styled from "styled-components";

const StyleThreeCardsResult = styled.section`
  position: relative;
  color: #878787;
`;

function ThreeCardsResult(props) {
  let cardsResults = props.cards.map((card, index) => (
    <div key={index} className="inline-block">
      <p className="text-center p-1">{card.name}</p>
      <img
        src={card.img}
        alt={props.name}
        className={`${card.inversion ? "rotate-180" : ""}`}
      />
    </div>
  ));

  return (
    <StyleThreeCardsResult>
      <h2 className="mb-4 text-center">三牌陣</h2>
      <div className="max-w-screen-sm flex items-end">{cardsResults}</div>
    </StyleThreeCardsResult>
  );
}

export default ThreeCardsResult;
