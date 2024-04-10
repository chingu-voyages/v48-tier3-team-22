import http from "./api";

const apiUrl = import.meta.env.VITE_API_URL;

export const signUp = (data) => {
  return http.post(`${apiUrl}/api/v1/register`, JSON.stringify(data));
};

export const logIn = (data) => {
  return http.post(`${apiUrl}/api/v1/login`, JSON.stringify(data));
};