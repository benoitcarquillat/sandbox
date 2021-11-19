import React from 'react';
import styled from 'styled-components';
import { Container, Stack } from '@tymate/margaret';
import { fontStyles } from 'ui';
import Header from 'components/Header';
import Card from 'components/Card';
import { useEffect } from 'react/cjs/react.development';
import EventBus, { actions } from 'utils/Evenbus';

const Main = styled(Stack)`
  min-height: 90vh;
`;

const Title = styled.h1`
  ${fontStyles.h1}
`;

const App = () => {
  useEffect(() => {
    EventBus.on(actions.ADD_PRODUCT, payload => {
      console.log('app:', payload);
    });
  }, []);

  return (
    <Stack direction="column" size="full" gutterSize={2}>
      <Header />
      <Container>
        <Title> Eviter le Props forage (drilling) </Title>
        <Stack marginTop={2}>
          <div style={{ flexBasis: '33.33%' }}>
            <Card />
          </div>
        </Stack>
      </Container>
    </Stack>
  );
};

export default App;
