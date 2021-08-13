import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {opacity: 1;}
  to {opacity: 0.25;}
}
`;

function createCSS() {
  let styles = '';
  for (let i = 0; i < 13; i++) {
    styles += `
         &:nth-child(${i}) {
           animation-delay: ${i * 0.076}s;
           transform: rotate(${i * 30}deg) translate(0, -130%);
         }
       `;
  }
  return `${styles}`;
}

const Spinner = styled.div`
  position: relative;
  width: 54px;
  height: 54px;
  display: inline-block;
  background: #74a6f2;
  padding: 10px;
  border-radius: 10px;

  div {
    width: 5%; //!todo
    height: 15%; //!todo
    background: #fff; // !todo
    position: absolute;
    left: 49%; // !todo why?
    top: 43%; // !todo why?
    opacity: 0;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    animation: ${fade} 1s linear infinite;

    ${createCSS()}
  }
`;

export const IosSpinner = () => {
  return (
    <Spinner>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Spinner>
  );
};
