import React, { useContext } from "react";
import styled from "styled-components";

import portrait from "../../assets/portrait.jpeg";
import templates from "../templates";
import AppContext from "../../context/appContext";
import LinkedInIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";
import Icons from "../icons/Icons";

const Home = () => {
  const ctx = useContext(AppContext);

  return (
    <HomeContainer>
      <Portrait src={portrait} alt="Portrait" />
      <P1 ctx={ctx}>Hello, I'm Mark </P1>
      <P2 ctx={ctx}>I build things for the web.</P2>
      <Icons />
      {/* <LinksContainer>
        <LinkedInIcon/>
        <GithubIcon />
      </LinksContainer> */}
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
