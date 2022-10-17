import React from "react";
import styled from "styled-components";
import Link from "@mui/material/Link";

const SingleCardResult = styled.section`
  position: relative;
  color: #878787;
`;

function singleCardResult({ name = "", route, imgUrl, inversion = true }) {
  return (
    <SingleCardResult>
      <h2 className="mb-4 text-center">單牌陣</h2>
      <p>{name}</p>
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
    </SingleCardResult>
  );
}

export default singleCardResult;
