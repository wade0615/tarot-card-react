import styled from "styled-components";

const SingleCardResult = styled.section`
  position: relative;
  color: #878787;
`

function singleCardResult(props) {
  return (
    <SingleCardResult>
      {props.name}
      <img
        src={props.imgUrl}
        className={`
          w-52
          ${props.inversion ? 'rotate-180' : ''}
        `}
      />
    </SingleCardResult>
  );
}

export default singleCardResult;
