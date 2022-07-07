import styled from "styled-components";


const height = window.innerHeight;

const templates = {

  DisplayContainer: styled.div`
    height: ${height}px;
    margin-left: 105px;
    padding-left: 10%
    padding-right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-behavior: smooth;
  `,

  colorDark: "#081f29",
  colorLight: "#f2f2f2",
  boxShadowColor: "#cad1d9",
}

export default templates;