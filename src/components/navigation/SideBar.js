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
          <P>Home</P>
        </IconTextContainer>
        <IconTextContainer
          onClick={() => {
            scrollHandler("about");
          }}
        >
          <i className="fa-solid fa-user"></i>
          <P>About</P>
        </IconTextContainer>
        <IconTextContainer
          onClick={() => {
            scrollHandler("skills");
          }}
        >
          <i className="fa-solid fa-display"></i>
          <P>Skills</P>
        </IconTextContainer>
        <IconTextContainer
          onClick={() => {
            scrollHandler("projects");
          }}
        >
          <i className="fa-solid fa-briefcase"></i>
          <P>Projects</P>
        </IconTextContainer>
        <IconTextContainer
          onClick={() => {
            scrollHandler("contact");
          }}
        >
          <i className="fa-solid fa-envelope"></i>
          <P>Contact</P>
        </IconTextContainer>
      </IconContainer>
      {/* <Hidden>.</Hidden> */}
    </StyledAside>
  );
};

export default SideBar;

const StyledAside = styled.aside`
  position: absolute;
  float: right;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ ctx }) => (ctx.showMenu ? "33px" : "0px")};
  height:  ${({ ctx }) => (ctx.showMenu ? "33vh" : "0px")};
  background-color: ${({ctx}) => ctx.darkMode ? templates.color.black : templates.color.black};
  /* position: fixed; */
  color: ${templates.color.white};
  transition: all 0.3s ease-in;
  z-index: 1000;
  top: 0px;
  &:hover {
    width: 200px;
  }
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
  &:hover {
    cursor: pointer;
    background-color: ${templates.color.mid};
    box-shadow: 0px 0px 10px ${templates.color.light};
  }
`;

const P = styled.p`
  margin-left: 20px;
  font-size: 0.8rem;
`;
