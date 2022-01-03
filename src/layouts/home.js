import React, { useState } from 'react';
import styled from "styled-components";

import CardArrayRadioGroup from "../components/CardArrayRadioGroup";
import SingleCardResult from "../components/SingleCardResult";

import cards from "../assets/cards/index";

import Button from '@mui/material/Button';

const HomeDiv = styled.div`
  position: relative;
  color: #878787;
`

function Home() {
  const [firstCard, setFirstCard] = useState(undefined);

  function getRangeRandom(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
  };
  function getACard() {
    const firstCardIndex = getRangeRandom(0, cards.length - 1);
    setFirstCard(cards[firstCardIndex]);
  };

  return (
    <HomeDiv className="h-screen flex justify-center items-center">
      <div>
        <CardArrayRadioGroup />
        <Button variant="outlined" onClick={getACard}>
          抽卡
        </Button>
        <SingleCardResult name={firstCard?.name} imgUrl={firstCard?.img} />
      </div>
    </HomeDiv>
  );
}

export default Home;
