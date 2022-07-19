import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";

const About = () => {
  const ctx = useContext(AppContext);

  return (
    <AboutContainer>
      <StyledP>
        I am a full-stack software engineer from Austin Texas. I have a
        background in troubleshooting industrial electrical systems and my
        experience has given me a strong foundation for analyzing complex
        logical systems. Recently I graduated from the{" "}
        <span>
          <StyledA
            href="https://www.hackreactor.com/coding-bootcamp"
            target="blank"
          >
            Hack Reactor Software Engineering Immersive Bootcamp
          </StyledA>
        </span>
        . I am passionate about coding and solving problems through code and I
        am currently looking for a posiiton in the Austin area.
      </StyledP>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
  padding: 5px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);
`;

const StyledP = styled.p``;

const StyledA = styled.a`
  text-decoration: none;
`;
