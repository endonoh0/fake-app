import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import App from './App';

import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
