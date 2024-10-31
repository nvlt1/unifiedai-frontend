import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.scss';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2>ONeID Services</h2>
      <div className="services">
        <Link to="/verification" className="service-card">
          <div className="service-icon">📋</div> {/* Emoji placeholder for Verify Identity */}
          <p>Verify Identity</p>
        </Link>
        <Link to="/manage-credentials" className="service-card">
          <div className="service-icon">🛠️</div> {/* Emoji placeholder for Manage Credentials */}
          <p>Manage Credentials</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;


// import React from 'react';

// const DashboardPage = () => {
//     return <h2>Welcome to the Dashboard!</h2>
// };

// export default DashboardPage;