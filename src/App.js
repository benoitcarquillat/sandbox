import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
// import { Container, Stack } from '@tymate/margaret'; // todo learn margaret
import Home from 'containers/home';
import { Routes, Route, Link, useNavigate, Redirect } from 'react-router-dom';
import { AppContext } from 'context';
import locomotiveScroll from 'locomotive-scroll';

const App = () => {
  const { test } = useContext(AppContext);
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });

  return (
    <div className="App">
      <div
        style={{ padding: '200px 0 200vh' }}
        className="scroll"
        ref={scrollRef}
      >
        <h1 data-scroll data-scroll-speed="3" data-scroll-position="top">
          Locomotive Scroll in React
        </h1>
        <h2
          data-scroll
          data-scroll-speed="2"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
        >
          Ima go sideways
        </h2>
      </div>
    </div>
  );
};

export default App;
