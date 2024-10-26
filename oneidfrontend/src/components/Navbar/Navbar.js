import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/create-id">Create ID</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/verification">Verification</Link>
            <Link to="/share-identity">Share Identity</Link>
        </nav>

    );
};

export default Navbar;