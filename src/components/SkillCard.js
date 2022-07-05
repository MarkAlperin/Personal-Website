import React from 'react';
import styled from 'styled-components';

const SkillCard = (props) => {
  return (
    <SkillCardContainer>
      <IconContainer/>
    </SkillCardContainer>
  )
};

export default SkillCard;

const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  dropshadow: 5px 5px 5px black;
  `;

  const IconContainer = styled.div``;