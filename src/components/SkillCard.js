import React from "react";
import styled from "styled-components";

const SkillCard = ({ icon }) => {
  const { href, src, alt } = icon;

  return (
    <SkillCardContainer>
      <a href={href} target="blank" rel="noopener noreferrer">
        <IconContainer>
          <img src={src} alt={alt} />
        </IconContainer>

        <p>{alt}</p>
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
  border: 1px solid whitesmoke;
  dropshadow: 5px 5px 5px black;
  height: 50px;
  width: 50px;
`;

const IconContainer = styled.div`
padding: 5px;
  object-fit: contain;
`;
