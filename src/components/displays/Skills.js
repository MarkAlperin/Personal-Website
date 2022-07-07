import React from "react";
import styled from "styled-components";

import SkillCard from "../SkillCard";
import icons from "../../assets/techIcons";

const Skills = () => {

  return (
    <SkillsContainer>
      {icons.map((icon, idx) => {
        return <SkillCard key={idx} icon={icon} />;
      })}
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
  height: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);

`;