import React, { useContext } from "react";
import styled from "styled-components";

import SkillCard from "../cards/SkillCard";
import icons from "../../assets/techIcons";
import templates from "../templates";
import AppContext from "../../context/appContext";

const Skills = () => {
  const ctx = useContext(AppContext);

  return (
    <SkillsContainer>
      <ColumnTitle ctx={ctx}>Front-End</ColumnTitle>
      <SectionContainer>

          <TitleContainer>
            <P2 ctx={ctx}>Front-End</P2>
          </TitleContainer>
        <IconsContainer>
          {icons.front.map((icon, idx) => {
            return <SkillCard key={idx} icon={icon} />;
          })}
        </IconsContainer>
      </SectionContainer>
      <ColumnTitle ctx={ctx}>Back-End</ColumnTitle>
      <SectionContainer>
        <TitleContainer>
          <P2 ctx={ctx}>Back-End</P2>
        </TitleContainer>
        <IconsContainer>
          {icons.back.map((icon, idx) => {
            return <SkillCard key={idx} icon={icon} />;
          })}
        </IconsContainer>
      </SectionContainer>
      <ColumnTitle ctx={ctx}>Deployment & Testing</ColumnTitle>
      <SectionContainer>
          <TitleContainer>
            <P2 ctx={ctx}>Deployment</P2>
            <P2 ctx={ctx}>Testing</P2>
          </TitleContainer>
        <IconsContainer>
          {icons.development.map((icon, idx) => {
            return <SkillCard key={idx} icon={icon} />;
          })}
        </IconsContainer>
      </SectionContainer>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
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
  @media (max-width: ${templates.breakpoints.tablet}) {
    flex-direction: column;
  };
`;

const ColumnTitle = styled.p`
  font-size: 1.1rem;
  line-height: 0em;
  font-weight: 500;
  align-self: center;
  margin-left: ${({ margin }) => (margin ? "5px" : "0")};
  letter-spacing: -0.5px;
  text-shadow: 0 0 1.15px ${templates.color.shadowDark};
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.shadowDark : templates.color.grey};
  @media (min-width: ${templates.breakpoints.tablet}) {
    display: none;
  };
`;

const P2 = styled.p`
  font-size: .9rem;
  line-height: 0em;
  font-weight: 400;
  margin-left: ${({ margin }) => (margin ? "5px" : "0")};
  letter-spacing: -0.5px;
  text-shadow: 0 0 1.15px ${templates.color.shadowDark};
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.shadowDark : templates.color.grey};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 80px;
  width: 80px;
  max-width: 80px;
  margin: 20px;
  padding: 3px;
  @media (max-width: ${templates.breakpoints.tablet}) {
    display: none;
  };
`;

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  justify-content: flex-start;
  height: auto;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* @media (max-width: ${templates.breakpoints.tablet}) {
    justify-content: center;
  }; */
  width: 100%;
  height: auto;
`;
