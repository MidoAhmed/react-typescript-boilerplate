import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import Main from './layouts/main/main';
import Auth from './layouts/auth/auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from './components/not-found-page';
import PrivateRoute from './components/private-route';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <PrivateRoute path="/dashboard" redirectPath="/auth">
          <Main />
        </PrivateRoute>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
