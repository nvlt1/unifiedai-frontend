import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OneIDVerifiedPage.scss';

const OneIDVerifiedPage = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="verified-container">
      <div className="verified-icon">✅</div> {/* Emoji placeholder for checkmark */}
      <h2>Great! ONeID is Verified.</h2>
      <button className="back-btn" onClick={handleBackToDashboard}>
        Go back to the Dashboard
      </button>
    </div>
  );
};

export default OneIDVerifiedPage;