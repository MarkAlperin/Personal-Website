import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

import logo from "../logo.svg";
import "../App.css";

const NavHeader = (props) => {
  const [lastClicked, setLastClicked] = useState(null);

  const resumeButtonHandler = () => {};

  return (
    <StyledHeader>
      <img src={logo} className="App-logo" alt="logo" />
      <NavigationContainer>
        <LinkContainer>
          <StyledA to="#about">About</StyledA>
        </LinkContainer>
        <LinkContainer>
          <StyledA to="#experience">Experience</StyledA>
        </LinkContainer>
        <LinkContainer>
          <StyledA to="#projects">Projects</StyledA>
        </LinkContainer>
        <LinkContainer>
          <StyledA to="#contact">Contact</StyledA>
        </LinkContainer>
        <LinkContainer>
          <StyledLinkContainer>
            <Link to="/resume">Resume</Link>
          </StyledLinkContainer>
        </LinkContainer>
      </NavigationContainer>
      <Outlet />
    </StyledHeader>
  );
};

export default NavHeader;

const StyledHeader = styled.h3`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #081f29;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2%;
  width: 30%;
`;

const LinkContainer = styled.div`
  margin-right: 8%;
`;

const StyledA = styled.a`
  margin-right: 8%%;
  width: auto;
`;

const StyledLinkContainer = styled.div`
  background-color: #4caf50;
  /* margin-right: 10%; */
`;
