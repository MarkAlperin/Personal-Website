import React, { useContext } from "react";
import styled from "styled-components";

import portrait from "../../assets/portrait.jpeg";
import templates from "../templates";
import AppContext from "../../context/appContext";
import linkedInIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";

const Home = () => {
  const ctx = useContext(AppContext);

  return (
    <HomeContainer>
      <Portrait src={portrait} alt="Portrait" />
      <P1 ctx={ctx}>Hello, I'm Mark </P1>
      <P2 ctx={ctx}>I build things for the web.</P2>
      <LinksContainer>
        <IconContainer
          href="https://www.linkedin.com/in/markalperin/"
          target="blank"
        >
          <StyledLinkedin src={linkedInIcon} />
        </IconContainer>
        <IconContainer href="https://www.github.com/markalperin" target="blank">
          <StyledGithub src={githubIcon} />
        </IconContainer>
      </LinksContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 5%;
`;

const Portrait = styled.img`
  align-self: center;
  width: 200px;
  height: auto;
  border-radius: 50%;
  margin: 5%;
  /* box-shadow: 0px 0px 8px ${templates.color.dark},
      10px 0px 5px ${templates.color.light},
      15px 0px 5px ${templates.color.shadowLight}; */
`;

const P1 = styled.p`
  margin: 0 0 0 -2px;
  padding: 0;
  font-size: 5rem;
  line-height: 1em;
  font-weight: 600;
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.white : templates.color.black};
`;

const P2 = styled.p`
  font-size: 2rem;
  line-height: 1em;
  font-weight: 100;
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.shadowDark : templates.color.grey};
`;

const LinksContainer = styled.div`
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
  box-shadow: 1px 1px 2px ${templates.color.shadowDark};
  background-color: ${templates.color.shadowLight};
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 5px 5px 5px ${templates.color.shadowDark},
      0px 0px 3px ${templates.color.dark};
  }
`;

const StyledLinkedin = styled.img`
  width: 30px;
  height: 30px;
  background-color: ${templates.color.white};
  border-radius: 15%;
`;

const StyledGithub = styled.img`
  width: 30px;
  height: 30px;
  background-color: ${templates.color.white};
  border-radius: 50%;
`;

// const Button = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 150px;
//   height: 45px;
//   border-radius: 5px;
//   margin-right: 25px;
//   background-color: ${templates.color.shadowDark};
//   color: ${templates.color.white};
//   box-shadow: 2.5px 2.5px 5px ${templates.color.shadowDark};
//   transition: all 0.3s ease-in;
//   &:hover {
//     box-shadow: 10px 10px 10px ${templates.color.shadowDark},
//       0px 0px 6px ${templates.color.dark};
//   }
// `;
