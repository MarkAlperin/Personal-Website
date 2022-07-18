import React, { useState } from "react";
import styled from "styled-components";

import logo from "../assets/logo.svg";
import templates from "./templates";
import "../App.css";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const scrollHandler = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const enterHandler = () => {
    setShowSideBar(true);
  };

  const leaveHandler = () => {
    setShowSideBar(false);
  };

  return (
    <StyledAside onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
      <StyledImg src={logo} />
      <IconContainer>
        <IconTextContainer onClick={() => {scrollHandler("home")}}>
          <i className="fa-solid fa-house fa-lg" ></i>
          {showSideBar && <P>Home</P>}
        </IconTextContainer>
        <IconTextContainer  onClick={() => {scrollHandler("about")}}>
          <i className="fa-solid fa-user fa-lg"></i>
          {showSideBar && <P>About</P>}
        </IconTextContainer>
        <IconTextContainer onClick={() => {scrollHandler("skills")}}>
          <i className="fa-solid fa-display fa-lg"></i>
          {showSideBar && <P>Skills</P>}
        </IconTextContainer>
        <IconTextContainer onClick={() => {scrollHandler("projects")}}>
          <i className="fa-solid fa-briefcase fa-lg"></i>
          {showSideBar && <P>Projects</P>}
        </IconTextContainer>
        <IconTextContainer onClick={() => {scrollHandler("contact")}}>
          <i className="fa-solid fa-envelope fa-lg"></i>
          {showSideBar && <P>Contact</P>}
        </IconTextContainer>
      </IconContainer>
      <Hidden>.</Hidden>
    </StyledAside>
  );
};

export default SideBar;

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 105px;
  height: 100vh;
  background-color: ${templates.color.black};
  border-right: 1.2px solid ${templates.color.light};
  position: fixed;
  color: ${templates.color.white};
  transition: all 0.3s ease-in;
  z-index: 10;
  &:hover {
    width: 200px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 300px;
  transition: all 0.3s ease-in;
`;

const StyledImg = styled.img`
  height: 10vmin;
  pointer-events: none;
`;

const Hidden = styled.p`
  color: #081f29;
`;

const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  padding-left: 10px;
  width: 120px;
  border-radius: 5px;
  transition: all 0.3s ease-in;
  &:hover {
    cursor: pointer;
    background-color: ${templates.color.mid};
    box-shadow: 0px 0px 10px ${templates.color.light};
  }
`;

const P = styled.p`
  margin-left: 20px;
  font-size: .8rem;

`;