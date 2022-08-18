import React from "react";
import styled from "styled-components";

import ProjectCard from "../cards/ProjectCard";
import projects from "../../assets/projects";
import templates from "../templates";


const Projects = () => {

  return (
    <ProjectsContainer>
      {projects.map((project) => {
        return <ProjectCard key={project.name} project={project} />;
      })}
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
  width: 90%;
  padding: 5px;
  height: auto;
  background-color: ${templates.color.white};
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);
`;