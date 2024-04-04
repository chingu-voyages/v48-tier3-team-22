const setUserData = (data) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("userName", data.userName);
};

const clearUserData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
};

const isLoggedIn = () => {
  return localStorage.getItem("token") !== null;
};

const getUserName = () => {
  return localStorage.getItem("userName");
};

const authService = { setUserData, clearUserData, isLoggedIn, getUserName };

export default authService;
