import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { MargaretProvider } from '@tymate/margaret';
import { theme, fontStyles } from 'ui';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.text}
    ${fontStyles.body}
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div />}>
      <MargaretProvider theme={theme}>
        <GlobalStyles />
        <App />
      </MargaretProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

reportWebVitals();
