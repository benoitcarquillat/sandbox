import React, { useEffect, useRef } from 'react';

import {
  Card,
  Container as MgtContainer,
  media,
  Stack,
} from '@tymate/margaret';
import styled, { keyframes } from 'styled-components';
import WaveBackground from 'components/backgrounds/WaveBackground';

const animation = keyframes`
  from {opacity: 0; transform: translateY(0px)}
  to {opacity: 1; transform: translateY(20px)}
`;

function createCSS() {
  let styles = '';
  for (let i = 0; i < 13; i++) {
    styles += `
       &:nth-child(${i}) {
         animation-delay: ${i * 0.2}s;
       }
     `;
  }
  return `${styles}`;
}

const UlWrapper = styled(Stack)`
  > * {
    opacity: 0;
    animation: ${animation} 0.2s forwards;

    ${createCSS()};
  }

  ${media.tablet`
    padding-top: 80px;
  `}
  Card {
    background: 'red';
  }
`;

const Wrapper = styled.div``;

const Home = () => {
  const handleClickDiv = () => {
    alert('yo');
  };
  const handleClickCard = () => {
    alert('yo card');
  };

  const cardRef = useRef();

  useEffect(() => {
    console.log(cardRef.current);
  });

  return (
    <Wrapper>
      <WaveBackground />
      <MgtContainer>
        <UlWrapper gutterSize={2}>
          <div ref={cardRef}>
            <Card onClick={() => handleClickCard()}>Hello</Card>
          </div>
          <Card>Hello</Card>
          <Card>Hello</Card>
          <Card>Hello</Card>
          <Card>Hello</Card>
          <Card>Hello</Card>
          <Card>Hello</Card>
          <Card>Hello</Card>
          <Card>Hello</Card>
          <Card>Hello</Card>
          <Card>Hello</Card>
        </UlWrapper>
      </MgtContainer>
      dzdzd
    </Wrapper>
  );
};

export default Home;
