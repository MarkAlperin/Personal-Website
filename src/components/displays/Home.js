import React, { useContext } from "react";
import styled from "styled-components";

import portrait from "../../assets/portrait.png";
import templates from "../templates";
import AppContext from "../../context/appContext";
import Icons from "../icons/Icons";

const Home = () => {
  const ctx = useContext(AppContext);

  return (
    <HomeContainer>
      <Portrait src={portrait} alt="Portrait" />
      <TextContainer>
        <P1 ctx={ctx}>Hello, I'm Mark </P1>
        <P2 ctx={ctx}>I build things for the web.</P2>
        <Icons />
      </TextContainer>
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
  /* @media only screen and (orientation: landscape) and (max-width: ${templates.breakpoints.tablet}) {
    flex-direction: row;
  } */
`;

const Portrait = styled.img`
  align-self: center;
  width: 200px;
  @media (max-width: ${templates.breakpoints.mobile}) {
    width: 175px;
  }
  /* @media only screen and (orientation: landscape) and (max-width: ${templates.breakpoints.tablet}) {
    width: 150px;
  } */
  height: auto;
  border-radius: 50%;
  margin: 5%;
`;

const P1 = styled.p`
  margin: 0 0 0 -2px;
  padding: 0;
  font-size: 5rem;
  /* @media only screen and (orientation: landscape) and (max-width: ${templates.breakpoints.tablet}) {
    font-size: 2.5rem;
  } */
  @media (max-width: ${templates.breakpoints.mobile}) {
    font-size: 3.5rem;
  }
  line-height: 1em;
  font-weight: 600;
  text-shadow: 0 0 1px
    ${({ ctx }) =>
      ctx.darkMode ? templates.color.shadowLight : templates.color.shadowDark};
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.white : templates.color.black};
`;

const P2 = styled.p`
  font-size: 2rem;
  /* @media only screen and (orientation: landscape) and (max-width: ${templates.breakpoints.tablet}) {
    font-size: 1.5rem;
  } */
  line-height: 1em;
  font-weight: 100;
  text-shadow: 0 0 1px
    ${({ ctx }) =>
      ctx.darkMode ? templates.color.shadowLight : templates.color.shadowDark};
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.shadowDark : templates.color.grey};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
