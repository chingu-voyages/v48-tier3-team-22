import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DinosaurImage from "./assets/Dinosaur.jpg";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  const saveUserDataToLocalStorage = (userData) => {
    // Retrieve existing users data from localStorage
    const existingUsersData = JSON.parse(localStorage.getItem('usersData')) || [];

    // Add new user data to the existing array
    existingUsersData.push(userData);

    // Save the updated array back to localStorage
    localStorage.setItem('usersData', JSON.stringify(existingUsersData));
    console.log('User data has been saved to localStorage');
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      name: name,
      email: email,
      password: password
    };

    saveUserDataToLocalStorage(userData); 

    history.push("/Success"); 
  };

  const redirectToLogin = () => {
    history.push("/Login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
        <img src={DinosaurImage} alt="Dinosaur" className="w-24 h-24 mb-4" />
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="flex flex-col items-center w-full">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-center">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Full Name" id="name" name="name" className="input-field text-center"/>
          </div>
          <div className="flex flex-col items-center w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-center">Your Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" className="input-field text-center"/>
          </div>
          <div className="flex flex-col items-center w-full">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-center">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="***********" id="password" name="password" className="input-field text-center"/>
          </div>
          <div className="flex items-center justify-center w-full">
          <button type="submit" className="btn-primary border border-solid border-black rounded-md inline-block bg-red-500 text-white px-4 py-2 transition-transform transform hover:scale-110">Sign Up</button>
        </div>
        </form>
        
        <button onClick={redirectToLogin} className="mt-4 btn-secondary text-blue-500">Already have an account? Sign In</button>
      </div>
    </div>
  );
};

export default Register;