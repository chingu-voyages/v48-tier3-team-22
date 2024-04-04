import http from './api';

// const apiUrl = import.meta.env.VITE_API_URL;
const apiUrl = 'https://v48-tier3-team-22-api.onrender.com';

export const signUp = (data) => {
  return http.post(`${apiUrl}/api/v1/register`, JSON.stringify(data));
};

export const logIn = (data) => {
  return http.post(`${apiUrl}/api/v1/login`, JSON.stringify(data));
};
