import React from 'react';
import LoadingButton from '../custom-buttons/loading-button';
import { Link, useLocation, useHistory } from 'react-router-dom';

interface Props {}

const LoginForm = (props: Props): JSX.Element => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };

  const onEndLoading = () => {
    history.replace(from);
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <div className="form-group">
          <LoadingButton endLoading={onEndLoading} />
        </div>
      </form>
      <div className="dropdown-divider"></div>
      <Link className="nav-link" to="/auth/forgot-password">
        Forgot password?
      </Link>
    </>
  );
};

export default LoginForm;
