import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo.svg";
import "../App.css";

const NavHeader = (props) => {
  const [lastClicked, setLastClicked] = useState(null);

  const scrollHandler = (id) => {
    setLastClicked(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHeader>
      <img src={logo} className="App-logo" alt="logo" />

      <NavigationContainer>
        <LinkContainer>
          <StyledP
            onClick={() => {
              scrollHandler("about");
            }}
          >
            About
          </StyledP>
        </LinkContainer>
        <LinkContainer>
          <StyledP
            onClick={() => {
              scrollHandler("experience");
            }}
          >
            Experience
          </StyledP>
        </LinkContainer>
        <LinkContainer>
          <StyledP
            onClick={() => {
              scrollHandler("projects");
            }}
          >
            Projects
          </StyledP>
        </LinkContainer>
        <LinkContainer>
          <StyledP
            onClick={() => {
              scrollHandler("contact");
            }}
          >
            Contact
          </StyledP>
        </LinkContainer>
        <div>
          {/* <Link to="/resume">Resume</Link> */}
          <a href="../resume.pdf">Resume</a>
        </div>
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
  color: white;
`;

const StyledP = styled.p`
  margin-right: 8%;
  width: auto;
  color: inherit;
  cursor: pointer;
  &:hover {
    color: #cab1fa;
  }
`;

const StyledLinkContainer = styled.div`
  color: white;
`;
