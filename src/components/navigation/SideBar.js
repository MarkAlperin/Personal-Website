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
    <>
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
          <ResumeTextContainer
            ctx={ctx}
            target="_blank"
            href="../Mark-Alperin-Resume.pdf"
            alt="Mark Alperin Resume"
          >
            <i className="fa-solid fa-scroll"></i>
            <P>RESUME</P>
          </ResumeTextContainer>
        </IconContainer>
      </StyledAside>
      <HiddenDiv ctx={ctx} onClick={() => ctx.setShowMenu(false)} />
    </>
  );
};

export default SideBar;

const StyledAside = styled.aside`
  position: fixed;
  right: -3px;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: ${({ ctx }) => (ctx.showMenu ? "37%" : "0px")};
  height: auto;
  background-color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.black : templates.color.white};
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.shadowLight : templates.color.grey};
  transition: all 0.3s ease-in;
  border: 1px solid
    ${({ ctx }) =>
      ctx.darkMode ? templates.color.shadowLight : templates.color.grey};
  border-bottom-left-radius: ${templates.borderRadius};
  z-index: 50;
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

const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8%;
  padding-left: 10px;
  width: 120px;
  transition: all 0.3s ease-in;
`;

const ResumeTextContainer = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 8%;
  padding-left: 10px;
  width: 120px;
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.shadowLight : templates.color.grey};
  transition: all 0.3s ease-in;
`;

const P = styled.p`
  margin-left: 20px;
  font-size: 0.8rem;
`;

const HiddenDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 49;
  display: ${({ ctx }) => (ctx.showMenu ? "block" : "none")};
`;
