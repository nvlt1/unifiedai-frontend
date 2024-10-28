import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <Link to="/">Home</Link>
//             <Link to="/create-id">Create ID</Link>
//             <Link to="/dashboard">Dashboard</Link>
//             <Link to="/settings">Settings</Link>
//             <Link to="/verification">Verification</Link>
//             <Link to="/share-identity">Share Identity</Link>
//         </nav>

//     );
// };

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <span className="app-title">ONeID</span>
        </div>
        <div className="navbar-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create-id" className="nav-link">Create ID</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/settings" className="nav-link">Settings</Link>
          <Link to="/verification" className="nav-link">Verification</Link>
          <Link to="/share-identity" className="nav-link">Share Identity</Link>
          <span className="search-icon">🔍</span>
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>
    );
  };

export default Navbar;