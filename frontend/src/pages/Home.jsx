import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InvitePopUp from '../components/InvitePopUp';
import UserProfile from '../components/UserProfile';

function Home() {
  const [invitePopup, setInvitePopup] = useState(false);
  const setInvitePopUp = () => {
    setInvitePopup(!invitePopup);
  };
 const Navigate = useNavigate();
  return (
    <Main>
      <Top>
        <TopStats>
          🎮 No of Friends: - 
          <br />
          🏆 Highest Score: - 
          <br />
          🎲 Total Games Played: - 
        </TopStats>
        <Profile>
          <ProfileButtons>
            {/* <button>🚪 Log Out</button> */}
            <UserProfile/>
          </ProfileButtons>
        </Profile>
      </Top>

      <Middle>
        <p>⚔️ Shall we Start!!!!!</p>
        {invitePopup?<InvitePopUp setInivitingPopup={setInvitePopup}/>:<></>}
        <PlayingButtonSection>
          <button onClick={setInvitePopUp}>🤺 Challenge a Friend</button>
          <button onClick={(e)=>{Navigate('/playingArea')}}>🎮 Play Now!!</button>
        </PlayingButtonSection>
      </Middle>

      <Bottom>
        📜 Match History 🍜
      </Bottom>
    </Main>
  );
}

export default Home;

const Main = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  color: black;
`;
const Top = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const TopStats = styled.div`
  background: #e3eaf3;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: none;
  width: 30%;
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  padding: 10px;
`;
const Profile = styled.div`
  background: #e3eaf3;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: none;
  width: 30%;
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  border-radius: 15px;
  padding: 10px;
`;
const ProfileButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    border: none;
    min-height: 4vh;
    min-width: 6vw;
    background-color: #4c8bf5;
    font-weight: 600;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: #3a77d6;
    }
  }
`;
const Middle = styled.div`
  background: #f0f4f8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: none;
  width: 90%;
  min-height: 35vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  padding: 15px;
`;
const PlayingButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    border: none;
    min-height: 4vh;
    min-width: 6vw;
    background-color: #4c8bf5;
    color: white;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: #3a77d6;
    }
  }
`;
const Bottom = styled.div`
   margin-bottom: 5px;
  background: #f0f4f8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: none;
  width: 90%;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  padding: 15px;
`;
