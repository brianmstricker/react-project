import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.item);
  return (
    <>
      <BorderDiv />
      <ContentDiv>
        <StyledH2>Shopping Cart</StyledH2>
        {cart.cartItems.length === 0 ? (
          <Styledh3>Your cart is empty</Styledh3>
        ) : (
          <>
            <TitleDiv>
              <StyledH4>Item</StyledH4>
              <StyledPrice>Price</StyledPrice>
              <StyledH4>Quantity</StyledH4>
              <StyledH4>Total</StyledH4>
            </TitleDiv>
            <CartItems>
              {cart.cartItems.map((item) => (
                <ItemDiv key={item.id}>
                  <NameDiv>
                    <StyledImg
                      width={200}
                      height={150}
                      src={item.image}
                      alt={item.description}
                    ></StyledImg>
                    <ItemP>{item.name}</ItemP>
                  </NameDiv>
                  <ItemPrice>${item.price}</ItemPrice>
                  <ItemP>{item.cartQuantity}</ItemP>
                  <ItemP>${item.price * item.cartQuantity}</ItemP>
                </ItemDiv>
              ))}
            </CartItems>
            <WrapperDiv>
              <ParentDiv>
                <TextSpan>Subtotal:</TextSpan>
                <PriceSpan>
                  ${cart.cartItems.reduce((a, c) => a + c.price * c.cartQuantity, 0)}
                </PriceSpan>
              </ParentDiv>
              <ParentDiv>
                <StyledButton>Checkout</StyledButton>
              </ParentDiv>
            </WrapperDiv>
          </>
        )}
      </ContentDiv>
    </>
  );
};

const BorderDiv = styled.div`
  width: 100%;
  height: 14vh;
  background-color: #000000;
`;
const ContentDiv = styled.div`
  min-height: 100vh;
  padding: 2rem 4rem;
  @media (max-width: 900px) {
    padding: 0 0;
  }
`;
const StyledH2 = styled.h2`
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 1rem 0;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
const Styledh3 = styled.h3`
  line-height: 500px;
`;
const ItemDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  column-gap: 0.5rem;
  padding: 1rem 0;
  align-items: center;
`;
const ItemP = styled.p`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
const ItemPrice = styled.p`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
  @media (max-width: 463px) {
    display: none;
  }
`;
const TitleDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
`;
const StyledImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 10%;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const StyledH4 = styled.h4`
  font-size: 2.5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const StyledPrice = styled.h4`
  font-size: 2.5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 463px) {
    display: none;
  }
`;
const NameDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;
const CartItems = styled.div`
  display: grid;
`;
const TextSpan = styled.span`
  font-size: 2rem;
  padding-right: 15px;
  font-weight: 400;
`;
const PriceSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;
const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;
`;
const ParentDiv = styled.div`
  padding: 0 clamp(1rem, 6vw, 8rem);
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
const StyledButton = styled.button`
  padding: 1rem 1rem;
  border: black 1px solid;
  border-radius: 5px;
  background-color: #5e5d5d;
  margin-top: 10px;
  color: white;
  cursor: pointer;
`;
export default Cart;
