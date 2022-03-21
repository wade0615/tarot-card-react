import React from "react";
// import React, { useState } from "react";
import styled from "styled-components";

const CardExplanationWrapper = styled.div`
  position: relative;
  color: #878787;
`;

function CardExplanation() {
  // const [card, setCard] = useState(false);

  return (
    <CardExplanationWrapper className="min-h-screen flex justify-center items-center flex-col">
      <section>CardExplanationWrapper</section>
    </CardExplanationWrapper>
  );
}

export default CardExplanation;
