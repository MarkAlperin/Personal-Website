import React, { useContext } from "react";
import styled from "styled-components";

import templates from "../templates";
import AppContext from "../../context/appContext";
// import "../App.css";

const SideBar = () => {
  const ctx = useContext(AppContext);

  const scrollHandler = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    ctx.setShowMenu(false);
  };

  return (
    <StyledAside ctx={ctx}>
      <IconContainer>
        <IconTextContainer
          onClick={() => {
            scrollHandler("home");
          }}
        >
          <i className="fa-solid fa-house"></i>
          <P>HOME</P>
        </IconTextContainer>
        <IconTextContainer
          onClick={() => {
            scrollHandler("about");
          }}
        >
          <i className="fa-solid fa-user"></i>
          <P>ABOUT</P>
        </IconTextContainer>
        <IconTextContainer
          onClick={() => {
            scrollHandler("skills");
          }}
        >
          <i className="fa-solid fa-display"></i>
          <P>SKILLS</P>
        </IconTextContainer>
        <IconTextContainer
          onClick={() => {
            scrollHandler("projects");
          }}
        >
          <i className="fa-solid fa-briefcase"></i>
          <P>PROJECTS</P>
        </IconTextContainer>
        <IconTextContainer
          onClick={() => {
            scrollHandler("contact");
          }}
        >
          <i className="fa-solid fa-envelope"></i>
          <P>CONTACT</P>
        </IconTextContainer>
      </IconContainer>
      {/* <Hidden>.</Hidden> */}
    </StyledAside>
  );
};

export default SideBar;

const StyledAside = styled.aside`
  position: fixed;
  /* float: right; */
  right: 0;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ ctx }) => (ctx.showMenu ? "30%" : "0px")};
  height: 50%;
  background-color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.black : templates.color.white};
  /* position: fixed; */
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.white : templates.color.black};
  transition: all 0.3s ease-in;
  z-index: 50;
  top: 0px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 400px;
  padding-top: 100px;
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
`;

const P = styled.p`
  margin-left: 20px;
  font-size: 0.8rem;
`;

