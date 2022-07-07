import React from 'react';
import styled from 'styled-components';

const HomeText = () => {
  return (
    <HomeTextContainer>
      <P1>Hi, my name is</P1>
      <P2>MARK ALPERIN</P2>
      <P3>A <span style={{color: "blue"}}>Full-Stack Developer</span> </P3>
    </HomeTextContainer>
  );
};

export default HomeText;

const HomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const P1 = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

  const P2 = styled.p`
  font-size: 2rem;
  font-weight: bold;`;

  const P3 = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: grey;
  `;