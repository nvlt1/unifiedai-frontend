import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div clsasName="landing-container">
            <h1>Welcome to OneID</h1>
            <p>UnifiedAI Technological Solutions offers a seamless identity management platform</p>
            <Link to="/create-id" className="create-id-button">
            Create Your OneID
            </Link>
        </div>
    );
};

export default LandingPage;