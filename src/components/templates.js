import styled from "styled-components";

const height = window.innerHeight;

const templates = {
  DisplayContainer: styled.div`
    height: ${height}px;
    /* margin-left: 105px; */
    padding-left: 10%
    padding-right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-behavior: smooth;
  `,

  // CLEAN AND MODERN (teals)
  color: {
    accent: "#31708E",
    dark: "#2B7A78",
    mid: "#3AAFA9",
    light: "#DEF2F1",
    white: "#FEFFFF", // "#F7F9FB",
    shadowLight: "#C3D1D6",
    shadowDark: "#A1ACB0 ",
    darker: "#17252A",
    black: "black",
    grey: "#343536"
  },

  // MODERNITY IN FULL BLOOM (greens)
  // color: {
  //   accent: "#687864",
  //   dark: "#3B945E",
  //   mid: "#57BA98",
  //   light: "#65CCB8",
  //   white: "#F2F2F2", // "#F7F9FB",
  //   shadowLight: "#C3D1D6",
  //   shadowDark: "#A1ACB0 ",
  //   black: "#182628",
  // },

  // CLOSE TO NATURE (blues, w/ brown)
  // color: {
  //   accent: "#687864",
  //   dark: "#31708E",
  //   mid: "#5085A5",
  //   light: "#8FC1E3",
  //   white: "whitesmoke", // "#F7F9FB",
  //   shadowLight: "#C3D1D6",
  //   shadowDark: "#A1ACB0 ",
  //   black: "#19181A",
  // },

  // CLEAN AND ENERGETIC (blues w/ purple)
  // color: {
  //   accent: "#8860D0",
  //   dark: "#5680E9",
  //   mid: "#5AB9EA",
  //   light: "#84CEEB",
  //   white: "#C1C8E4",
  //   shadowLight: "#C3D1D6",
  //   shadowDark: "#A1ACB0",
  //   black: "#19181A"
  // }

  // MODERN AND MINIMALIST (green tan nantucket)
  // color: {
  //   accent: "#8C9E8E",
  //   dark: "#479761",
  //   mid: "#A16E83",
  //   light: "#CEBC81",
  //   white: "#B19F9E",
  //   shadowLight: "#C3D1D6",
  //   shadowDark: "#A1ACB0",
  //   black: "#19181A"
  // }
};

export default templates;
