import React from "react";
import styled from "styled-components";
import { PAGEITEMS } from "../../shared/HOMEPAGEITEMS";

const Menu = () => {
  return (
    <>
      <BorderDiv />
      <MenuH1>Menu</MenuH1>
      {PAGEITEMS.map((item) => {
        return (
          <CardDiv key={item.id}>
            <ImgStyle src={item.image} alt={item.description}></ImgStyle>
            <PDiv>
              <div>
                <H2Style>{item.name}</H2Style>
              </div>
              <DescP>{item.description}</DescP>
              <PriceStyle>{item.price}</PriceStyle>
            </PDiv>
          </CardDiv>
        );
      })}
      <br />
    </>
  );
};

const BorderDiv = styled.div`
  width: 100%;
  height: 12vh;
  background-color: #000000;
`;
const MenuH1 = styled.h1`
  font-size: 4rem;
  width: 100%;
`;
const CardDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
`;
const ImgStyle = styled.img`
  border-radius: 40px;
  width: 30%;
  object-fit: cover;
  @media (max-width: 650px) {
    display: none;
  }
`;
const H2Style = styled.h2`
  width: 600px;
  padding-bottom: 1rem;
  font-size: 2.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1px;
  margin: 0.5rem;
  @media (max-width: 1024px) {
    font-size: 2.5vmin;
    width: 300px;
  }
  @media (max-width: 650px) {
    font-size: 1.5rem;
    margin: 0;
    width: 200px;
  }
`;
const PDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.35vmin;
  width: 800px;
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 650px) {
    font-size: 1.1rem;
    height: fit-content;
    border-bottom: 1px solid black;
  }
`;
const DescP = styled.p`
  @media (max-width: 650px) {
    width: 80%;
  }
`;
const PriceStyle = styled.p`
  font-weight: bolder;
`;
export default Menu;
