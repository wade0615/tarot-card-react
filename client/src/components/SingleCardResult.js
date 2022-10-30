import React from "react";
import styled from "styled-components";
import Link from "@mui/material/Link";

const SingleCardResult = styled.section`
  position: relative;
  color: #878787;
`;

function singleCardResult({
  name = "",
  route,
  imgUrl,
  inversion = true,
  typeOfCard,
  cardType,
}) {
  return (
    <SingleCardResult>
      <p>{name}</p>
      {typeOfCard === cardType.WaiteTarot ? (
        <Link href={`/${route.toLowerCase()}`} underline="none" color="inherit">
          <img
            src={imgUrl}
            alt={name}
            className={`
            w-52
            ${inversion ? "rotate-180" : ""}
          `}
          />
        </Link>
      ) : (
        <img
          src={imgUrl}
          alt={name}
          className={`
        w-52
        ${inversion ? "rotate-180" : ""}
      `}
        />
      )}
    </SingleCardResult>
  );
}

export default singleCardResult;
