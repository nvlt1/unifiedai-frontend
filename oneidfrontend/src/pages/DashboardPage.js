import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.scss';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2>ONeID Services</h2>
      <div className="services">
        <Link to="/verification" className="service-card">
          <div className="service-icon">📋</div>
          <p>Verify Identity</p>
        </Link>
        <Link to="/manage-credentials" className="service-card">
          <div className="service-icon">🛠️</div> 
          <p>Manage Credentials</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;