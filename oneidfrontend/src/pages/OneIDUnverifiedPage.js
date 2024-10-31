import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OneIDUnverifiedPage.scss';

const OneIDUnverifiedPage = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="unverified-container">
      <div className="unverified-icon">❌</div> {/* Emoji placeholder for cross */}
      <h2>Sorry! ONeID is Not Verified.</h2>
      <button className="back-btn" onClick={handleBackToDashboard}>
        Go back to the Dashboard
      </button>
    </div>
  );
};

export default OneIDUnverifiedPage;