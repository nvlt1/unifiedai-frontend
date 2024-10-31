import React from 'react';
import './OneTimePasscodePage.scss';

const OneTimePasscodePage = () => {
  return (
    <div className="otp-container">
      <div className="otp-icon">⏳</div> {/* Emoji placeholder for hourglass */}
      <h2>We sent you the one-time passcode.</h2>
      <p>Please check your email to verify the identity.</p>
      <button className="otp-btn">05:00</button>
    </div>
  );
};

export default OneTimePasscodePage;
