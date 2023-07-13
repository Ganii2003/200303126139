import axios from 'axios';

const API_BASE_URL = 'http://api.johndoe-railways.com'; // Replace with the actual API base URL

const authenticate = (accessCode) => {
  // Implement authentication logic and obtain the authentication token
  // Return the token
};

const getAllTrains = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/trains`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching trains:', error);
    return null;
  }
};

const getTrainById = async (token, trainId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/trains/${trainId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching train:', error);
    return null;
  }
};

export { authenticate, getAllTrains, getTrainById };
