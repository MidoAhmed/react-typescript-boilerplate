import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/index.scss';
import Main from './layouts/main/main.layout';
import Auth from './layouts/auth/auth.layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from './views/not-found-page';
import PrivateRoute from './components/private-route/private-route';

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
