import React from "react";
import styled from "styled-components";


import SideBar from "../SideBar";
import Home from "./home/Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import templates from "../templates";

const FrontPage = () => {
  const { DisplayContainer } = templates;

  return (
    <OuterContainer>
      <SideBar />
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
        <DisplayContainer id="projects">
          <Projects />
        </DisplayContainer>
        <DisplayContainer id="contact">
          <Contact />
        </DisplayContainer>
      </ScrollContainer>
    </OuterContainer>
  );
};
export default FrontPage;

const OuterContainer = styled.div`
  background-color: whitesmoke;
`;

const ScrollContainer = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
`;
