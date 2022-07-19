import React from "react";
import styled from "styled-components";

// import templates from "./templates";
import GithubIcon from ".//GithubIcon";
import LinkedinIcon from ".//LinkedinIcon";

const Icons = ({offset}) => {
  return (
    <LinksContainer offset={offset}>
      <LinkedinIcon />
      <GithubIcon />
    </LinksContainer>
  );
};

export default Icons;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${({ offset }) => (offset ? "170px" : "130px")};
  margin-left: ${({ offset }) => offset ? "60px" : "0"};
`;
