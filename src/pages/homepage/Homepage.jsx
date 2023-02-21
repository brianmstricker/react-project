import React from 'react'
import styled from 'styled-components'
import pizzapie from '../../assets/pizzapie.jpg'

const HomepageDiv = styled.div`
background-image: url(${pizzapie});
height: 93.28vh;
background-size: cover;
background-repeat: no-repeat;
background-color: darkgray;
background-blend-mode: color-burn;
position: relative;
`
const Header1 = styled.h1`
letter-spacing: 4px;
position: absolute;
top: 33%;
left: 20%;
text-shadow: 4px 4px 4px #000000;
`
const Homepage = () => {
  return (
    <HomepageDiv>
      <Header1 className='text-center text-white fw-bolder'>Pizza Delicioso</Header1>
    </HomepageDiv>
  )
}

export default Homepage