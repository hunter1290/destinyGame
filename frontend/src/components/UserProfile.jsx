import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: #f8f9fa; */
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 25vw;
  /* margin: 40px auto; */
`;

const Heading = styled.p`
  color: #333;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #c82333;
  }
`;

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Heading>Welcome, {user?.usernameOrEmail}!</Heading>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </Container>
  );
};

export default UserProfile;
