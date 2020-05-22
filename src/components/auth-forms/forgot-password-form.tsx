import React from 'react';
import Button from '../custom-buttons/button';
import { Link, useLocation, useHistory } from 'react-router-dom';

interface Props {}

const ForgotPasswordForm = (props: Props): JSX.Element => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || {
    from: { pathname: '/auth/reset-password' },
  };

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
          <Button endLoading={onEndLoading} />
        </div>
      </form>
      <div className="dropdown-divider"></div>
      <Link className="nav-link" to="/auth">
        Back
      </Link>
    </>
  );
};

export default ForgotPasswordForm;
