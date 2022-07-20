import React from "react";
import styled from "styled-components";

import templates from "../templates";

const SkillCard = ({ icon }) => {
  const { href, src, alt } = icon;

  return (
    <SkillCardContainer  href={href} target="_blank" rel="noopener noreferrer">

        <StyledImg src={src} alt={alt} />
        <StyledP>{alt}</StyledP>

    </SkillCardContainer>
  );
};

export default SkillCard;

const SkillCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-decoration: none;
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
  };
  @media (max-width: ${templates.breakpoints.mobile}) {
    height: 70px;
    width: 70px;
    margin: 15px;
    padding: 5px;
  };
`;

const StyledImg = styled.img`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  @media (max-width: ${templates.breakpoints.mobile}) {
    width: 30px;
    height: 30px;
  };
`;

const StyledP = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  color: #081f29;
`;
