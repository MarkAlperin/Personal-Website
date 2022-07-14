import React from "react";
import styled from "styled-components";

import SkillCard from "../cards/SkillCard";
import projects from "../../assets/projects";


const Projects = () => {

  return (
    <ProjectsContainer>
      {projects.map((project, idx) => {
        return <SkillCard key={idx} project={project} />;
      })}
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);
`;