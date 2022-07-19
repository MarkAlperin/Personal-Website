import React from "react";
import styled from "styled-components";

import templates from "../templates";
import GithubIcon from "../../assets/github.svg";
import LinkedInIcon from "../../assets/linkedin.svg";


const Contact = () => {

  return (
    <div>
      <p>Here is how you can reach me</p>
    </div>
  );
};

export default Contact;

// const ResumeButton = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 150px;
//   height: 45px;
//   border-radius: 5px;
//   margin-right: 25px;
//   background-color: ${templates.color.shadowDark};
//   color: ${templates.color.white};
//   box-shadow: 2.5px 2.5px 5px ${templates.color.shadowDark};
//   transition: all 0.3s ease-in;
//   &:hover {
//     box-shadow: 10px 10px 10px ${templates.color.shadowDark},
//       0px 0px 6px ${templates.color.dark};
//   }
// `;