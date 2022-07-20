import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
import templates from "../templates";

const About = () => {
  const ctx = useContext(AppContext);

  return (
    <AboutContainer>
      <StyledP ctx={ctx}>
        I am a full-stack software engineer living in Austin, Texas. I'm
        passionate about clean, modular code. I write my code to be clear,
        concise, and understandable, with variables clear enough to be
        self-documenting and files that typically don’t exceed 60 lines of code.
        If I ever spot something that can be done with less code, I refactor it
        for readability and smooth debugging.
        <br />
        <br />
        With a background in industrial electrical systems and military special
        ops, my experience has given me a solid foundation for finding solutions
        to complex, logical problems and strong teamwork skills. After a few
        months of self-teaching, I pursued and got accepted into the{" "}
        <span>
          <StyledA
            ctx={ctx}
            href="https://www.hackreactor.com/coding-bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hack Reactor
          </StyledA>
        </span>
        , a 12-week advanced software engineering immersive program consisting
        of 1000+ hours of coding. Through this experience, I learned full-stack
        development with JavaScript, React, Express, PostgreSQL, MongoDB, and
        MySQL in an AGILE environment.
        <br />
        <br />
        Right now, I am currently looking for a full-time software engineering
        role at an Austin-based company that emphasizes/values XYZ. I’m
        confident that my background and technical capabilities will make me a
        strong addition to an engineering team.
        <br />
        <br />
        Personally, when I am not coding I enjoy rock climbing, playing board
        games, and spending time with my friends, family, and lovely wife.
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
  /* margin: 10%;
  padding: 10%; */
  height: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);
`;

const StyledP = styled.p`
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.white : templates.color.black};
  font-size: 1.3rem;
  line-height: 1.75em;
  font-weight: 400;
  margin-bottom: 2rem;
  margin: 5%;
`;

const StyledA = styled.a`
  text-decoration: none;
  font-weight: 625;
  color: ${templates.color.dark};
  text-shadow: 0px 0px 2px ${templates.color.shadowLight};
  cursor: pointer;
  transition: all 0.4s ease-in;
  &:hover {
    color: ${templates.color.mid};
    text-shadow: 0px 0px 1px ${templates.color.shadowDark};
  }
`;
