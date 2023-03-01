import React from "react";
import styled from "styled-components";
import pizzeria from "../../assets/pizzeria.jpg";
import Main from "../main/Main";

const Homepage = () => {
  return (
    <>
      <HomeDiv />
      <Main />
    </>
  );
};

const HomeDiv = styled.div`
  background-image: url(${pizzeria});
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-color: #4a4747;
  background-blend-mode: darken;
`;

export default Homepage;
