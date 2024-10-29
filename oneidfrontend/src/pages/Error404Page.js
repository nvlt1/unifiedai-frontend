import React from 'react';
import './Error404Page.scss';

const Error404Page = () => {
  return (
    <div className="error-container">
      <div className="hat-placeholder">
        {/* Placeholder for 404 icon */}
        <div className="emoji">🚫</div>
      </div>
      <h2>We're sorry, but it looks like the page you're looking for doesn't exist.</h2>
    </div>
  );
};

export default Error404Page;
