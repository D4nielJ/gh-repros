import axios from 'axios';

const token = process.env.REACT_APP_PTOKEN;

const ghInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${token}`,
  },
});

export default ghInstance;
