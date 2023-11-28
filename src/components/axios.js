import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://short-video-backend-tcv8.onrender.com',
});
export default instance;
