import React from 'react';
import styled from 'styled-components';
import { Container, Stack } from '@tymate/margaret';
import Spinner from 'components/Spinner';
import { fontStyles } from 'ui';

const Main = styled(Stack)`
  min-height: 90vh;
`;

const Title = styled.h1`
  ${fontStyles.h1Mega}
`;

const App = () => {
  return (
    <Container>
      <Main size="full" alignX="center" alignY="center" direction="column">
        <Title>Spinner</Title>
        <Spinner />
      </Main>
    </Container>
  );
};

export default App;
