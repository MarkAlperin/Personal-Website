import React, { useState } from "react";
import styled from "styled-components";

import logo from "../logo.svg";
import "../App.css";

const Header = (props) => {
  const [lastClicked, setLastClicked] = useState(null);

  const resumeButtonHandler = () => {};

  return (
    <StyledHeader>
      <img src={logo} className="App-logo" alt="logo" />
      <NavigationContainer>
        <LinkContainer>
          <StyledLink to="/About">About</StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/About">Experience</StyledLink>
        </LinkContainer>{" "}
        <LinkContainer>
          <StyledLink to="/About">Projects</StyledLink>
        </LinkContainer>{" "}
        <LinkContainer>
          <StyledLink to="/About">Contact</StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledButton onClick={resumeButtonHandler}>Resume</StyledButton>
        </LinkContainer>
      </NavigationContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.h3`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
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

const StyledLink = styled.a`
  margin-right: 8%%;
  width: auto;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  /* margin-right: 10%; */
`;
