import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
// import { Container, Stack } from '@tymate/margaret'; // todo learn margaret
import { AppContext } from 'context';
import locomotiveScroll from 'locomotive-scroll';
import { Stack } from '@tymate/margaret';
import './pathDraw.css';

const Container = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #20366d;
  color: white;
`;
const PathDraw = () => {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });
  return (
    <div className="App" ref={scrollRef}>
      <div class="fixed_wrapper">
        <div class="fixed_target" id="fixed-target"></div>

        <div
          class="fixed"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#fixed-target"
          style={{ backgroundImage: "url('https://picsum.photos/200/300')" }}
        >
          {' '}
          <h1>HEMZOJDZEIUFHUH</h1>{' '}
        </div>
      </div>
      <Stack
        direction="column"
        alignX="center"
        alignY="center"
        style={{ height: '100vh' }}
        className="scroll"
      >
        <h1>Locomotive Scroll in React</h1>
        <h2>Ima go sideways</h2>
      </Stack>
    </div>
  );
};

export default PathDraw;
