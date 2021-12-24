import styled from "styled-components";
import Button from '@mui/material/Button';

function Home() {

  const HomeDiv = styled.div`
    position: relative;
    color: #878787;
  `
  return (
    <HomeDiv className="h-screen flex justify-center items-center">
      home
      <Button variant="outlined">Primary</Button>
    </HomeDiv>
  );
}

export default Home;
