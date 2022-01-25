import axios from 'axios';

require('dotenv').config();

const api = axios.create({
  baseURL: 'http://localhost:3031',
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  return {
    ...config,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };
});

export default api;
