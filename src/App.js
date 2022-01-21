import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Container, Stack } from '@tymate/margaret';
import { fontStyles } from 'ui';
import { fromEvent } from 'rxjs';
import { useEffect } from 'react/cjs/react.development';
import { debounceTime, map, tap, distinctUntilChanged } from 'rxjs/operators';

const Main = styled(Stack)`
  min-height: 90vh;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  ${fontStyles.h1Mega}
`;

const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
`;

const App = () => {
  const inputRef = useRef();
  const [name, setName] = useState('');

  useEffect(() => {
    fromEvent(inputRef.current, 'keyup')
      .pipe(
        map(e => e?.target?.value),
        debounceTime(500),
        distinctUntilChanged(),
        tap(value => setName(value)),
      )
      .subscribe(x => console.log(x));
  }, []);

  return (
    <Container>
      <Main size="full" alignX="center" alignY="center" direction="column">
        <Stack direction="column" gutterSize={1} size="full">
          <Title>Mon debounce</Title>
          <Input ref={inputRef} name="name" placeholder="Your name" />
          <div>
            Bonjour <b>{name}</b>
          </div>
        </Stack>
      </Main>
    </Container>
  );
};

export default App;
