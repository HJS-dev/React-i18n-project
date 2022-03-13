import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import  './i18next/i18n'
import App from './App';

ReactDOM.render(
  <Suspense fallback="loading">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);


