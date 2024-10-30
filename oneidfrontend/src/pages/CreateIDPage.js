import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateIDPage.scss';

const CreateIDPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, the API call
    console.log('Form submitted:', formData);

    // On success navigate to CreateIDPage2
    navigate('/create-id-2');
  };

  return (
    <div className="create-id-container">
      <h2>Create Your OneID</h2>
      <form className="create-id-form" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          name="dob"
          id="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn">
          Create Your ONeID
        </button>
      </form>
    </div>
  );
};

export default CreateIDPage;