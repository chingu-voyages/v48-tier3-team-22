import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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

  const redirectToSignIn = () => {
    history.push("/Signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Full Name" id="name" name="name" className="input-field"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" className="input-field"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="***********" id="password" name="password" className="input-field"/>
          </div>
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
        
        <button onClick={redirectToSignIn} className="mt-4 btn-secondary">Already have an account? Sign In</button>
      </div>
    </div>
  );
};

export default Register;