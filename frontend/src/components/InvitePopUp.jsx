import React from 'react';
import styled from 'styled-components';

function InvitePopUp( {setInivitingPopup}) {
      
     const closingPopup = ()=>{
         setInivitingPopup(false);
     }

  return (
    <Main>
      <Top>
        <Title>Challenge Someone ⚔</Title>
        <CloseButton onClick={closingPopup}>&times;</CloseButton>
      </Top>
       <Middle></Middle>
      <Bottom>
        <Input type="text" placeholder="Enter email or username" />
        <AddButton>➕ Invite</AddButton>
      </Bottom>
    </Main>
  );
}

export default InvitePopUp;

const Main = styled.div`
  min-height: 55vh;
  min-width: 45vw;
  background-color: #ffffff;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #777;
  transition: color 0.3s;
  &:hover {
    color: #333;
    background-color: red;
    border-radius: 50%;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border 0.3s;
  &:focus {
    border-color: #007bff;
  }
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const Middle  = styled.div``;