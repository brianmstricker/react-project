import React from 'react'
import styled from 'styled-components'
import pizzapie from '../../assets/pizzapie.jpg'

const HomepageDiv = styled.div`
background-image: url(${pizzapie});
height: 93.28vh;
background-size: cover;
background-repeat: no-repeat;
background-color: #505050;
background-blend-mode: soft-light;
position: relative;
`
const Header1 = styled.h1`
letter-spacing: 4px;
position: absolute;
top: 33%;
left: 20%;
text-shadow: 4px 4px 4px #000000;
`
const Orderdiv = styled.div`
position: absolute;
top: 50%;
right: 40%;
`
const Orderbutton = styled.button`
position: absolute;
letter-spacing: 2px;
width: 200px;
height: 75px;
border: none;
background-color: #FF0000;
font-size: 1.35rem;
font-weight: bold;
text-shadow: 1px 1px 1px #dbbcbc;
&:hover {
  background-color: #FF3333;
}
@media (max-width: 600px) {
  width: 150px;
  font-size: 1rem;
  height: 50px;
}
`
const Homepage = () => {
  return (
    <HomepageDiv>
      <Header1 className='text-center text-white fw-bolder'>Pizza Delicioso</Header1>
      <Orderdiv><Orderbutton>Order Now!</Orderbutton></Orderdiv>
    </HomepageDiv>
  )
}

export default Homepage