import React from 'react';
import styled from 'styled-components';


const Fallback = () => {
  return (
    <FallbackContainer>
      <h2>Loading...</h2>
    </FallbackContainer>
  );
};

export default React.memo(Fallback);

const FallbackContainer = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 10%;
  padding-top: 5%;
  padding-left: 10%
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
`;