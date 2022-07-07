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

  color: {
    accent: "#687864",
    dark: "#31708E",
    mid: "#5085A5",
    light: "#8FC1E3",
    white: "whitesmoke", // "#F7F9FB",
    shadowLight: "#C3D1D6",
    shadowDark: "#A1ACB0 "
  },
}

export default templates;