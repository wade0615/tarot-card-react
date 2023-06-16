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
  const [forwardKeyword, setForwardKeyword] = useState("");
  const [forwardExp, setForwardExp] = useState("");
  const [reverseKeyword, setReverseKeyword] = useState("");
  const [reverseExp, setReverseExp] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  useEffect(() => {
    function getCurrentCard() {
      const currentCard = cards.filter((card) => `/${card.route}` === pathName);
      setCardName(currentCard[0]?.name);
      setCardUrl(currentCard[0]?.img);
      if (currentCard[0]?.waiteExp) {
        setForwardKeyword(currentCard[0]?.waiteExp?.forwardKeyword);
        setForwardExp(currentCard[0]?.waiteExp?.forwardExp);
        setReverseKeyword(currentCard[0]?.waiteExp?.reverseKeyword);
        setReverseExp(currentCard[0]?.waiteExp?.reverseExp);
      }
    }
    getCurrentCard();
  }, [pathName]);

  return (
    <CardExplanationWrapper className="min-h-screen max-w-screen-sm m-auto p-6">
      <h2 className="text-3xl text-center">{cardName}</h2>
      <img className="mx-auto mb-4" src={cardUrl} alt={cardName} />
      {forwardKeyword ? (
        <h3
          className="text-xl mb-4"
          dangerouslySetInnerHTML={{ __html: `正位關鍵字：${forwardKeyword}` }}
        ></h3>
      ) : (
        ""
      )}
      {forwardExp ? (
        <p
          className="whitespace-pre-wrap mb-8"
          dangerouslySetInnerHTML={{ __html: forwardExp }}
        ></p>
      ) : (
        ""
      )}
      {reverseKeyword ? (
        <h3
          className="text-xl mb-4"
          dangerouslySetInnerHTML={{ __html: `逆位關鍵字：${reverseKeyword}` }}
        ></h3>
      ) : (
        ""
      )}
      {reverseExp ? (
        <p
          className="whitespace-pre-wrap mb-8"
          dangerouslySetInnerHTML={{ __html: reverseExp }}
        ></p>
      ) : (
        ""
      )}
    </CardExplanationWrapper>
  );
}

export default CardExplanation;
