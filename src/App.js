import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Container, Stack } from '@tymate/margaret';
import { fontStyles } from 'ui';
import { useEffect } from 'react/cjs/react.development';
import { fromEvent, of } from 'rxjs';
import {
  debounceTime,
  map,
  tap,
  distinctUntilChanged,
  filter,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

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

const Card = styled.div`
  border: 1px solid #dedede;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing()};
  width: 100%;
  max-height: 500px;
  overflow: scroll;
`;

const App = () => {
  const api = value => `https://pokeapi.co/api/v2/pokemon/${value}`;
  const inputRef = useRef();
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    fromEvent(inputRef.current, 'keyup')
      .pipe(
        map(e => e?.target?.value.toLowerCase()),
        debounceTime(500),
        distinctUntilChanged(),
        tap(value => setName(value)),
        filter(name => name.length > 0),

        // ? each emission the previous inner observable (the result of the function you supplied)
        // ? is cancelled and the new observable is subscribed
        switchMap(name =>
          ajax.getJSON(api(name)).pipe(catchError(e => of(null))),
        ),
      )
      .subscribe(setResult);
  }, []);

  return (
    <Container>
      <Main size="full" alignX="center" alignY="center" direction="column">
        <Stack
          direction="column"
          gutterSize={1}
          size="full"
          paddingBottom={2}
          style={{ borderBottom: '1px solid #dedede' }}
        >
          <Title>Mon debounce</Title>
          <Input ref={inputRef} name="name" placeholder="Your name" />
          <div>
            Bonjour <b>{name}</b>
          </div>
        </Stack>

        <hr />

        {Boolean(result?.sprites?.front_shiny) && (
          <>
            <Card>
              <Stack direction="column" gutterSize={0.5} alignX="center">
                <Stack alignY="center" gutterSize={1}>
                  <h3>Abra Kadabra! </h3>
                  <img
                    style={{ width: 30 }}
                    src="https://www.pokepedia.fr/images/3/36/Abra-RFVF.png"
                    alt="pokemon"
                  />
                </Stack>
                <Stack>
                  <img src={result?.sprites?.front_default} alt="pokemon" />
                  <img src={result?.sprites?.front_shiny} alt="pokemon" />
                </Stack>
              </Stack>

              <ol>
                {(result?.moves ?? []).map(({ move }, index) => (
                  <li> {move?.name}</li>
                ))}
              </ol>
            </Card>
          </>
        )}
      </Main>
    </Container>
  );
};

export default App;
