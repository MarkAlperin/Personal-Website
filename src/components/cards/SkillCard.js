import React from "react";
import styled from "styled-components";

import templates from "../templates";

const SkillCard = ({ icon }) => {
  console.log({icon})
  const { href, src, alt } = icon;

  return (
    <SkillCardContainer>
      <StyledA href={href} target="blank" rel="noopener noreferrer">
        <StyledImg src={src} alt={alt} />
        <StyledP>{alt}</StyledP>
      </StyledA>
    </SkillCardContainer>
  );
};

export default SkillCard;

const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1.5px solid ${templates.color.white};
  box-shadow: 0px 3px 6px ${templates.color.shadowLight};
  height: 80px;
  width: 80px;
  margin: 20px;
  padding: 5px;

  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 10px 10px 10px ${templates.color.shadowDark},
      0px 3px 6px ${templates.color.dark};
  }
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledP = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  color: #081f29;
`;

const StyledA = styled.a`
  text-decoration: none;
`;
