import React, { useState } from 'react';
import './LoginPage.scss';
import logo from '../assets/ONeID logo.png';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className="login-container">
      <img src={logo} alt="ONeID Logo" className="login-logo" />
      <h2>Log in to your account</h2>
      <div className="separator-line"></div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Username</label>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-btn login-page-btn">Log in</button> 
      </form>
    </div>
  );
};

export default LoginPage;