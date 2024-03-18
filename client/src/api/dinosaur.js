import http from "./api";

const apiUrl =
  import.meta?.env?.VITE_API_URL || `https://chinguapi.onrender.com`;

export const getDinosaurs = (params = {}) => {
  return http.get(`${apiUrl}/dinosaurs`, JSON.stringify(params));
};
