import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const LoadingButton = (props) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        props.endLoading();
      });
    }
  }, [isLoading, props]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : undefined}
    >
      {isLoading ? 'Loading…' : 'Submit'}
    </Button>
  );
};

LoadingButton.propTypes = {
  endLoading: PropTypes.func.isRequired,
};

export default LoadingButton;
