import React from 'react';
import styled from 'styled-components';

function GamePage() {
  return (
    <Container>
      <TopSection>
        <Box>Score</Box>
        <Box>Clues</Box>
      </TopSection>
      <ImageSection>
        <ImagePlaceholder>Image of the place</ImagePlaceholder>
      </ImageSection>
      <ResponseSection>
        <ResponseInput placeholder="Your answer..." />
        <SubmitButton>🌟</SubmitButton>
      </ResponseSection>
    </Container>
  );
}

export default GamePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc, #dbeafe);
  padding: 20px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 600px;
`;

const Box = styled.div`
  flex: 1;
  background: #f1f5f9;
  padding: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 5px;
`;

const ImageSection = styled.div`
  width: 80%;
  max-width: 600px;
  height: 250px;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #475569;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImagePlaceholder = styled.div`
  text-align: center;
`;

const ResponseSection = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 600px;
`;

const ResponseInput = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #94a3b8;
  border-radius: 10px;
  outline: none;
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  background: #4f46e5;
  color: white;
  border: none;
  padding: 12px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #4338ca;
  }
`;
