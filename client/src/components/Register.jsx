import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import DinosaurImage from "../assets/Dinosaur.jpg";

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
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
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

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
        }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        alert(`Registration failed: ${errorText}`);
      } else {
        alert("Registration successfully");

        history.push("/Login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //

  const redirectToLogin = () => {
    history.push("/Login");
  };

  return (
    <Container>
      <Card>
        <Image src={DinosaurImage} alt="Dinosaur" />
        <Title>Sign Up</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Full Name</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Full Name"
            id="name"
            name="name"
          />

          <Label htmlFor="email">Your Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />

          <Label htmlFor="password">Password</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="***********"
            id="password"
            name="password"
          />

          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="***********"
            id="confirmPassword"
            name="confirmPassword"
          />

          <Button type="submit">Sign Up</Button>
        </Form>
        <LinkButton onClick={redirectToLogin}>
          Already have an account? Sign In
        </LinkButton>
      </Card>
    </Container>
  );
};

export default Register;
