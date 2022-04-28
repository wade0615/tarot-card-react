import React, { useState } from "react";
import styled from "styled-components";
import richartQRcode from "../assets/richart.jpeg";

const BankWrapper = styled.div`
  position: relative;
  color: #878787;
`;

function Gringotts() {
  const [bankName] = useState("Richart");

  return (
    <BankWrapper className="min-h-screen max-w-screen-sm m-auto p-6 pt-20">
      <h2 className="text-3xl text-center">{bankName}</h2>
      <p
        className="text-xl text-center"
      >812-28881014561061</p>
      <img className="mx-auto max-w-xs" src={richartQRcode} alt='richart' />
    </BankWrapper>
  );
}

export default Gringotts;
