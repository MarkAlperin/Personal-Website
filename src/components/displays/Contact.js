import React, { useContext } from "react";
import styled from "styled-components";

import templates from "../templates";
import AppContext from "../../context/appContext";
import Icons from "../icons/Icons";

const Contact = () => {
  const ctx = useContext(AppContext);

  return (
    <ContactContainer>
      <P1 ctx={ctx}>Contact </P1>
      <LeftBorderContainer ctx={ctx}>
        <P2 ctx={ctx}>Thanks for your interest in getting in touch!</P2>
        <P2 ctx={ctx}>
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
        </P2>
      </LeftBorderContainer>
      <P3 ctx={ctx}>You can learn more about me at LinkedIn or Github.</P3>
      <Icons offset={true}/>
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
  margin-top: 2.5rem;
  /* margin-bottom: 2rem; */
`;

const P1 = styled.p`
  margin: 0 0 0 -2px;
  padding: 0;
  padding-top: 5rem;
  font-size: 5rem;
  line-height: 1em;
  font-weight: 600;
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.white : templates.color.black};
`;

const P2 = styled.p`
  font-size: 1.7rem;
  line-height: 1em;
  font-weight: 150;
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.shadowDark : templates.color.grey};
`;

const P3 = styled.p`
  font-size: 1.3rem;
  line-height: 1em;
  font-weight: 150;
  margin-bottom: 2rem;
  margin-left: 5px;
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.shadowDark : templates.color.grey};
`;

const StyledA = styled.a`
  text-decoration: none;
  font-weight: 300;
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.white : templates.color.black};
`;
