import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
