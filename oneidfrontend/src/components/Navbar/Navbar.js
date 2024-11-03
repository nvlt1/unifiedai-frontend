import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/smallbluelogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <img src={logo} alt="ONeID Logo" className="navbar-logo" />
        <span className="app-title">ONeID</span>
      </div>

      <div className="navbar-right">
        <span className="search-icon">🔍</span>
        <Link to="/login" className="login-btn">Log In</Link>
        <button className="signup-btn">Sign Up</button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-item">Your Email Address</div>
        <div className="menu-item">Name</div>
        <div className="menu-item">Identity Status: Verified</div>
        
        <button className="menu-button">Verify Identity</button>
        <button className="menu-button">Manage Credentials</button>

        <button className="logout-button" onClick={toggleMenu}>Log out</button>
      </div>
    </nav>
  );
};

export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.scss';
// import logo from '../../assets/smallbluelogo.png';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(prevState => !prevState);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="hamburger" onClick={toggleMenu}>
//           ☰
//         </div>
//         <img src={logo} alt="ONeID Logo" className="navbar-logo" />
//         <span className="app-title">ONeID</span>
//       </div>

//       <div className="navbar-right">
//         <span className="search-icon">🔍</span>
//         <Link to="/login" className="login-btn">Log In</Link>
//         <button className="signup-btn">Sign Up</button>
//       </div>

//       <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
//         <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
//         <Link to="/dashboard" className="nav-link" onClick={toggleMenu}>Dashboard</Link>
//         <Link to="/settings" className="nav-link" onClick={toggleMenu}>Settings</Link>
//         <Link to="/verification" className="nav-link" onClick={toggleMenu}>Verification</Link>
//         <Link to="/share-identity" className="nav-link" onClick={toggleMenu}>Share Identity</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;