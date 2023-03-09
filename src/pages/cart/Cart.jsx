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
              <StyledH4>Name</StyledH4>
              <StyledH4>Price</StyledH4>
              <StyledH4>Quantity</StyledH4>
              <StyledH4>Total</StyledH4>
            </TitleDiv>
            <div>
              {cart.cartItems.map((item) => (
                <ItemDiv key={item.id}>
                  <NameDiv>
                    <StyledImg
                      width={200}
                      height={200}
                      src={item.image}
                      alt={item.description}
                    ></StyledImg>
                    <ItemP>{item.name}</ItemP>
                  </NameDiv>
                  <ItemP>${item.price}</ItemP>
                  <ItemP>{item.cartQuantity}</ItemP>
                  <ItemP>${item.price * item.cartQuantity}</ItemP>
                </ItemDiv>
              ))}
            </div>
            <div>
              <span>Subtotal</span>
              <span>
                $
                {cart.cartItems.reduce(
                  (a, c) => a + c.price * c.cartQuantity,
                  0
                )}
              </span>
            </div>
            <div>
              <button>Checkout</button>
            </div>
          </>
        )}
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
const StyledH2 = styled.h2`
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 1rem 0;
  margin-bottom: 2rem;
`;
const Styledh3 = styled.h3`
  line-height: 500px;
`;
const ItemDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 1rem 0;
  align-items: center;
`;
const ItemP = styled.p`
  font-size: 1.5rem;
`;
const TitleDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const StyledImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  margin-left: 2rem;
  border-radius: 20%;
`;
const StyledH4 = styled.h4`
  font-size: 2.5rem;
  font-weight: 600;
`;
const NameDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;
export default Cart;
