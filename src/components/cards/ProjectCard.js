import React from "react";
import styled from "styled-components";

import templates from "../templates";
import useImage from "../../hooks/useImage"


const ProjectCard = ({ project }) => {

  const imageS = useImage(project.imageS).image;
  const imageL = useImage(project.imageL).image;

  return (
    <ProjectCardContainer>
      <H3a href={project.github} target="_blank">
        {project.name}
      </H3a>
      <StyledImage
        src={imageS}
        srcSet={`${imageS} 400w, ${imageL} 1280w`}
        alt={project.alt}
      />
      <TextContainer>
        <H3 href={project.github} target="_blank">
          {project.name}
        </H3>
        <StyledP>{project.description}</StyledP>
        <StyledP2>
          Tech:{" "}
          {project.techs.map((tech, idx) => {
            return <TechSpan key={idx}>{tech}</TechSpan>;
          })}
        </StyledP2>
        <StyledList>
          {project.bullets.map((bullet, idx) => {
            return <StyledLi key={idx}>{bullet}</StyledLi>;
          })}
        </StyledList>
        <ButtonLink href={project.github} target="_blank">
          {" "}
          Repo{" "}
        </ButtonLink>
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
  border-radius: ${templates.borderRadius};
  border: 1px solid ${templates.color.shadowDark};
  box-shadow: 0px 3px 6px ${templates.color.shadowLight};
  background-color: ${templates.color.whitesmoke};
  width: 90%;
  margin: 2%;
  padding: 0.75%;
  transition: all 0.3s ease-in;
  /* cursor: pointer; */
  /* &:hover {
    box-shadow: 10px 10px 10px ${templates.color.shadowDark},
    0px 3px 6px ${templates.color.dark};
  } */
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const ButtonLink = styled.a`
  margin-bottom: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  color: ${templates.color.mid};
  text-shadow: 0 0 1.15px ${templates.color.shadowDark};

  @media (max-width: ${templates.breakpoints.mobile}) {
    align-self: center;
  } ;
`;

const StyledImage = styled.img`
  width: 40%;
  @media (max-width: ${templates.breakpoints.tablet}) {
    width: 90%;
    margin-top: 1.5%;
  }
  height: auto;
  border: 1.5px solid ${templates.color.light};
`;

const TextContainer = styled.div`
  width: 40%;
  @media (max-width: ${templates.breakpoints.tablet}) {
    width: 90%;
  }
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

const H3 = styled.a`
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  @media (max-width: ${templates.breakpoints.mobile}) {
    display: none;
  }
  cursor: pointer;
  transition: all 0.3s ease-in;
  color: ${templates.color.black};
  &:hover {
    color: ${templates.color.mid};
    text-shadow: 0px 0px 2px ${templates.color.shadowDark};
  }
`;

const H3a = styled.a`
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  @media (min-width: ${templates.breakpoints.mobile}) {
    display: none;
  }
  color: ${templates.color.black};
`;

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

const TechSpan = styled.span`
  color: ${templates.color.dark};
  text-shadow: 0px 0px 2px ${templates.color.shadowLight};
`;
