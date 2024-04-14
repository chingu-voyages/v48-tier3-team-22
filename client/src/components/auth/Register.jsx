import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DinosaurImage from '../../assets/Dinosaur.jpg';
import CustomAlert from './CustomAlert';

const baseURL = import.meta.env.VITE_BACKEND_URL;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setName] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    setAlertMessage('');
    if (isSuccess) {
      navigate('/dinosaurs'); // Redirect to dinosaur page on successful sign-up
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password || !confirmPassword) {
      setAlertMessage('Please fill all the fields');
      setIsAlertOpen(true);
      return;
    }

    if (password !== confirmPassword) {
      setAlertMessage(
        'Passwords do not match. Please ensure the passwords match.'
      );
      setIsAlertOpen(true);
      return;
    }

    try {
      const response = await fetch(
        'https://v48-tier3-team-22-api.onrender.com/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName,
            email,
            password,
            confirmPassword,
          }),
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        const errorMessage =
          responseData.message || 'Registration failed. Please try again.'; // Default error message
        setAlertMessage(errorMessage);
        setIsAlertOpen(true);
      } else {
        setIsSuccess(true);
        setAlertMessage(`Registration successful, welcome ${userName}`);
        setIsAlertOpen(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setAlertMessage('An unexpected error occurred. Please try again');
      setIsAlertOpen(true);
    }
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="max-w-md w-full py-6 px-6 bg-white shadow-lg rounded-md mt-20 mx-auto">
      <div
        className="max-w-md w-full py-6 px-6 bg-white shadow-lg rounded-md border-4 border-green-800 shadow-lg"
        style={{
          boxShadow: '10px 10px 20px #004d00, -10px -10px 20px #004d00',
        }}
      >
        <img
          className="w-24 h-24 mb-4 mx-auto"
          src={DinosaurImage}
          alt="Dinosaur"
        />
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="userName" className="text-sm font-medium mb-1">
            User Name<span className="text-red-500 text-lg">***</span>
          </label>
          <input
            value={userName}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Username"
            id="userName"
            name="userName"
            autoComplete="userName"
            className="p-2 mb-4 border border-green-600"
          />

          <label htmlFor="email" className="text-sm font-medium mb-1">
            Your Email<span className="text-red-500 text-lg">***</span>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            autoComplete="email"
            className="p-2 mb-4 border border-green-600"
          />

          <label htmlFor="password" className="text-sm font-medium mb-1">
            Password<span className="text-red-500 text-lg">***</span>
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="***********"
            id="password"
            name="password"
            className="p-2 mb-4 border border-green-600"
          />

          <label htmlFor="confirmPassword" className="text-sm font-medium mb-1">
            Confirm Password<span className="text-red-500 text-lg">***</span>
          </label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="***********"
            id="confirmPassword"
            name="confirmPassword"
            className="p-2 mb-4 border border-green-600"
          />

          <button
            type="submit"
            className="bg-green-800 text-white p-2 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
          >
            Sign Up
          </button>
        </form>
        <button onClick={redirectToLogin} className="text-blue-500 text-center">
          Already have an account? Sign In
        </button>
      </div>

      {isAlertOpen && (
        <CustomAlert message={alertMessage} onClose={handleAlertClose} />
      )}
    </div>
  );
};

export default Register;
