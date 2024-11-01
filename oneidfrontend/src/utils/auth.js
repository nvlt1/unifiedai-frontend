import axios from 'axios';

// this function refreshes access tokens upon expiry
// retrieves refresh token from localstorage, makes req to endpoint with refreshtoken, 
// updates both access and refresh tokens in localstorage.
export const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post('/api/auth/refresh', { refreshToken });
    
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

export default refreshToken;