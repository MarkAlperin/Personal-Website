import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
// import SideBar from "../SideBar";
import NavHeader from "../NavHeader";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import templates from "../templates";
import helpers from "../../helpers/helpers";


const FrontPage = () => {
  const ctx = useContext(AppContext);
  const { DisplayContainer } = templates;

  window.onscroll = () => {
    let scrollPct = helpers.amountscrolled();
    // console.log(`Scroll Percent: ${scrollPct}%`)
    if (ctx.darkMode && (scrollPct > 1 && scrollPct < 98)) {
      ctx.setDarkMode(false);
    } else if (!ctx.darkMode && (scrollPct <= 1 || scrollPct >= 98)) {
      ctx.setDarkMode(true);
    }
  };

  return (
    <OuterContainer ctx={ctx}>
      {/* <SideBar /> */}
      <NavHeader />
      <ScrollContainer>
        <DisplayContainer id="home">
          <Home />
        </DisplayContainer>
        <DisplayContainer id="about">
          <About />
        </DisplayContainer>
        <DisplayContainer id="skills">
          <Skills />
        </DisplayContainer>
        <ProjectsContainer id="projects">
          <Projects />
        </ProjectsContainer>
        <DisplayContainer id="contact">
          <Contact />
        </DisplayContainer>
      </ScrollContainer>
    </OuterContainer>
  );
};
export default FrontPage;

const OuterContainer = styled.div`
  transition: all .4s ease-in-out;
  background-color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.black : "whitesmoke"};
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.light : templates.color.black};
`;

const ScrollContainer = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const ProjectsContainer = styled.div`
    height: auto;
    padding-left: 10%
    padding-right: 10%;
    margin-bottom: 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-behavior: smooth;
  `;

