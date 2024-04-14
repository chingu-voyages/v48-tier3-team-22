import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const loggedIn = useSelector((state) => state.user.isLoggedIn);

  const toggleBtn = () => {
    setIsClicked(!isClicked);
  };

  const closeBtn = (route) => {
    setIsClicked(false);
    navigate(route);
  };

  return (
    <div className="pt-[70px] md:pt-[96px] bg-[url('./assets/hero-img.jpg')] bg-no-repeat	bg-cover	bg-fixed	bg-center	h-screen	w-screen  object-cover opacity-65">
      <div className="bg-gradient-to-tl from-green-950 to-black-900 p-[15px] md:p-[18px] flex flex-col justify-center items-center text-[22px] md:text-[42px] text-[#fff]  h-full">
        <p className="mb-[20px]">Welcome to Jurassic World</p>

        {loggedIn ? (
          ''
        ) : (
          <div className="flex items-center block">
            <button
              onClick={toggleBtn}
              className="p-[8px] bg-emerald-500 text-[#fff] font-bold rounded-xl text-[14px] md:text-[20px] relative"
            >
              Get started
              {isClicked && (
                <div className="absolute flex flex-col justify-center items-center bg-[#fff] text-emerald-500 rounded-b-xl rounded-t top-[37px] right-0 md:top-[45px] left-0 p-[10px]">
                  <p
                    className="p-[5px] hover:font-bold cursor-pointer text-[14px] md:text-base"
                    onClick={() => closeBtn('/register')}
                  >
                    Sign Up
                  </p>
                  <p
                    className="p-[5px] hover:font-bold cursor-pointer text-[14px] md:text-base"
                    onClick={() => closeBtn('/login')}
                  >
                    Log In
                  </p>
                </div>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
