import styled from "styled-components";

const StyleThreeCardsResult = styled.section`
  position: relative;
  color: #878787;
`

function ThreeCardsResult(props) {
  return (
    <StyleThreeCardsResult>
      <h2>三牌陣</h2>
      <p>{props.name}</p>
      <img
        src={props.imgUrl}
        className={`
          w-52
          ${props.inversion ? 'rotate-180' : ''}
        `}
      />
    </StyleThreeCardsResult>
  );
}

export default ThreeCardsResult;
