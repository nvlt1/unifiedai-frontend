import axios from 'axios';

// Create an instance of axios
const api = axios.create({
  baseURL: '/api', // Adjust the base URL as necessary
});

// Function to refresh access token
export const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await api.post('/auth/refresh', { refreshToken });
    
    if (response.status === 200) {
      const { accessToken, refreshToken: newRefreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      return accessToken;
    } else {
      throw new Error('Token refresh failed');
    }
  } catch (error) {
    console.error('Refresh token error:', error);
    return null;
  }
};

// Axios interceptor to handle token refreshing
api.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent infinite retry loop

      // Attempt to refresh the token
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        // Set the new access token on the original request
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default api;


// import axios from 'axios';

// // this function refreshes access tokens upon expiry
// // retrieves refresh token from localstorage, makes req to endpoint with refreshtoken, 
// // updates both access and refresh tokens in localstorage.
// export const refreshToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem('refreshToken');
//     const response = await axios.post('/api/auth/refresh', { refreshToken });
    
//     if (response.status === 200) {
//     const { accessToken, refreshToken: newRefreshToken } = response.data;
//       localStorage.setItem('accessToken', accessToken);
//       localStorage.setItem('refreshToken', newRefreshToken);
//       return accessToken;
//     } else {
//       throw new Error('Token refresh failed');
//     }
//   } catch (error) {
//     console.error('Refresh token error:', error);
//     return null;
//   }
// };

// export default refreshToken;