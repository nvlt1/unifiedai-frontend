import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.scss';
import QualityControlIcon from '../assets/vecteezy_quality-control-check_44450075.png';
import SettingsIcon from '../assets/vecteezy_settings-plan-project_44450059.png';
import api from '../utils/auth';
import VerificationPopup from '../components/VerificationPopup/VerificationPopup';

const DashboardPage = () => {
  const [hasVerificationRequest, setHasVerificationRequest] = useState(false);
  const [requestingUsername, setRequestingUsername] = useState('');

  useEffect(() => {
    // Poll for active verification requests every 10 seconds
    const interval = setInterval(async () => {
      try {
        const response = await api.get('/verification/active');
        if (response.data.active) {
          setHasVerificationRequest(true);
          setRequestingUsername(response.data.username);
        } else {
          setHasVerificationRequest(false);
        }
      } catch (error) {
        console.error('Error checking active verification:', error);
      }
    }, 10000); // interval 10 seconds

    return () => clearInterval(interval); 
  }, []);

  const handleAccept = async () => {
    try {
      await api.post('/verification/update', { status: 'accept' });
      alert('Verification accepted.');
      setHasVerificationRequest(false);
    } catch (error) {
      console.error('Error accepting verification:', error);
      alert('Failed to accept verification.');
    }
  };

  const handleDecline = async () => {
    try {
      await api.post('/verification/update', { status: 'decline' });
      alert('Verification declined.');
      setHasVerificationRequest(false);
    } catch (error) {
      console.error('Error declining verification:', error);
      alert('Failed to decline verification.');
    }
  };

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
      
      {/* //renders verification popup if any active request is found */}
      {hasVerificationRequest && (
        <VerificationPopup
          onAccept={handleAccept}
          onDecline={handleDecline}
          username={requestingUsername}
        />
      )}
    </div>
  );
};

export default DashboardPage;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './DashboardPage.scss';
// import QualityControlIcon from '../assets/vecteezy_quality-control-check_44450075.png';
// import SettingsIcon from '../assets/vecteezy_settings-plan-project_44450059.png';
// import api from '../utils/auth';
// import VerificationPopup from '../components/VerificationPopup/VerificationPopup';

// const DashboardPage = () => {
//   const [hasVerificationRequest, setHasVerificationRequest] = useState(false);
//   const [requestingUsername, setRequestingUsername] = useState('');

//   useEffect(() => {
//     // Poll for active verification requests every 10 seconds
//     const interval = setInterval(async () => {
//       try {
//         const response = await api.get('/verification/active');
//         if (response.data.active) {
//           setHasVerificationRequest(true);
//           setRequestingUsername(response.data.username);
//         } else {
//           setHasVerificationRequest(false);
//         }
//       } catch (error) {
//         console.error('Error checking active verification:', error);
//       }
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleAccept = async () => {
//     try {
//       await api.post('/verification/update', { status: 'accept' });
//       alert('Verification accepted.');
//       setHasVerificationRequest(false);
//     } catch (error) {
//       console.error('Error accepting verification:', error);
//       alert('Failed to accept verification.');
//     }
//   };

//   const handleDecline = async () => {
//     try {
//       await api.post('/verification/update', { status: 'decline' });
//       alert('Verification declined.');
//       setHasVerificationRequest(false);
//     } catch (error) {
//       console.error('Error declining verification:', error);
//       alert('Failed to decline verification.');
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>ONeID Services</h2>
//       <div className="services">
//         <Link to="/verification" className="service-card">
//           <div className="service-icon">
//             <img src={QualityControlIcon} alt="Verify Identity" />
//           </div>
//           <p>Verify Identity</p>
//         </Link>
//         <Link to="/manage-credentials" className="service-card">
//           <div className="service-icon">
//             <img src={SettingsIcon} alt="Manage Credentials" />
//           </div>
//           <p>Manage Credentials</p>
//         </Link>
//       </div>
      
//       // rendersverification popup if any active request are showing in the backend
//       {hasVerificationRequest && (
//         <VerificationPopup
//           onAccept={handleAccept}
//           onDecline={handleDecline}
//           username={requestingUsername}
//         />
//       )}
//     </div>
//   );
// };

// export default DashboardPage;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './DashboardPage.scss';

// import QualityControlIcon from '../assets/vecteezy_quality-control-check_44450075.png';
// import SettingsIcon from '../assets/vecteezy_settings-plan-project_44450059.png';

// const DashboardPage = () => {
//   return (
//     <div className="dashboard-container">
//       <h2>ONeID Services</h2>
//       <div className="services">
//         <Link to="/verification" className="service-card">
//           <div className="service-icon">
//             <img src={QualityControlIcon} alt="Verify Identity" />
//           </div>
//           <p>Verify Identity</p>
//         </Link>
//         <Link to="/manage-credentials" className="service-card">
//           <div className="service-icon">
//             <img src={SettingsIcon} alt="Manage Credentials" />
//           </div>
//           <p>Manage Credentials</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;