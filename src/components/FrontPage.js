import React from "react";
import styled from "styled-components";

import NavHeader from "./NavHeader";
import SideBar from "./SideBar";
import LandingDisplay from "./LandingDisplay";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import templates from "./templates";

const FrontPage = () => {
  const { DisplayContainer } = templates;

  return (
    <OuterContainer className="App">
      <SideBar />
      {/* <NavHeader /> */}
      <ScrollContainer>
        <DisplayContainer id="home">
          <LandingDisplay />
        </DisplayContainer>
        <DisplayContainer id="about">
          <About />
        </DisplayContainer>
        <DisplayContainer id="skills">
          <Experience />
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
