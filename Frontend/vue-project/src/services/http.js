// services/http.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(config => {
  const userData = (JSON.parse(localStorage.getItem('userData')));
  const token = userData ? userData.token : null;

  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default axiosInstance;
