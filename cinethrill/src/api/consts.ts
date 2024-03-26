import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/v1.0';

const QUERY_KEYS = {
  user: 'user',
  movie: 'movie',
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export { API_BASE_URL, QUERY_KEYS, axiosInstance };
