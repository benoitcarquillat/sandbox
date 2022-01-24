import React, { useRef } from 'react';
import { Container, Stack } from '@tymate/margaret';
import { useEffect } from 'react/cjs/react.development';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, map, tap, filter, buffer } from 'rxjs/operators';
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 50px;
`;

const App = () => {
  const prev = useRef();
  const next = useRef();

  useEffect(() => {
    const keyUp$ = fromEvent(document, 'keyup');
    const prev$ = fromEvent(prev.current, 'click');
    const next$ = fromEvent(next.current, 'click');

    const ArrowLeft$ = keyUp$.pipe(filter(e => e.keyCode === 37));
    const ArrowRight$ = keyUp$.pipe(filter(e => e.keyCode === 39));

    const clickKeyPrev$ = merge(ArrowLeft$, prev$);
    const clickKeyNext$ = merge(ArrowRight$, next$);

    // click or key press
    clickKeyPrev$.pipe(tap(_ => console.log('prev'))).subscribe();

    // ---------------------------------- NEXT BUTTON ------------------------------------------------------//
    clickKeyNext$
      .pipe(
        buffer(clickKeyNext$.pipe(debounceTime(250))),
        map(e => e.length),
      )
      .subscribe(console.log);
  }, []);

  return (
    <div style={{ backgroundColor: '#7badff', height: '100vh' }}>
      <Container>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1bc1ec37816529.574d926d09a38.png"
          alt=""
          style={{ maxWidth: '100%' }}
        />
        <Stack gutterSize={1} marginTop={4}>
          <div ref={prev} variant="primary">
            <Button>Précédent</Button>
          </div>
          <div ref={next} variant="secondary">
            <Button>Suivant</Button>
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default App;
