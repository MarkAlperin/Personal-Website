import React from "react";
import styled from "styled-components";

import templates from "../templates";


const ProjectCard = ({ project }) => {

  return (
    <ProjectCardContainer>
      <StyledImage src={project.image}/>
      <TextContainer>
        <H3>{project.name}</H3>
        <StyledP>{project.description}</StyledP>
        <StyledP2>Tech: {project.techs.map((tech, idx) => {
          return <span key={idx}>{tech }</span>;
        })}</StyledP2>
        <StyledList>
          {project.bullets.map((bullet, idx) => {
            return <StyledLi key={idx}>{bullet}</StyledLi>;
          })}
        </StyledList>
        <ButtonLink href={project.github} target="_blank"> Repo </ButtonLink>
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
  margin-bottom: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  color: ${templates.color.dark}
`;

const StyledImage = styled.img`
  width: 40%;
  height: auto;
  border: 1.5px solid ${templates.color.light};
`;

const TextContainer = styled.div`
width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const StyledP = styled.p`
  font-size: 13px;
  /* font-weight: bold; */
  text-decoration: none;
  color: #081f29;
`;

const StyledP2 = styled.p`
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: #081f29;
`;

const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;`;

const StyledLi = styled.li`
  font-size: 13px;
  /* font-weight: bold; */
  text-decoration: none;
  color: #081f29;
  padding-bottom: 5px;
  `;

  const StyledList = styled.ul`
  padding-left: 0;
  `;