import React from "react";
import styled from "styled-components";

import templates from "../templates";
import githubIcon from "../../assets/github.svg";

const GithubIcon = () => {
  return (
    <IconContainer
      href="https://www.github.com/markalperin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledGithub src={githubIcon} />
    </IconContainer>
  );
};

export default GithubIcon;

const IconContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  padding: 6px;
  box-shadow: 1px 1px 2px ${templates.color.shadowDark};
  background-color: ${templates.color.shadowLight};
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 5px 5px 5px ${templates.color.shadowDark},
      0px 0px 3px ${templates.color.dark};
  }
`;

const StyledGithub = styled.img`
  width: 30px;
  height: 30px;
  background-color: ${templates.color.white};
  border-radius: 50%;
`;
