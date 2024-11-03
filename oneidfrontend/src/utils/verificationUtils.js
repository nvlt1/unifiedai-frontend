import api from './auth';

export const checkActiveVerification = async () => {
  try {
    const response = await api.get('/verification/active');
    return response.data.active; // if user has active request, returns true
  } catch (error) {
    console.error('Error checking active verification:', error);
    return false; 
  }
};
