import React, { CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';

const styles = {
  error: {
    color: '#5a5c69',
    fontSize: '7rem',
    position: 'relative',
    lineHeight: 1,
    width: '12.5rem',
  } as CSSProperties,
};

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <>
      <p>
        <h5>
          No match for <code>{location.pathname}</code>
        </h5>
      </p>
      <div className="container-fluid">
        <div className="text-center mt-5">
          <div className="mx-auto" style={styles.error} data-text="404">
            <p className="m-0">404</p>
          </div>
          <p className="text-dark mb-5 lead">Page Not Found</p>
          <p className="text-black-50 mb-0">
            It looks like you found a glitch in the matrix...
          </p>
          <Link to="/">← Back to Dashboard</Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
