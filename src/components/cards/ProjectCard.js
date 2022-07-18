import React from "react";
import styled from "styled-components";

import templates from "../templates";

const ProjectCard = ({ project }) => {


  return (
    <ProjectCardContainer>
      <StyledImage src='https://alexcalia.com/assets/images/slangapp.PNG'/>
      <TextContainer>
        <H3>{project.name}</H3>
        <StyledP>{project.description}</StyledP>
        <StyledP>Tech: {project.technologies.map((tech, idx) => {
          return <span key={idx}>{tech}</span>;
        })}</StyledP>
        <ul>
          {project.bullets.map((bullet, idx) => {
            return <li key={idx}>{bullet}</li>;
          })}
        </ul>
        <ButtonLink href={project.github}/>
      </TextContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  border: 1.5px solid ${templates.color.white};
  box-shadow: 0px 3px 6px ${templates.color.shadowLight};
  width: 90%;
  margin: 20px;
  padding: 5px;
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 10px 10px 10px ${templates.color.shadowDark},
      0px 3px 6px ${templates.color.dark};
  }
`;

const ButtonLink = styled.a`

`;

const StyledImage = styled.img`
  width: 40;
  height: 40px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const StyledP = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  color: #081f29;
`;

const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;`;
