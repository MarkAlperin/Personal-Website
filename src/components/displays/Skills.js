import React from "react";
import styled from "styled-components";

import SkillCard from "../SkillCard";
import icons from "../../assets/techIcons";

const Skills = () => {
  console.log(icons)
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
  dropshadow: 5px 5px 5px black;

`;