import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OneIDVerifiedPage.scss';
import checkmarkImg from '../assets/vecteezy_wrong-check-mark-choosing-to-decide-on-something-accept-and_36876089.png';

const OneIDVerifiedPage = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="verified-container">
      <img src={checkmarkImg} alt="Checkmark" className="verified-icon" />
      <h2>Great! ONeID is Verified.</h2>
      <button className="back-btn" onClick={handleBackToDashboard}>
        Go back to the Dashboard
      </button>
    </div>
  );
};

export default OneIDVerifiedPage;