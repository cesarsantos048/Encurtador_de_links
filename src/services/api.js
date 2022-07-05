import axios from 'axios';
//  base url 'https://api-ssl.bitly.com/v4/'

export const key = '4959df9925cf30ab6cd9427c5de31c6660a66c30';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
  }
});

export default api;