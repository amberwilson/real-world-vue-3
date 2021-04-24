import axios from 'axios';

const apiClient = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/amberwilson/real-world-vue-3-json',
  withCredentials: false,
  crossDomain: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Allow-Control-Allow-Origin': '*',
  },
});

export default {
  getEvents() {
    return apiClient.get('/events');
  },
};
