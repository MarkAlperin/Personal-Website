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

  window.onscroll = () => {
    let scrollPct = helpers.amountscrolled();
    if (ctx.darkMode && scrollPct > 1 && scrollPct < 96) {
      ctx.setDarkMode(false);
    } else if (!ctx.darkMode && (scrollPct <= 1 || scrollPct >= 96)) {
      ctx.setDarkMode(true);
    }
  };

  return (
    <OuterContainer ctx={ctx}>
      <NavHeader />
      <ScrollContainer>
        <HomeContainer id="home">
          <Home />
        </HomeContainer>
        <AboutContainer id="about">
          <SectionTitle blurb="SOME INFO" title="ABOUT ME" />
          <About />
        </AboutContainer>
        <SkillsContainer id="skills">
          <SectionTitle blurb="CHECK OUT MY" title="SKILLS" margin={true} />
          <Skills />
        </SkillsContainer>
        <ProjectsContainer id="projects">
          <SectionTitle
            blurb="TAKE A LOOK AT MY"
            title="PROJECTS"
            margin={true}
          />
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
  transition: all 0.4s ease-in-out;
  background-color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.black : "whitesmoke"};
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.light : templates.color.black};
`;

const ScrollContainer = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: auto;
`;

const HomeContainer = styled.div`
  height: ${height}px;
  margin-bottom: 5%;
  padding-left: 10%
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
`;

const AboutContainer = styled.div`
  height: auto;
  margin-bottom: 10%;
  padding-top: 5%;
  padding-left: 10%
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
`;

const SkillsContainer = styled.div`
  height: auto;
  margin-bottom: 10%;
  padding-top: 5%;
  padding-left: 10%
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
`;

const ProjectsContainer = styled.div`
  height: auto;
  margin-bottom: 3%;
  padding-top: 5%;
  padding-left: 10%
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
  `;

const ContactContainer = styled.div`
  height: ${height}px;
  padding-left: 10%
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
`;
