import React from "react";
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  min-height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fafc; 
`;

const Card = styled.div`
  max-width: 28rem;
  width: 100%;
  padding: 1.5rem; 
  background-color: #fff; 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); 
  border-radius: 0.375rem; 
`;

const Title = styled.h2`
  font-size: 1.5rem; 
  font-weight: bold; 
  text-align: center;
  margin-bottom: 1rem; 
  color: #e53e3e; /* Red color */
`;

const Description = styled.p`
  font-size: 1.125rem; 
  text-align: center;
  color: #4a5568; /* Gray color */
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #e53e3e; /* Red color */
  color: #fff; /* White color */
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1.125rem;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c53030; /* Darker shade of red */
  }
`;

const Success = () => {
  return (
    <Container>
      <Card>
        <Title>Unleash Your Inner T-Rex! Roar into Adventure with our Dino-tastic App!</Title>
        <Description>Thank you for signing up! Your account has been successfully created.</Description>
        <Button>Get Started</Button>
      </Card>
    </Container>
  );
};

export default Success;