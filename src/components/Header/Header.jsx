import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavbarText } from "reactstrap";
import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'
import styled from 'styled-components'

const ImgLogo = styled.img`
  width: 40px;
`
const HeaderH1 = styled.h1`
  font-size: 2.75rem;
  font-weight: 500;
  `
const PNav = styled.p`
  font-size: 1rem;
  position: absolute;
  bottom: -12px;
  right: 75%;
  `

const Header = () => {
  return (
    <div>
       <Navbar light sticky="top" expand="md">
                <NavbarBrand href="/" className="ms-1">
                    <ImgLogo className="float-start" src={Logo} alt="Logo" />
                    <HeaderH1>Pizza Delicioso</HeaderH1>
                </NavbarBrand>
                <PNav>Your Favorite Local Pizzeria</PNav>
       </Navbar>
    </div>
  )
}

export default Header