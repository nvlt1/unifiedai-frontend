import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateIDPage.scss';

const CreateIDPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    dob: '',
    deviceFingerprint: Math.random().toString(36).substring(2, 15) // Temporary placeholder for device fingerprint
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the API call to register the user
      const response = await axios.post('/api/auth/register', formData);
      alert('Registration successful! Please check your email for verification.');
      // Navigate to the next step
      navigate('/create-id-2');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
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
        
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
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
        
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
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


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CreateIDPage.scss';

// const CreateIDPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     dob: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here, the API calls here
//     console.log('Form submitted:', formData);

//     navigate('/create-id-2');
//   };

//   return (
//     <div className="create-id-container">
//       <h2>Create Your OneID</h2>
//       <form className="create-id-form" onSubmit={handleSubmit}>
//         <label htmlFor="fullName">Full Name</label>
//         <input
//           type="text"
//           name="fullName"
//           id="fullName"
//           placeholder="Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="email">Email Address</label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="dob">Date of Birth</label>
//         <input
//           type="date"
//           name="dob"
//           id="dob"
//           placeholder="Date of Birth"
//           value={formData.dob}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="submit-btn">
//           Create Your ONeID
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateIDPage;