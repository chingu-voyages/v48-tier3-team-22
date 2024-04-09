import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DinosaurImage from "../../assets/DinosaurReading.jpg";
import CustomAlert from "./CustomAlert";
import { login } from "../../state/user";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [errorType, setErrorType] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dinosaurs");
    }
  }, [isLoggedIn, navigate]);

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    setAlertMessage("");
    setErrorType("");
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Ensure all fields are filled
    if (!email || !password) {
      setAlertMessage("Please enter your email and password");
      setIsAlertOpen(true);
      return;
    }

    try {
      const response = await fetch(
        "https://v48-tier3-team-22-api.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        const errorMessage = responseData.message || "Login failed. Please try again."; // Default error message
        setAlertMessage(errorMessage);
        setIsAlertOpen(true);
      } else {
        dispatch(login({ email, password }));

        navigate("/dinosaurs");
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("An unexpected error occurred. Please try again");
      setIsAlertOpen(true);
    }
  };


  const redirectToRegister = () => {
    navigate("/auth/Register");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full py-6 px-6 bg-white shadow-lg rounded-md" style={{ boxShadow: "10px 10px 20px #004d00, -10px 10px 20px #004d00", marginTop: "100px" }}>
        <img className="w-24 h-24 mb-4 mx-auto" src={DinosaurImage} alt="DinosaurReading" />
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-sm font-medium">Email<span className="text-red-500 text-lg">***</span></label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            className="p-2 mb-4 border border-green-600"
          />

          <label htmlFor="password" className="text-sm font-medium">Password<span className="text-red-500 text-lg">***</span></label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            id="password"
            name="password"
            className="p-2 mb-4 border border-green-600"
          />

          <button type="submit" className="bg-green-800 text-white p-2 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">Sign In</button>
        </form>
        <button onClick={redirectToRegister} className="text-blue-500 text-center mt-4">Don't have an account? Sign Up</button>

        {isAlertOpen && <CustomAlert message={alertMessage} errorType={errorType} onClose={handleAlertClose} />}
      </div>
    </div>
  );
};

export default Login;
