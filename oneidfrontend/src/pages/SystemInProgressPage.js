import React from 'react';
import './SystemInProgressPage.scss';
import gearImage from '../assets/vecteezy_gear-settings-cog_44450069.png';

const SystemInProgressPage = () => {
  return (
    <div className="progress-container">
      <div className="gear-image">
        <img src={gearImage} alt="Gear Icon" />
      </div>
      <h2>System in Progress.</h2>
      <p>This will just take a moment. Feel free to sit back while we work on it.</p>
    </div>
  );
};

export default SystemInProgressPage;