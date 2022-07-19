import React, { useContext } from "react";
import styled from "styled-components";

import templates from "./templates";
import AppContext from "../context/appContext";

const SectionTitle = ({blurb, title, margin=false}) => {
  const ctx = useContext(AppContext);

  return (
    <TitleContainer ctx={ctx}>
      <BlurbContainer>
        <StyledHr ctx={ctx} margin={margin}/>
        <P2 ctx={ctx} margin={margin}>{blurb}</P2>
      </BlurbContainer>
      <P1 ctx={ctx}>{title}</P1>
    </TitleContainer>
  );
};

export default SectionTitle;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 5%;
  margin-bottom: 3%;

`;

const BlurbContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const StyledHr = styled.hr`
  width: ${({ margin }) => (margin ? "40px" : "60px")};
  height: .5px;
  background-color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.white : templates.color.grey};
`;

const P1 = styled.p`
  margin: 0 0 0 -2px;
  padding: 0;
  /* padding-top: 5rem; */
  font-size: 2rem;
  line-height: 1em;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-shadow: 0 0 1.75px ${templates.color.mid};
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.white : templates.color.grey};

`;

const P2 = styled.p`
  font-size: .9rem;
  line-height: 1em;
  font-weight: 250;
  margin-left: ${({ margin }) => margin ? "5px" : "0"};
  letter-spacing: -0.5px;
  text-shadow: 0 0 1.15px ${templates.color.mid};
  color: ${({ ctx }) =>
    ctx.darkMode ? templates.color.shadowDark : templates.color.grey};
`;
