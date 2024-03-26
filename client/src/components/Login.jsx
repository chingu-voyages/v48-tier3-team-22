import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DinosaurImage from "../assets/DinosaurReading.jpg";

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fafc;
  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.5);
`;

const Card = styled.div`
  max-width: 28rem;
  width: 100%;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
`;

const Image = styled.img`
  width: 6rem;
  height: 6rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: medium;
`;

const Input = styled.input`
  padding: 0.5rem;
`;

const Button = styled(NavLink)`
  background-color: red;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    background-color: darkred;
    transition: transform 0.3s;
  }
`;

const LinkButton = styled.button`
  color: #3182ce;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveUserToLocalStorage = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("User data has been saved to localStorage:", userData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating successful authentication
    const userData = {
      email: email,
      password: password,
    };

    saveUserToLocalStorage(userData);

    // Redirect to home or any desired page after login
    navigate("/");
  };

  const redirectToRegister = () => {
    navigate("/Register");
  };

  return (
    <Container className="pt-[115px]">
      <Card>
        <Image src={DinosaurImage} alt="DinosaurReading" />
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />

          <Label>Password</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />

          <Button to="/">Sign In</Button>
        </Form>
        <LinkButton onClick={redirectToRegister}>
          Don't have an account? Sign Up
        </LinkButton>
      </Card>
    </Container>
  );
};

export default Login;
