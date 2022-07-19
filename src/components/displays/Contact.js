import React, { useContext } from "react";
import styled from "styled-components";

import templates from "../templates";
import AppContext from "../../context/appContext";
import GithubIcon from "../../assets/github.svg";
import LinkedInIcon from "../../assets/linkedin.svg";

const Contact = () => {
  const ctx = useContext(AppContext);

  return (
    <ContactContainer>
      <P1 ctx={ctx}>Contact </P1>
      <LeftBorderContainer ctx={ctx}>
        <P2 ctx={ctx}>Thanks for your interest in getting in touch!</P2>
        <P3 ctx={ctx}>
          The best way to reach me is by email at{" "}
          <span>
            <StyledA
              ctx={ctx}
              target="blank"
              href="mailto:mark.t.alperin@gmail.com"
            >
              mark.t.alperin@gmail.com
            </StyledA>
          </span>
          .
        </P3>
      </LeftBorderContainer>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const LeftBorderContainer = styled.div`
  border-left: 2px solid
    ${({ ctx }) =>
      ctx.darkMode ? templates.color.white : templates.color.black};
  padding-left: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const P1 = styled.p`
  margin: 0 0 0 -2px;
  padding: 0;
  font-size: 5rem;
  line-height: 1em;
  font-weight: 600;
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.white : templates.color.black};
`;

const P2 = styled.p`
  font-size: 1.8rem;
  line-height: 1em;
  font-weight: 150;
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.shadowDark : templates.color.grey};
`;

const P3 = styled.p`
  font-size: 1.8rem;
  line-height: 1em;
  font-weight: 150;
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.shadowDark : templates.color.grey};
`;

const StyledA = styled.a`
  text-decoration: none;
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.white : templates.color.black};
`;

// const ResumeButton = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 150px;
//   height: 45px;
//   border-radius: 5px;
//   margin-right: 25px;
//   background-color: ${templates.color.shadowDark};
//   color: ${templates.color.white};
//   box-shadow: 2.5px 2.5px 5px ${templates.color.shadowDark};
//   transition: all 0.3s ease-in;
//   &:hover {
//     box-shadow: 10px 10px 10px ${templates.color.shadowDark},
//       0px 0px 6px ${templates.color.dark};
//   }
// `;
