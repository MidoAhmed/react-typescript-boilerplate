import React, { useState, useEffect } from 'react';
import { Button as RBButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const Button = (props) => {
  const [isLoading, setLoading] = useState(false);
  const text = props.children || 'Submit';

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        props.endLoading();
      });
    }
  }, [isLoading, props]);

  /**
   * TODO: need refactoring
   * @param event
   */
  // const handleClick = () => setLoading(true);
  const handleClick = (event) =>
    props.onClickHandler ? props.onClickHandler(event) : setLoading(true);

  return (
    <RBButton
      variant={props.variant || 'primary'}
      disabled={isLoading || props.loading || props.disabled}
      onClick={!isLoading ? handleClick : undefined}
    >
      {isLoading || props.loading ? 'Loading…' : text}
    </RBButton>
  );
};
Button.propTypes = {
  endLoading: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  loading: PropTypes.bool,
  variant: PropTypes.string,
  onClickHandler: PropTypes.func,
};

export default Button;
