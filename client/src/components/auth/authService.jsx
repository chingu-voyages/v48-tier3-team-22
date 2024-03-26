// AuthService.js
const loginUser = (token, userName) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userName", userName);
};

const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
};

const isLoggedIn = () => {
  return localStorage.getItem("token") !== null;
};

const getUserName = () => {
  return localStorage.getItem("userName");
};

export { loginUser, logoutUser, isLoggedIn, getUserName };
