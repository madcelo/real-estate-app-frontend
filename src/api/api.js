import axios from 'axios';

const api = axios.create({
  baseURL: 'http://206.189.200.26:5000/api',
});

export default api;
