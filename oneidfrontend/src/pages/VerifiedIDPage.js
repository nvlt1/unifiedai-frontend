import React from 'react';
import './VerifiedIDPage.scss';

const VerifiedIDPage = () => {
  return (
    <div className="verified-id-container">
      <div className="trophy-placeholder">
        {/* Placeholder for trophy icon */}
        <div className="emoji">🏆</div>
      </div>
      <h2>Congratulations! Your ONeID is verified.</h2>
      <p>Please log in to your account with your email address.</p>
      <button className="check-email-btn">Go check your email!</button>
    </div>
  );
};

export default VerifiedIDPage;
