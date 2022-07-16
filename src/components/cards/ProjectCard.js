import React from "react";
import styled from "styled-components";

import templates from "../templates";

const ProjectCard = ({ project }) => {


  return (
    <ProjectCardContainer>
      <StyledImage src='https://alexcalia.com/assets/images/slangapp.PNG'/>
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

const StyledImage = styled.img`
  width: 40;
  height: 40px;
`;

const StyledP = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  color: #081f29;
`;

const StyledA = styled.a`
  text-decoration: none;
`;
