import styled from "styled-components";

const SingleCardResult = styled.section`
  position: relative;
  color: #878787;
`

function singleCardResult(props) {
  return (
    <SingleCardResult>
      SingleCardResult{props.name}
      <img src="https://images.lnka.tw/images/files/tarot/swords_7.jpg"></img>
    </SingleCardResult>
  );
}

export default singleCardResult;
