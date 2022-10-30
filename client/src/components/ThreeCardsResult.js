import React from "react";
import styled from "styled-components";
import Link from "@mui/material/Link";

const StyleThreeCardsResult = styled.section`
  position: relative;
  padding: 2rem 0.5rem;
  color: #878787;
`;

function ThreeCardsResult({ cards, typeOfCard, cardType }) {
  return (
    <StyleThreeCardsResult>
      <div className="max-w-screen-sm flex items-end">
        {cards.map((card, index) => (
          <div key={index} className="inline-block">
            <p className="text-center p-1">{card.name}</p>
            {typeOfCard === cardType.WaiteTarot ? (
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
            ) : (
              <img
                src={card.img}
                alt={card.name}
                className={`
        w-52
        ${card.inversion ? "rotate-180" : ""}
      `}
              />
            )}
          </div>
        ))}
      </div>
    </StyleThreeCardsResult>
  );
}

export default ThreeCardsResult;
