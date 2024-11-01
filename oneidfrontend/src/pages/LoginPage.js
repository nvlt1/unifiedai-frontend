import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/auth'; 
import './LoginPage.scss';
import logo from '../assets/ONeID logo.png';

const LoginPage = () => {
  // Used for testing with hardcoded login credentials
  const [formData, setFormData] = useState({ username: 'testuser', password: 'testpassword' });
  
  // Uncomment this line and comment the above line for actual user input once backend is connected.
  // const [formData, setFormData] = useState({ username: '', password: '' });
  
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for hardcoded credentials first for testing purposes
    if (formData.username === 'testuser' && formData.password === 'testpassword') {
      // Set fake tokens in localStorage for testing, then navigate to dashboard
      localStorage.setItem('accessToken', 'fake-access-token');
      localStorage.setItem('refreshToken', 'fake-refresh-token');
      navigate('/dashboard');
    } else {
      // Uncomment this block once backend is connected for actual API call
      try {
        const response = await api.post('/auth/login', {
          username: formData.username,
          password: formData.password,
          deviceFingerprint: 'string',
        });

        const { accessToken, refreshToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // Set authorization header for future API requests
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        navigate('/dashboard');
      } catch (error) {
        console.error('Login error:', error);
        setError('Login failed. Please try again.');
      }
    }
  };

  // Real API call block for reference (to uncomment once backend is connected)
  /*
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/login', {
        username: formData.username,
        password: formData.password,
        deviceFingerprint: 'string',
      });

      const { accessToken, refreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Set authorization header for future API requests
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };
  */

  return (
    <div className="login-container">
      <img src={logo} alt="ONeID Logo" className="login-logo" />
      <h2>Log in to your account</h2>
      <div className="separator-line"></div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-btn login-page-btn">Log in</button> 
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../utils/auth'; 
// import './LoginPage.scss';
// import logo from '../assets/ONeID logo.png';

// const LoginPage = () => {
//   // used for testing login
//   const [formData, setFormData] = useState({ username: 'testuser', password: 'testpassword' });
//   // const [formData, setFormData] = useState({ username: '', password: '' });
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//         // checks for   hardcoded credentials
//         if (formData.username === 'testuser' && formData.password === 'testpassword') {
//           // Set fake tokens for testing and navigate to dashboard
//           localStorage.setItem('accessToken', 'fake-access-token');
//           localStorage.setItem('refreshToken', 'fake-refresh-token');
//           navigate('/dashboard');
//         } else {
//           try {
//             // move forward with API call if credentials aren't hardcoded
//             const response = await api.post('/auth/login', {
//               username: formData.username,
//               password: formData.password,
//               deviceFingerprint: 'string',
//             });
    
//             const { accessToken, refreshToken } = response.data;
//             localStorage.setItem('accessToken', accessToken);
//             localStorage.setItem('refreshToken', refreshToken);
    
//             navigate('/dashboard');
//           } catch (error) {
//             console.error('Login error:', error);
//             setError('Login failed. Please try again.');
//           }
//         }
//       };

//       // uncomment for regualar testing once connected.------------------
//   //   try {
//   //     const response = await api.post('/auth/login', {
//   //       username: formData.username,
//   //       password: formData.password,
//   //       deviceFingerprint: 'string',
//   //     });

//   //     const { accessToken, refreshToken } = response.data;
//   //     localStorage.setItem('accessToken', accessToken);
//   //     localStorage.setItem('refreshToken', refreshToken);

//   //     navigate('/dashboard');
//   //   } catch (error) {
//   //     console.error('Login error:', error);
//   //     setError('Login failed. Please try again.');
//   //   }
//   // };

//   return (
//     <div className="login-container">
//       <img src={logo} alt="ONeID Logo" className="login-logo" />
//       <h2>Log in to your account</h2>
//       <div className="separator-line"></div>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="login-btn login-page-btn">Log in</button> 
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default LoginPage;



// old login -----------------------------------------------------

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.scss';
// import logo from '../assets/ONeID logo.png';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ 
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: formData.username,
//           password: formData.password,
//           deviceFingerprint: 'string', 
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
//       localStorage.setItem('accessToken', data.accessToken);
//       localStorage.setItem('refreshToken', data.refreshToken);

//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <img src={logo} alt="ONeID Logo" className="login-logo" />
//       <h2>Log in to your account</h2>
//       <div className="separator-line"></div>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="login-btn login-page-btn">Log in</button> 
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default LoginPage;