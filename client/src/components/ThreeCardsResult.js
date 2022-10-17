import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "@mui/material/Link";

const StyleThreeCardsResult = styled.section`
  position: relative;
  color: #878787;
`;

function ThreeCardsResult(props) {
  const [cardsResults, setCardsResults] = useState(<></>);

  useEffect(() => {
    const elements = props.cards.map((card, index) => (
      <div key={index} className="inline-block">
        <p className="text-center p-1">{card.name}</p>
        <Link
          href={`/${card.route.toLowerCase()}`}
          underline="none"
          color="inherit"
        >
          <img
            src={card.img}
            alt={card.name}
            className={`
            w-52
            ${card.inversion ? "rotate-180" : ""}
          `}
          />
        </Link>
      </div>
    ));
    setCardsResults(elements);
  }, [props]);

  return (
    <StyleThreeCardsResult>
      <h2 className="mb-4 text-center">三牌陣</h2>
      <div className="max-w-screen-sm flex items-end">{cardsResults}</div>
    </StyleThreeCardsResult>
  );
}

export default ThreeCardsResult;
