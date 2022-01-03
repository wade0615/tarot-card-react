import styled from "styled-components";

import CardArrayRadioGroup from "../components/CardArrayRadioGroup";
import SingleCardResult from "../components/SingleCardResult";

import Button from '@mui/material/Button';

const HomeDiv = styled.div`
  position: relative;
  color: #878787;
`

function Home() {
  return (
    <HomeDiv className="h-screen flex justify-center items-center">
      <div>
        <CardArrayRadioGroup />
        <Button variant="outlined">抽卡</Button>
        <SingleCardResult name="Bob" />
      </div>
    </HomeDiv>
  );
}

export default Home;
