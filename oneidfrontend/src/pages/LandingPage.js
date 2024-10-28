import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';
// import backgroundImage from '../../assets/background.png'; get the image and plug it into assets folder eventually


const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="intro-section">
                <h1 className="main-heading">OneID New Experience</h1>
                <p className="sub-heading">UnifiedAI Technological Solutions</p>
                <Link to="/create-id" className="create-id-button">
                    Create Your OneID
                </Link>
            </div>
            <div className="service-intro">
                <h2>Short service introductions here</h2>
                <p>Step by Step</p>
            </div>
            <footer className="footer">
                <p>End Footnote</p>
            </footer>
        </div>
    );
};



// const LandingPage = () => {
//     return (
//         <div className="landing-container">
            
//             <h1 className="main-heading">OneID New Experience</h1>
//             <p className="sub-heading">UnifiedAI Technological Solutions</p>
//             <Link to="/create-id" className="create-id-button">
//             Create Your OneID
//             </Link>
//             <div className="service-intro">
//                 <h2>Short service introductions here</h2>
//                 <p>Step by Step</p>
//             </div>
//             <footer className="footer">
//                 <p>End Footnote</p>
//             </footer>
//         </div>
//     );
// };

export default LandingPage;