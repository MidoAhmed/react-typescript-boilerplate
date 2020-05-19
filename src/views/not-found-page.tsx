import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <h5>
          No match for <code>{location.pathname}</code>
        </h5>
      </div>
      <div>
        <h2>Page Not Found</h2>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
