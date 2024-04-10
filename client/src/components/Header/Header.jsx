import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../../state/user";

import DinoLogo from "../../assets/dino-logo.png";

import MenuIcon from "../../assets/menu-icon.png";
import CloseMenuIcon from "../../assets/close-menu-icon.png";
import UserIcon from "../../assets/user-logo.png";
import LogoutIcon from "../../assets/logout.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNameClicked, setIsNameClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector((state) => state.user.userName);

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="p-[15px] md:p-[18px] flex flex-row justify-between items-center text-emerald-100   md:my-0 fixed z-60 top-0 left-0 right-0 bg-gradient-to-tl from-green-950 to-black-950">
      <div className="flex items-center">
        <img src={DinoLogo} alt="" className="w-[40px] md:w-[60px]" />
        <h1 className="ml-[10px] md:ml-[30px] md:text-[30px] font-bold">
          Dinosaur App
        </h1>
      </div>
      <nav
        className={
          isMenuOpen
            ? `flex flex-col items-center absolute top-[70px] left-0 right-0 w-full bg-[#fff] text-emerald-500 p-[10px]`
            : `hidden md:block flex  md:flex-row items-center justify-between md:static`
        }
      >
        <NavLink
          to="/"
          className="p-[10px] md:p-0 md:ml-[20px] md:text-[22px]"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/dinosaurs"
          className="p-[10px] md:p-0 md:ml-[20px] md:text-[22px]"
          onClick={closeMenu}
        >
          Dinosaurs
        </NavLink>
        <NavLink
          to="/api/news"
          className="p-[10px] md:p-0 md:ml-[20px] md:text-[22px]"
          onClick={closeMenu}
        >
          News
        </NavLink>
      </nav>

      {loggedIn ? (
    <div className="flex items-center gap-x-[10px] relative">
          <p>Welcome,</p>

          <div
            className="font-bold cursor-pointer  text-[#fff]  md:text-[18px] flex items-center justify-center "
            onClick={() => setIsNameClicked((name) => !name)}
          >
            {userName}

            {isNameClicked && (
              <div className=" bg-[#fff] absolute left-0 right-0 top-[40px] text-emerald-500 rounded-b-lg rounded-l-lg gap-y-[5px] flex flex-col  font-normal px-[3px] py-[15px] text-[16px]">
                <div className="flex items-center gap-x-[5px] ml-[5px]">
                  <img className="w-[20px]" src={UserIcon} alt="" />
                  <p>{userName}</p>
                </div>

             
              </div>
            )}
          </div>
        </div>
          <div
                  className="flex items-center hover:font-bold cursor-pointer gap-x-[5px] ml-[5px]"
                  onClick={handleLogout}
                >
                  <img className="w-[20px]" src={LogoutIcon} alt="" />
                  <p>Log Out</p>
                </div>
      ) : (
        <div className="flex items-center">
          <button
            onClick={toggleBtn}
            className="p-[8px] bg-emerald-500 text-[#fff] font-bold rounded-xl text-[14px] md:text-[20px] relative hidden md:block"
          >
            Get started
          </button>
          {isClicked && (
            <div className="absolute flex flex-col justify-center items-center bg-[#fff] text-emerald-500 rounded-b-xl rounded-t top-[53px] md:right-[18px] md:top-[71px] w-[93px] md:w-[125px] p-[10px]">
              <p
                className="p-[5px] hover:font-bold cursor-pointer text-[14px] md:text-base"
                onClick={() => closeBtn("/auth/register")}
              >
                Sign Up
              </p>
              <p
                className="p-[5px] hover:font-bold cursor-pointer text-[14px] md:text-base"
                onClick={() => closeBtn("/auth/login")}
              >
                Log In
              </p>
            </div>
          )}


//       <div className="flex items-center md:hidden">
//         <div
//           onClick={toggleMenu}
//           className="md:hidden w-[40px] ml-[10px] md:ml-[20px]"
//         >
//           {isMenuOpen ? (
//             <img src={CloseMenuIcon} alt="" className="cursor-pointer" />
//           ) : (
//             <img src={MenuIcon} alt="" className="cursor-pointer" />
//           )}{" "}
//         </div>
  //    </div>
    </header>
  );
};

export default Header;
