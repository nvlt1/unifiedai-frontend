import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OneIDUnverifiedPage.scss';
import xmarkImg from '../assets/vecteezy_wrong-check-mark-choosing-to-decide-on-something-accept-and_36876060.png';

const OneIDUnverifiedPage = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/login');
  };

  return (
    <div className="unverified-container">
      <img src={xmarkImg} alt="X mark" className="unverified-icon" />
      <h2>Sorry! ONeID is Not Verified.</h2>
      <button className="back-btn" onClick={handleBackToDashboard}>
        Go back to the Dashboard
      </button>
    </div>
  );
};

export default OneIDUnverifiedPage;