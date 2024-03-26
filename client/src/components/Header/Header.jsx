import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import { isLoggedIn, getUserName } from "../auth/authService";

import DinoLogo from "../../assets/Dinosaur.jpg";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const toggleBtn = () => {
    setIsClicked(!isClicked);
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (isLoggedIn()) {
      setLoggedIn(true);
      setUserName(getUserName());
    }
  }, []);

  return (
    <header className="p-[15px] md:p-[18px] flex flex-row justify-between items-center text-emerald-100   md:my-0 fixed z-50 top-0 left-0 right-0 bg-gradient-to-tl from-green-950 to-black-900 ">
      <div className="flex items-center">
        <img src={DinoLogo} alt="" className="w-[80px]" />
        <h1 className="ml-[30px] md:text-[30px] font-bold">Dinosaur App</h1>
      </div>
      <nav className="flex items-center justify-between">
        <NavLink to="/" className="ml-[20px] md:text-[22px]">
          Home
        </NavLink>
        <NavLink to="/dinosaurs" className="ml-[20px] md:text-[22px]">
          Dinosaurs
        </NavLink>
        <NavLink to="/news" className="ml-[20px] md:text-[22px]">
          News
        </NavLink>
      </nav>

      {loggedIn ? (
        <p>Welcome, {userName}</p>
      ) : (
        <div onClick={toggleBtn}>
          <button className="p-[8px] bg-emerald-500 text-[#fff] font-bold rounded-xl md:text-[20px] relative">
            Get started
          </button>
          {isClicked && (
            <div className="absolute flex flex-col justify-center items-center bg-[#fff] text-emerald-500 rounded-b-xl rounded-t right-[18px] w-[125px] p-[10px]">
              <p
                className="p-[5px] hover:font-bold cursor-pointer"
                onClick={() => navigate("/auth/register")}
              >
                Sign Up
              </p>
              <p
                className="p-[5px] hover:font-bold cursor-pointer"
                onClick={() => navigate("/auth/login")}
              >
                Log In
              </p>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
