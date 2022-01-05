import styled from "styled-components";

const SingleCardResult = styled.section`
  position: relative;
  color: #878787;
`

function singleCardResult(props) {
  return (
    <SingleCardResult>
      <h2 className="mb-4 text-center">單牌陣</h2>
      <p>{props.name}</p>
      <img
        src={props.imgUrl}
        alt={props.name}
        className={`
          w-52
          ${props.inversion ? 'rotate-180' : ''}
        `}
      />
    </SingleCardResult>
  );
}

export default singleCardResult;
