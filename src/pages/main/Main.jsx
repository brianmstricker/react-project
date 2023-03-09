import React from "react";
import styled from "styled-components";
import burger from "../../assets/burger-small.jpg";
import pasta from "../../assets/pasta-small.jpg";
import whitepasta from "../../assets/whitepasta-small.jpg";
import pizzapie from "../../assets/pizza-small.jpg";

const Main = () => {
  return (
    <MainDiv>
      <CenterDiv>
        <h4 className="text-decoration-underline text-uppercase">We're Open 7 Days a Week!</h4>
        <StyledP>
          <u>Mon ~ Thurs</u>: 10:00 AM ~ 10:00 PM <br />
          <u>Fri & Sat</u>: 10:00 AM ~ 10:00 PM <br />
          <u>Sun</u>: 10:00 PM ~ 10:00PM
        </StyledP>
      </CenterDiv>
      <CardDiv>
        <ImgDiv>
          <FoodBurger src={burger} alt="burger"></FoodBurger>
          <h3>A tasty burger!</h3>
          <ImgP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis exercitationem libero rerum,
            deserunt recusandae sed quisquam nam porro quia, excepturi maxime ullam aliquam veniam harum eveniet?
            Sapiente, rerum maxime!
          </ImgP>
        </ImgDiv>
        <ImgDiv>
          <FoodImg src={pasta} alt="pasta"></FoodImg>
          <h3>A delicious pasta!</h3>
          <ImgP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis exercitationem libero rerum,
            deserunt recusandae sed quisquam nam porro quia, excepturi maxime ullam aliquam veniam harum eveniet?
            Sapiente, rerum maxime!
          </ImgP>
        </ImgDiv>
        <ImgDiv>
          <FoodImg src={whitepasta} alt="pasta"></FoodImg>
          <h3>A tasty white pasta!</h3>
          <ImgP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis exercitationem libero rerum,
            deserunt recusandae sed quisquam nam porro quia, excepturi maxime ullam aliquam veniam harum eveniet?
            Sapiente, rerum maxime!
          </ImgP>
        </ImgDiv>
        <ImgDiv>
          <FoodImg src={pizzapie} alt="pasta"></FoodImg>
          <h3>A pizza pie!</h3>
          <ImgP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis exercitationem libero rerum,
            deserunt recusandae sed quisquam nam porro quia, excepturi maxime ullam aliquam veniam harum eveniet?
            Sapiente, rerum maxime!
          </ImgP>
        </ImgDiv>
      </CardDiv>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  width: 100%;
  padding: 20px 0;
`;
const CardDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  @media (max-width: 1024px) {
    grid-gap: 0;
  }
`;
const ImgDiv = styled.div`
  width: 100%;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FoodImg = styled.img`
  width: 325px;
  height: 480px;
  object-fit: cover;
`;
const ImgP = styled.p`
  width: 300px;
`;
const FoodBurger = styled.img`
  width: 325px;
  height: 480px;
  object-fit: cover;
`;
const StyledP = styled.p`
  font-size: 1.25rem;
`;
const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: clamp(0.5rem, 0.75vw, 1rem) 0;
`;

export default Main;
