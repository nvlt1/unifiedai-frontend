import React from 'react';
import './Error404Page.scss';
import errorImage from '../assets/vecteezy_404-error-illustration-3d_10988393.png';

const Error404Page = () => {
  return (
    <div className="error-container">
      <div className="error-image">
        <img src={errorImage} alt="404 Error Icon" />
      </div>
      <h2>We're sorry, but it looks like the page you're looking for doesn't exist.</h2>
    </div>
  );
};

export default Error404Page;