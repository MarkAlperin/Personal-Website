import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
import NavHeader from "../NavHeader";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import templates from "../templates";
import helpers from "../../helpers/helpers";
import SectionTitle from "../SectionTitle";

const height = window.innerHeight;


const FrontPage = () => {
  const ctx = useContext(AppContext);
  // const { DisplayContainer } = templates;

  window.onscroll = () => {
    let scrollPct = helpers.amountscrolled();
    // console.log(`Scroll Percent: ${scrollPct}%`)
    if (ctx.darkMode && (scrollPct > 1 && scrollPct < 96)) {
      ctx.setDarkMode(false);
    } else if (!ctx.darkMode && (scrollPct <= 1 || scrollPct >= 96)) {
      ctx.setDarkMode(true);
    }
  };

  return (
    <OuterContainer ctx={ctx}>
      <NavHeader />
      <ScrollContainer>
        <DisplayContainer id="home">
          <Home />
        </DisplayContainer>
        <DisplayContainer id="about">
          <SectionTitle blurb="SOME INFO" title="ABOUT ME"/>
          <About />
        </DisplayContainer>
        <DisplayContainer id="skills">
        <SectionTitle blurb="CHECK OUT MY" title="SKILLS" margin={true}/>
          <Skills />
        </DisplayContainer>
        <ProjectsContainer id="projects">
        <SectionTitle blurb="TAKE A LOOK AT MY" title="PROJECTS" margin={true}/>
          <Projects />
        </ProjectsContainer>
        <ContactContainer id="contact">
          <Contact />
        </ContactContainer>
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

const DisplayContainer = styled.div`
height: ${height}px;
margin-bottom: 4%;
padding-left: 10%
padding-right: 10%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
scroll-behavior: smooth;
`

const ContactContainer = styled.div`
height: ${height}px;
padding-left: 10%
padding-right: 10%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
scroll-behavior: smooth;
`