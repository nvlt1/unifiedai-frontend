import React from 'react';
import './OneTimePasscodePage.scss';
import hourglassImg from '../assets/vecteezy_3d-animated-hourglass-isolated-on-a-transparent-background_51099134.png';

const OneTimePasscodePage = () => {
  return (
    <div className="otp-container">
      <img src={hourglassImg} alt="Hourglass" className="otp-icon" />
      <h2>We sent you the one-time passcode.</h2>
      <p>Please check your email to verify the identity.</p>
      <button className="otp-btn">05:00</button>
    </div>
  );
};

export default OneTimePasscodePage;