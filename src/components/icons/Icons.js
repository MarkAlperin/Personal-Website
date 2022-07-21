import React from "react";
import styled from "styled-components";

import templates from "../templates";
import GithubIcon from ".//GithubIcon";
import LinkedinIcon from ".//LinkedinIcon";

const Icons = ({offset}) => {
  return (
    <LinksContainer offsetIcons={offset}>
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
  width: ${({ offsetIcons }) => (offsetIcons ? "170px" : "130px")};
  margin-left: ${({ offsetIcons }) => offsetIcons ? "12%" : "0"};
  margin-top: ${({ offsetIcons }) => offsetIcons ? ".5rem" : "0"};
  @media (max-width: ${templates.breakpoints.mobile}) {
    margin-left: 0;
  };
`;
