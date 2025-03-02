import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../redux/auth/authSlice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      usernameOrEmail: e.target[0].value,
      password: e.target[1].value,
    };
    dispatch(login(user));
  };

  const navigate = useNavigate();
  

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username or Email" required />
          <Input type="password" placeholder="Password" required />
          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
  {error && <p style={{  textAlign:"center",color: "red" }}>{typeof error === "string" ? error : JSON.stringify(error.message)}</p>}     
   <p style={{ textAlign:"center",cursor: "pointer", color: "blue" }} onClick={() => navigate("/signup")}>
      New User? Create Account
    </p>
      </FormWrapper>
    </Container>
  );
};

export default Login;
