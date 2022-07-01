import styled from "styled-components";


const height = window.innerHeight;

const templates = {

  DisplayContainer: styled.div`
    height: ${height}px;
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-behavior: smooth;
  `,
}

export default templates;