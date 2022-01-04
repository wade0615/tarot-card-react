import styled from "styled-components";

const StyleThreeCardsResult = styled.section`
  position: relative;
  color: #878787;
`

function ThreeCardsResult(props) {
  return (
    <StyleThreeCardsResult>
      <h2>三牌陣</h2>
      <div className="inline-block">
        <p className="text-center">{props.name}</p>
        <img
          src={props.imgUrl}
          className={`w-52 ${props.inversion ? 'rotate-180' : ''}`}
        />
      </div>
      <div className="inline-block">
        <p className="text-center">{props.name}</p>
        <img
          src={props.imgUrl}
          className={`w-52 ${props.inversion ? 'rotate-180' : ''}`}
        />
      </div>
      <div className="inline-block">
        <p className="text-center">{props.name}</p>
        <img
          src={props.imgUrl}
          className={`w-52 ${props.inversion ? 'rotate-180' : ''}`}
        />
      </div>
    </StyleThreeCardsResult>
  );
}

export default ThreeCardsResult;
