import React from "react";
import styled from "styled-components";

import portrait from "../../assets/portrait.jpeg";
import SkillCard from "../cards/SkillCard";
import templates from "../templates";
import icons from "../../assets/techIcons";

const Home = () => {
  return (
    <HomeContainer>
      <Portrait src={portrait} alt="Portrait" />
      <HomeTextContainer>
        <p>Hello, I am</p>
        <p>Mark Alperin</p>
        <p>A Full-Stack Engineer with a passion for building things.</p>
        <OuterLinksContainer>
          <Button templates={templates}>
            <p>Resume</p>
          </Button>
          <InnerLinksContainer>
            <IconContainer>
              <StyledImg src={icons.links[0]} />
            </IconContainer>
            <IconContainer>
              <StyledImg src={icons.links[1]} />
            </IconContainer>
          </InnerLinksContainer>
        </OuterLinksContainer>
      </HomeTextContainer>
    </HomeContainer>
  );
};

export default Home;

const Portrait = styled.img`
  width: 300px;
  height: auto;
  border-radius: 50%;
  margin-right: 5%;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const HomeTextContainer = styled.div`
  display: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 60%;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 45px;
  border-radius: 30px;
  background-color: ${templates.colorDark};
  color: white;
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);

  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 12px 12px 12px ${templates.boxShadowColor};
  }
`;

const OuterLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InnerLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 130px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  border: 1.5px solid whitesmoke;
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);

  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 10px 10px 10px ${templates.boxShadowColor};
  }
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;
