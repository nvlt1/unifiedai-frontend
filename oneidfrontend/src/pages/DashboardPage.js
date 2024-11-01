import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.scss';

// Import the PNG images
import QualityControlIcon from '../assets/vecteezy_quality-control-check_44450075.png';
import SettingsIcon from '../assets/vecteezy_settings-plan-project_44450059.png';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2>ONeID Services</h2>
      <div className="services">
        <Link to="/verification" className="service-card">
          <div className="service-icon">
            <img src={QualityControlIcon} alt="Verify Identity" />
          </div>
          <p>Verify Identity</p>
        </Link>
        <Link to="/manage-credentials" className="service-card">
          <div className="service-icon">
            <img src={SettingsIcon} alt="Manage Credentials" />
          </div>
          <p>Manage Credentials</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;