import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import Main from './layouts/main/main';
import Auth from './layouts/auth/auth';

ReactDOM.render(
  <React.StrictMode>
    <Auth />
  </React.StrictMode>,
  document.getElementById('root')
);
