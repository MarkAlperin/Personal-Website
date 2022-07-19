import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
import templates from "../templates";

const About = () => {
  const ctx = useContext(AppContext);

  return (
    <AboutContainer>
      <StyledP ctx={ctx}>
        I am a full-stack software engineer living in Austin Texas. I have a
        background in industrial electrical systems and my experience has given
        me a strong foundation for finding solutions to complex logical
        problems. Recently I graduated from the{" "}
        <span>
          <StyledA
            ctx={ctx}
            href="https://www.hackreactor.com/coding-bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hack Reactor Software Engineering Immersive Bootcamp
          </StyledA>
        </span>
        , where I discovered a passion for coding and solving problems through
        code. I am currently looking for positions in the Austin area.
        <br />
        <br />
        Prior to coding I was a sailor for the American Merchant Fleet and
        before that I was a paratrooper in the 3/75th Ranger Regiment. I am a
        veteran of five special-operations tours to Afghanistan and Iraq and my
        significant decorations include the Bronze Star Medal with ‘Valor’
        device, Soldier’s Medal, Army Commendation Medal x2, Army Achievement
        Medal, Ranger Tab. When I am not coding I enjoy rock climbing, playing
        board games, and spending time with my friends, family, and lovely wife.
        <br /><br />
        Feel free to reach out and contact me!
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
