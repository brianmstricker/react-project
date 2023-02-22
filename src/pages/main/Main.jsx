import React from "react";
import styled from "styled-components";
import burger from "../../assets/burger.jpg";
import pasta from "../../assets/pasta.jpg";

const MainDiv = styled.div`
  height: 80vh;
  display: flex;
`;
const OpenDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 5rem;
  margin-top: 3rem;
`;
const BurgerImg = styled.img`
  width: 60%;
  height: 40%;
  margin: 20px;
  margin-left: 7rem;
  object-fit: cover;
  object-position: right;
  overflow: auto;
  float: none;
  @media (max-width: 1100px) {
    transition: 1s ease;
    object-position: 75% 20px;
  }
  @media (min-width: 1001px) {
    transition: 1s ease;
  }
  @media (max-width: 900px) {
    margin: 0;
  }
`;
const CardDiv = styled.div`
  display: flex;
  align-items: stretch;
  margin-left: 15rem;
  @media (max-width: 1400px) {
    margin-left: auto;
  }
`;
const StyledP = styled.p`
  font-size: 1.25rem;
`;
const Main = () => {
  return (
    <MainDiv>
      <OpenDiv>
        <h2 className="text-decoration-underline text-uppercase">
          We're Open 7 Days a Week!
        </h2>
        <StyledP>
          Mon ~ Thurs: 10:00 AM ~ 10:00 PM <br />
          Fri & Sat: 10:00 AM ~ 10:00 PM <br />
          Sun: 10:00 PM ~ 10:00PM
        </StyledP>
      </OpenDiv>
      <CardDiv>
        <BurgerImg src={burger} alt="burger"></BurgerImg>
        <BurgerImg src={pasta} alt="burger"></BurgerImg>
      </CardDiv>
    </MainDiv>
  );
};

export default Main;
