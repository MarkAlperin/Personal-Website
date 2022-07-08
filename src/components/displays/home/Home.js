import React from "react";
import styled from "styled-components";

import portrait from "../../../assets/portrait.jpeg";
import templates from "../../templates";
import HomeText from "./HomeText";
import linkedInIcon from "../../../assets/linkedin.svg";
import githubIcon from "../../../assets/github.svg";

const Home = () => {
  return (
    <HomeContainer>
      <Portrait src={portrait} alt="Portrait" />
      <HomeTextContainer>
        <HomeText />
        <OuterLinksContainer>
          <Button templates={templates}>
            <StyledA href="../../Mark-Alperin-Resume.pdf" alt="Resume">
              Resume
            </StyledA>
          </Button>
          <InnerLinksContainer>
            <IconContainer
              href="https://www.linkedin.com/in/markalperin/"
              target="blank"
            >
              <StyledLinkedin src={linkedInIcon} />
            </IconContainer>
            <IconContainer
              href="https://www.github.com/markalperin"
              target="blank"
            >
              <StyledGithub src={githubIcon} />
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
  box-shadow: 0px 0px 8px ${templates.color.dark},
    10px 0px 5px ${templates.color.light},
    15px 0px 5px ${templates.color.shadowLight};
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
  border-radius: 5px;
  margin-right: 25px;
  background-color: ${templates.color.accent};
  color: ${templates.color.white};
  box-shadow: 2.5px 2.5px 5px ${templates.color.shadowDark};
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 10px 10px 10px ${templates.color.shadowDark},
      0px 0px 6px ${templates.color.dark};
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

const IconContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  padding: 6px;
  box-shadow:  2px 2px 4px ${templates.color.shadowDark};
  background-color: ${templates.color.mid};
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 10px 10px 10px ${templates.color.shadowDark},
      0px 0px 3px ${templates.color.dark};
  }
`;

const StyledLinkedin = styled.img`
  width: 30px;
  height: 30px;
  background-color: ${templates.color.light};
  border-radius: 15%;
`;

const StyledGithub = styled.img`
  width: 30px;
  height: 30px;
  background-color: ${templates.color.light};
  border-radius: 50%;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: ${templates.color.white};
`;


