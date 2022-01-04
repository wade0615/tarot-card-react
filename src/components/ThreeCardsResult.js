import styled from "styled-components";

const StyleThreeCardsResult = styled.section`
  position: relative;
  color: #878787;
`

function ThreeCardsResult(props) {
  let cardsResults = props.cards.map((card, index) => 
    <div key={index} className="inline-block">
      <p className="text-center">{card.name}</p>
      <img
        src={card.img}
        alt={props.name}
        className={`w-52 ${card.inversion ? 'rotate-180' : ''}`}
      />
    </div>
  );

  return (
    <StyleThreeCardsResult>
      <h2>三牌陣</h2>
      {cardsResults}
    </StyleThreeCardsResult>
  );
}

export default ThreeCardsResult;
