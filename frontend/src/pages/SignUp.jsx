import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup} from "../redux/auth/authSlice";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUp = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      fullName: e.target[0].value,
      username: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
    };
    dispatch(signup(user));
       navigate('/login');
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Full Name" required />
          <Input type="text" placeholder="User Name" required />
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Input type="password" placeholder="Confirm Password" required />
          <Button type="submit">Sign Up</Button>
        </form>

        <p style={{ textAlign:"center",cursor: "pointer", color: "blue" }} onClick={() => navigate("/login")}>
      Already have an account? Login
    </p>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
