import React from 'react';
import LoadingButton from '../custom-buttons/loading-button';
import { Link, useLocation, useHistory } from 'react-router-dom';

interface Props {}

const ResetPasswordForm = (props: Props): JSX.Element => {

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: '/auth' } };

    const onEndLoading = () => {
      history.replace(from);
    };

  return (
    <>
        <form>
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label htmlFor="inputConfirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="inputConfirmPassword" placeholder="Confirm Password"/>
            </div>
            <div className="form-group">
                <LoadingButton endLoading={onEndLoading}/>
            </div>
        </form>
        <div className="dropdown-divider"></div>
        <Link className="nav-link" to="/auth/forgot-password">Back</Link>
    </>
  );
};

export default ResetPasswordForm;
