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
      <div className="navbar-left">
        <span className="app-title">ONeID</span>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰ 
      </div>

      {/* Collapsible menu */}
      <div className={`navbar-right ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        <Link to="/create-id" className="nav-link" onClick={toggleMenu}>Create ID</Link>
        <Link to="/dashboard" className="nav-link" onClick={toggleMenu}>Dashboard</Link>
        <Link to="/settings" className="nav-link" onClick={toggleMenu}>Settings</Link>
        <Link to="/verification" className="nav-link" onClick={toggleMenu}>Verification</Link>
        <Link to="/share-identity" className="nav-link" onClick={toggleMenu}>Share Identity</Link>
        <span className="search-icon">🔍</span>
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.scss';


// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen)
//     };

//     return (
//       <nav className="navbar">
//         <div className="navbar-left">
//           <span className="app-title">ONeID</span>
//         </div>
//         <div className="hamburger" onClick={toggleMenu}>
//             ☰
//         </div>
//         <div className={`navbar-right ${isMenuOpen ? 'open' : ''}`}>
//           <Link to="/" className="nav-link">Home</Link>
//           <Link to="/create-id" className="nav-link">Create ID</Link>
//           <Link to="/dashboard" className="nav-link">Dashboard</Link>
//           <Link to="/settings" className="nav-link">Settings</Link>
//           <Link to="/verification" className="nav-link">Verification</Link>
//           <Link to="/share-identity" className="nav-link">Share Identity</Link>
//           <span className="search-icon">🔍</span>
//           <button className="login-btn">Log In</button>
//           <button className="signup-btn">Sign Up</button>
//         </div>
//       </nav>
//     );
//   };



//   // const Navbar = () => {
// //     return (
// //         <nav className="navbar">
// //             <Link to="/">Home</Link>
// //             <Link to="/create-id">Create ID</Link>
// //             <Link to="/dashboard">Dashboard</Link>
// //             <Link to="/settings">Settings</Link>
// //             <Link to="/verification">Verification</Link>
// //             <Link to="/share-identity">Share Identity</Link>
// //         </nav>

// //     );
// // };

// export default Navbar;