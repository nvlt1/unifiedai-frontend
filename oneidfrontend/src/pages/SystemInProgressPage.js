import React from 'react';
import './SystemInProgressPage.scss';

const SystemInProgressPage = () => {
  return (
    <div className="progress-container">
      <div className="gear-placeholder">
        {/* Placeholder for gear icon */}
        <div className="emoji">⚙️</div>
      </div>
      <h2>System in Progress.</h2>
      <p>This will just take a moment. Feel free to sit back while we work on it.</p>
    </div>
  );
};

export default SystemInProgressPage;
