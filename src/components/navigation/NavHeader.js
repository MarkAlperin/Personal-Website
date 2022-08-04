import React, { useContext } from "react";
import styled from "styled-components";

import templates from "../templates";
import AppContext from "../../context/appContext";


const NavHeader = () => {
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
      <StyledInitials
        ctx={ctx}
        onClick={() => {
          scrollHandler("home");
        }}
      >
        MA
      </StyledInitials>

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
      <StyledA
        ctx={ctx}
        target="_blank"
        href="../Mark-Alperin-Resume.pdf"
        alt="Mark Alperin Resume"
      >
        RESUME
      </StyledA>
      <HamburgerContainer ctx={ctx} onClick={() => {
        ctx.setShowMenu(!ctx.showMenu);
      }}>
        {!ctx.showMenu && <i className="fa-solid fa-bars fa-lg"></i>}
        {ctx.showMenu && <i className="fa-solid fa-xmark fa-lg"></i>}
      </HamburgerContainer>
    </StyledHeader>
  );
};

export default NavHeader;

const StyledHeader = styled.div`
  width: 100%;
  z-index: 100;
  height: ${({ ctx }) => (ctx.darkMode ? "6.5%" : "4%")};
  min-height: ${({ ctx }) => (ctx.darkMode ? "100px" : "60px")};
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${templates.color.black};
  transition: all 0.6s ease-in-out;
  @media (max-width: ${templates.breakpoints.mobile}) {
    justify-content: space-between;

  };
`;

const StyledName = styled.p`
  margin-left: 4%;
  margin-right: 2%;
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
  @media (max-width: ${templates.breakpoints.mobile}) {
    display: none;
  } ;
`;
const StyledInitials = styled.p`
  margin-left: 4%;
  margin-right: 2%;
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
  @media (min-width: ${templates.breakpoints.mobile}) {
    display: none;
  } ;
`;

const StyledP = styled.p`
  margin-left: 2%;
  padding: 12px 0;
  width: auto;
  color: ${templates.color.shadowDark};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${templates.color.white};
    border-bottom: 0.5px solid ${templates.color.white};
  }
  @media (max-width: ${templates.breakpoints.mobile}) {
    display: none;
  } ;
`;

const StyledA = styled.a`
  margin-left: 2%;
  padding: 12px 0;
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
  @media (max-width: ${templates.breakpoints.mobile}) {
    display: none;
  } ;
`;

const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: auto;
  border-radius: 3px;
  transition: all 0.3s ease-in;
  color: white;
  @media (min-width: ${templates.breakpoints.mobile}) {
    display: none;
  } ;
`;
