import React from 'react';
import slider from '../../assets/img/slider.jpg';
import LoginForm from '../../components/login-form';

interface Props {}
interface State {}

const styles = {
  contentHeaderMenuLink: {},
  content: {},
  img: {
    height: '100%',
    width: '100%',
    backgroundColor: '#757575',
  },
};

class Auth extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <div className="auth-layout-container d-flex justify-content-center align-items-center h-100">
        <div className="container">
          <div className="row">
            <div className="slider-container col-sm">
              <img src={slider} alt="slider" style={styles.img} />
            </div>
            <div className="form-container col-sm">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {}
}

export default Auth;
