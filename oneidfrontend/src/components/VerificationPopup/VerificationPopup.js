import React from 'react';
import './VerificationPopup.scss';

const VerificationPopup = ({ requesterName, onAccept, onDecline }) => {
  return (
    <div className="verification-popup">
      <div className="popup-content">
        <h3>Verification Request</h3>
        <p>{requesterName} has requested verification.</p>
        <div className="popup-actions">
          <button onClick={onAccept} className="accept-btn">Accept</button>
          <button onClick={onDecline} className="decline-btn">Decline</button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPopup;


// import React from 'react';
// import './VerificationPopup.scss';

// const VerificationPopup = ({ onAccept, onDecline, username }) => {
//   return (
//     <div className="verification-popup">
//       <div className="popup-content">
//         <h3>Pending Verification Request</h3>
//         <p>{username} is requesting identity verification.</p>
//         <div className="popup-actions">
//           <button className="accept-btn" onClick={onAccept}>Accept</button>
//           <button className="decline-btn" onClick={onDecline}>Decline</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerificationPopup;
