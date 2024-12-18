import React, { useState } from 'react';
import api from '../utils/auth'; 
import './VerifyIdentityPage.scss';
import logo from '../assets/ONeID logo.png';

const VerifyIdentityPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userRequesterId = 1; // placeholder user id

    try {
      await api.post('/api/verification/request', {
        userRequesterId,
        userRequestedEmail: email,
      });
      setMessage('Verification request has been sent.');
    } catch (error) {
      console.error('Error sending verification request:', error);
      setMessage('Failed to send verification request. Please try again.');
    }
  };

  return (
    <div className="verify-identity-container">
      <img src={logo} alt="ONeID Logo" className="verify-logo" />
      <h2>Request Verification</h2>
      <form className="verify-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="verify-btn">Request Verification</button>
      </form>
      {message && <p className="verification-message">{message}</p>}
    </div>
  );
};

export default VerifyIdentityPage;



// import React, { useState } from 'react';
// import api from '../utils/auth'; 
// import './VerifyIdentityPage.scss';
// import logo from '../assets/ONeID logo.png';

// const VerifyIdentityPage = () => {
//   const [email, setEmail] = useState(''); // store email for usre
//   const [message, setMessage] = useState('');// store success/error msg displayed to user

//   // email state update 
//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   // handler submission for verification form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // sending verification request to the backend
//       await api.post('/auth/verify', { email });
//       setMessage('Verification link has been sent to your email.');
//     } catch (error) {
//       console.error('Error sending verification link:', error);
//       setMessage('Failed to send verification link. Please try again.');
//     }
//   };

//   return (
//     <div className="verify-identity-container">
//       <img src={logo} alt="ONeID Logo" className="verify-logo" />
//       <h2>Verify Identity</h2>
//       <div className="line-separator"></div>
//       <form className="verify-form" onSubmit={handleSubmit}>
//         <label htmlFor="email">Email address</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email address"
//           value={email}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="verify-btn">Send the verification</button>
//       </form>
//       {message && <p className="verification-message">{message}</p>}
//     </div>
//   );
// };

// export default VerifyIdentityPage;