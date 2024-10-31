import React, { useState } from 'react';
import './VerifyIdentityPage.scss';
import logo from '../assets/ONeID logo.png';

const VerifyIdentityPage = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Verification sent to:', email);
  };

  return (
    <div className="verify-identity-container">
      <img src={logo} alt="ONeID Logo" className="verify-logo" />
      <h2>Verify Identity</h2>
      <div className="line-separator"></div>
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
        <button type="submit" className="verify-btn">Send the verification</button>
      </form>
    </div>
  );
};

export default VerifyIdentityPage;