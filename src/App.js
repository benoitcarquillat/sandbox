import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Stack } from '@tymate/margaret';

const Main = styled(Stack)`
  min-height: 90vh;
`;

const App = () => {
  const [color, setColor] = useState('');
  const [result, setResult] = useState([]);
  const scope = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  function HEXtoHSL(hex, scope) {
    hex = hex.replace(/#/g, '');
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map(function (hex) {
          return hex + hex;
        })
        .join('');
    }
    var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(
      hex,
    );
    if (!result) {
      return null;
    }
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    // eslint-disable-next-line no-unused-expressions
    (r /= 255), (g /= 255), (b /= 255);
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h,
      s,
      l = (max + min) / 2;
    if (max == min) {
      h = s = 0;
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      // eslint-disable-next-line default-case
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    if (!Boolean(scope)) {
      return {
        h: h,
        s: s,
        l: l,
        currentL: l,
      };
    }

    const percentage = ((scope - 50) * 100) / (900 - 50);
    const lRanged = 10 + ((90 - 10) * percentage) / 100;

    return {
      h: h,
      s: s,
      l: Math.round(lRanged),
      currentL: l,
    };
  }

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0'); // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const handleColorGenerator = () => {
    // Get HSL array
    let hslResult = [];
    scope.forEach((key, index) => {
      hslResult = [...hslResult, HEXtoHSL(color, key)];
    });

    // replace closest HSL value
    const { currentL } = HEXtoHSL(color);
    const closest = hslResult.reduce((a, b, index) => {
      return Math.abs(b.l - currentL) < Math.abs(a.l - currentL) ? b : a;
    });
    const closestId = hslResult.findIndex(value => value.l === closest.l);
    hslResult[closestId] = HEXtoHSL(color);

    // convert hsl to hexa value and return result
    setResult([]);
    hslResult.forEach(hslColor => {
      const { h, s, l } = hslColor;
      setResult(array => {
        return [...array, { value: hslToHex(h, s, l), isActive: false }];
      });
    });

    return result;
  };

  return (
    <Container>
      <Main size="full" alignX="center" alignY="center" direction="column">
        <Stack direction="column" gutterSize={1}>
          <h1> Color hexa:</h1>
          <input value={color} onChange={e => setColor(e.target.value)} />
          <button onClick={handleColorGenerator}>Click me</button>

          <Stack gutterSize={0.5} mgt={1}>
            {(result ?? []).map((color, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: color.value,
                  height: '200px',
                  width: '40px',
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Main>
    </Container>
  );
};

export default App;
