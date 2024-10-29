import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      {/* Left side: Hamburger and App Title */}
      <div className="navbar-left">
        <div className="hamburger" onClick={toggleMenu}>
          ☰ 
        </div>
        <span className="app-title">ONeID</span>
      </div>

      {/* Right side: Search, Log In, and Sign Up */}
      <div className="navbar-right">
        <span className="search-icon">🔍</span>
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
      </div>

      {/* Collapsible menu for mobile view */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        <Link to="/create-id" className="nav-link" onClick={toggleMenu}>Create ID</Link>
        <Link to="/dashboard" className="nav-link" onClick={toggleMenu}>Dashboard</Link>
        <Link to="/settings" className="nav-link" onClick={toggleMenu}>Settings</Link>
        <Link to="/verification" className="nav-link" onClick={toggleMenu}>Verification</Link>
        <Link to="/share-identity" className="nav-link" onClick={toggleMenu}>Share Identity</Link>
      </div>
    </nav>
  );

  // return (
  //   <nav className="navbar">
  //     {/* Left side: Hamburger and App Title */}
  //     <div className="navbar-left">
  //       <div className="hamburger" onClick={toggleMenu}>
  //         ☰ 
  //       </div>
  //       <span className="app-title">ONeID</span>
  //     </div>

  //     {/* Right side: Links and Buttons */}
  //     <div className="navbar-right">
  //       <span className="search-icon">🔍</span>
  //       <button className="login-btn">Log In</button>
  //       <button className="signup-btn">Sign Up</button>
  //     </div>

  //     {/* Collapsible menu for mobile view */}
  //     <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
  //       <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
  //       <Link to="/create-id" className="nav-link" onClick={toggleMenu}>Create ID</Link>
  //       <Link to="/dashboard" className="nav-link" onClick={toggleMenu}>Dashboard</Link>
  //       <Link to="/settings" className="nav-link" onClick={toggleMenu}>Settings</Link>
  //       <Link to="/verification" className="nav-link" onClick={toggleMenu}>Verification</Link>
  //       <Link to="/share-identity" className="nav-link" onClick={toggleMenu}>Share Identity</Link>
  //     </div>
  //   </nav>
  // );
};

export default Navbar;