import React from "react";
import styled from "styled-components";
import { PAGEITEMS } from "../../shared/HOMEPAGEITEMS";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/itemSlice";

const Order = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItem(item))
  };
  return (
    <>
      <BorderDiv />
      <ContentDiv>
        <StyledH1>Order Now!</StyledH1>
        {PAGEITEMS.map((item) => {
          return (
            <CardDiv key={item.id}>
              <StyledImg src={item.image} alt={item.description} width="300" height="250"></StyledImg>
              <TextDiv>
                <h3>{item.name}</h3>
                <StyledP>${item.price}</StyledP>
                <StyledButton onClick={() => handleAddToCart(item)} type="button">
                  Add to Cart
                </StyledButton>
              </TextDiv>
            </CardDiv>
          );
        })}
      </ContentDiv>
    </>
  );
};

const BorderDiv = styled.div`
  width: 100%;
  height: 12vh;
  background-color: #000000;
`;
const ContentDiv = styled.div`
  min-height: 100vh;
`;
const CardDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0 1rem;
`;
const StyledImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 20%;
`;
const TextDiv = styled.div`
  background-color: #d3d1d1;
  border-radius: 2rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;
const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 2rem;
  border: none;
`;
const StyledP = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;
const StyledH1 = styled.h1`
  font-size: 4rem;
  text-decoration: underline;
  margin-bottom: 2rem;
`;

export default Order;
