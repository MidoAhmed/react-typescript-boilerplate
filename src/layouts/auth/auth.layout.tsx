import React from 'react';
import slider from '../../assets/img/slider.jpg';
import LoginForm from '../../components/auth-forms/login-form';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import ForgotPasswordForm from '../../components/auth-forms/forgot-password-form';
import ResetPasswordForm from '../../components/auth-forms/reset-password-form';

interface Props {}

const styles = {
  contentHeaderMenuLink: {},
  content: {},
  img: {
    height: '100%',
    width: '100%',
    backgroundColor: '#757575',
  },
};

const Auth = () => {
  const { path } = useRouteMatch();

  return (
    <div className="auth-layout-container d-flex justify-content-center align-items-center h-100">
      <div className="container">
        <div className="row">
          <div className="slider-container col-sm">
            <img src={slider} alt="slider" style={styles.img} />
          </div>
          <div className="form-container col-sm">
            <Switch>
              <Route exact path={path}>
                <LoginForm />
              </Route>
              <Route path={`${path}/forgot-password`}>
                <ForgotPasswordForm />
              </Route>
              <Route path={`${path}/reset-password`}>
                <ResetPasswordForm />
              </Route>
              <Route path="*">
                <Redirect to="/auth"/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
