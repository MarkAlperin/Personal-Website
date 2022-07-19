import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import templates from "./templates";
import AppContext from "../context/appContext";

const NavHeader = (props) => {
  const ctx = useContext(AppContext);

  const scrollHandler = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHeader ctx={ctx}>
      <StyledName
        ctx={ctx}
        onClick={() => {
          scrollHandler("home");
        }}
      >
        Mark Alperin
      </StyledName>

      <StyledP
        ctx={ctx}
        onClick={() => {
          scrollHandler("about");
        }}
      >
        ABOUT
      </StyledP>
      <StyledP
        ctx={ctx}
        onClick={() => {
          scrollHandler("skills");
        }}
      >
        SKILLS
      </StyledP>
      <StyledP
        ctx={ctx}
        onClick={() => {
          scrollHandler("projects");
        }}
      >
        PROJECTS
      </StyledP>
      <StyledP
        ctx={ctx}
        onClick={() => {
          scrollHandler("contact");
        }}
      >
        CONTACT
      </StyledP>
      <StyledA ctx={ctx} target="blank" href="../Mark-Alperin-Resume.pdf" alt="Mark Alperin Resume">
        RESUME
      </StyledA>
      <Outlet />
    </StyledHeader>
  );
};

export default NavHeader;

const StyledHeader = styled.div`
  width: 100%;
  height: ${({ ctx }) => (ctx.darkMode ? "100px" : "0px")};
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${templates.color.black};
  transition: all 0.6s ease-in-out;
`;

const StyledName = styled.p`
  margin-left: 4%;
  margin-right: 2%;
  visibility: ${({ ctx }) => (ctx.darkMode ? "visible" : "hidden")};
  width: auto;
  padding: 12px 0;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-transform: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const StyledP = styled.p`
  margin-left: 2%;
  padding: 12px 0;
  visibility: ${({ ctx }) => (ctx.darkMode ? "visible" : "hidden")};
  width: auto;
  color: ${templates.color.shadowDark};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${templates.color.white};
    border-bottom: 0.5px solid ${templates.color.white};
  }
`;

const StyledA = styled.a`
  margin-left: 2%;
  padding: 12px 0;
  visibility: ${({ ctx }) => (ctx.darkMode ? "visible" : "hidden")};
  text-decoration: none;
  width: auto;
  color: ${templates.color.shadowDark};
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  border-bottom: 0px solid ${templates.color.white};
  &:hover {
    color: ${templates.color.white};
    border-bottom: 0.5px solid ${templates.color.white};
  }
  &:after {
    content: "";
    height: 10px;
    width: 100px;
    background: ${templates.color.mid};
    border-radius: 10px;
    box-shadow: 0px 0px 2px black;
  }
`;
