import React from 'react';
import styled from 'styled-components';
import heroWave1 from '../../images/waves/hero-wave1.svg';
import heroWave2 from '../../images/waves/hero-wave2.svg';
import heroWave3 from '../../images/waves/hero-wave3.svg';

const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`;

const BackgroundStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`;
const Wave = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export default function WaveBackground() {
  return (
    <Wrapper>
      <BackgroundStyle />
      <Wave
        src={heroWave1}
        style={{ top: '100px', filter: 'blur(60px)' }}
      ></Wave>
      <Wave src={heroWave2} style={{ top: '350px' }}></Wave>
      <Wave src={heroWave3} style={{ top: '550px' }}></Wave>
    </Wrapper>
  );
}
