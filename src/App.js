import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Stack } from '@tymate/margaret';
import { fontStyles } from 'ui';
import Toys from 'components/Toys';

const Main = styled(Stack)`
  min-height: 90vh;
`;

const Title = styled.h1`
  ${fontStyles.h1Mega}
  color: #20366d;
`;
const Subtitle = styled.p`
  color: #20366d;
  font-weight: 700;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid;
  width: 50px;
`;

const App = () => {
  const [percentage, setPercentage] = useState(94);
  return (
    <Container>
      <Stack direction="column" alignX="center" paddingVertical={2}>
        <Title> Dimanche 31 octobre 2021 </Title>
        <Subtitle>
          Objectif atteint à{' '}
          <Input
            onChange={e => {
              setPercentage(e.target.value);
            }}
            value={percentage}
          />
          %
        </Subtitle>
      </Stack>
      <Stack alignX="center">
        <Toys percentage={percentage} />
      </Stack>
    </Container>
  );
};

export default App;
