import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateIDPage.scss';

const CreateIDPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize the navigation hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., API call
    console.log('Form submitted:', formData);
    
    // On successful submission, navigate to CreateIDPage2
    navigate('/create-id-2');
  };

  return (
    <div className="create-id-container">
      <h2>Create Your OneID</h2>
      <form className="create-id-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn">
          Create Your OneID
        </button>
      </form>
    </div>
  );
};

export default CreateIDPage;


// import React, { useState } from 'react';
// import './CreateIDPage.scss';

// const CreateIDPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
    
//   };

//   return (
//     <div className="create-id-container">
//       <h2>Create Your OneID</h2>
//       <form className="create-id-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="submit-btn">
//           Create Your OneID
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateIDPage;
