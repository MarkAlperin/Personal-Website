import React from "react";
import styled from "styled-components";

const SkillCard = ({ icon }) => {
  const { href, src, alt } = icon;

  return (
    <SkillCardContainer>
      <a href={href} target="blank" rel="noopener noreferrer">

          <StyledImg src={src} alt={alt} />


        <StyledP>{alt}</StyledP>
      </a>
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
  border: 1.5px solid whitesmoke;
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);
  height: 80px;
  width: 80px;
  margin: 20px;
  padding: 5px;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  `;

const StyledP = styled.p`
  font-size: 12px;
  font-weight: bold;
  color:
`;