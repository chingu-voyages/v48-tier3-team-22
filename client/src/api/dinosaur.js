import http from './api';

const apiUrl = `https://chinguapi.onrender.com`;

export const getDinosaurs = (params = {}) => {
  return http.get(`${apiUrl}/dinosaurs`, JSON.stringify(params));
};
