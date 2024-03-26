import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DinosaurImage from "../../assets/DinosaurReading.jpg";

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

const SubmitButton = styled.button`
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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Store the token in localStorage
          localStorage.setItem("token", data.token);
          console.log("Login successful");
        } else {
          console.error("Login failed");
        }
      })
      .catch((error) => console.error("Error:", error));

    // Redirect to home or any desired page after login
    navigate("/dinosaurs");
  };

  const redirectToRegister = () => {
    navigate("/auth/Register");
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

          <SubmitButton type="submit">Sign In</SubmitButton>
        </Form>
        <LinkButton onClick={redirectToRegister}>
          Don't have an account? Sign Up
        </LinkButton>
      </Card>
    </Container>
  );
};

export default Login;
