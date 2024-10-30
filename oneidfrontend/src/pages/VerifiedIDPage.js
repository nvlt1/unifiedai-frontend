import React from 'react';
import './VerifiedIDPage.scss';
import trophyImage from '../assets/vecteezy_trophy-award-winner_44450093.png';

const VerifiedIDPage = () => {
  return (
    <div className="verified-id-container">
      <div className="trophy-image">
        <img src={trophyImage} alt="Trophy Icon" />
      </div>
      <h2>Congratulations! Your ONeID is verified.</h2>
      <p>Please log in to your account with your email address.</p>
      <button className="check-email-btn">Go check your email!</button>
    </div>
  );
};

export default VerifiedIDPage;