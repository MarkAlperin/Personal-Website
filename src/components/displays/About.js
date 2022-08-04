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
        passionate about clean, modular code. I write my code to be
        understandable and self-documenting. If I can accomplish
        something with less code, I will.
        <br />
        <br />
        With a background in industrial electrical systems and{" "}
        <span>
          <StyledA
            ctx={ctx}
            target="_blank"
            href="../Chronological-Military-Awards.pdf"
            alt="Alperin Military Record"
          >
            military special-ops
          </StyledA>
        </span>
        , my experience has given me a solid foundation for finding solutions to
        complex, logical problems and strong teamwork skills. After a few months
        of self-teaching, I pursued and got accepted into{" "}
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
        development with JavaScript, React, Node.js, relational and
        non-relational databases, in an AGILE environment.
        <br />
        <br />
        Right now, I am looking for a full-time software engineering role at an
        Austin-based company that emphasizes personal responsibility, continuous
        learning, and grit. I’m confident that my background and technical
        capabilities will make me a strong addition to an engineering team.
        <br />
        <br />
        When I am not coding I enjoy mountain biking, playing board games, and
        spending time with my friends, family, and lovely wife.
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
