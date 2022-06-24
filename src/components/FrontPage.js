import React from "react";
import styled from "styled-components";

import NavHeader from "./NavHeader";
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
      <NavHeader />
      <DisplayContainer>
        <LandingDisplay id="landing" />
      </DisplayContainer>
      <DisplayContainer>
        <About id="about" />
      </DisplayContainer>
      <DisplayContainer>
        {" "}
        <Experience id="experience" />
      </DisplayContainer>
      <DisplayContainer>
        {" "}
        <Projects id="projects" />
      </DisplayContainer>
      <DisplayContainer>
        {" "}
        <Contact id="contact" />
      </DisplayContainer>
    </OuterContainer>
  );
};
export default FrontPage;

const OuterContainer = styled.div`
background-color: #081f29;
`;