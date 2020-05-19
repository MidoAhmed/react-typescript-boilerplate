import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = false;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: rest.redirectPath,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
