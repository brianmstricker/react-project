import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavbarText } from "reactstrap";
import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div>
       <Navbar color="white" sticky="top" expand="medium">
                <NavbarBrand href="/" className="ms-2">
                    <img className="navbar__img float-start" src={Logo} alt="Logo" />
                </NavbarBrand>
                
       </Navbar>
    </div>
  )
}

export default Header