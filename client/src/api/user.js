import http from './api';

// const apiUrl = import.meta.env.VITE_API_URL;
const apiUrl = 'https://v48-tier3-team-22-api.onrender.com';

export const getUser = (id) => {
  return http.get(`${apiUrl}/api/v1/user/${id}`);
};

export const updatePassword = (data) => {
  return http.put(`${apiUrl}/api/v1/user/updatePassword`, JSON.stringify(data));
};

export const updateProfile = (data) => {
  return http.put(`${apiUrl}/api/v1/user/updateProfile`, JSON.stringify(data));
};
