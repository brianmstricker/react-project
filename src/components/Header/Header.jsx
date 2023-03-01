import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import React from "react";
import Logo from "../../assets/logo.png";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarCustom expand="lg" sticky="top" dark>
      <NavbarBrandcustom href="/" className="ms-1">
        <div>
          <ImgLogo src={Logo} alt="Logo" />
        </div>
        <HeaderH1 className="d-sm">Pizza Delicioso</HeaderH1>
      </NavbarBrandcustom>
      <ParaDiv className="d-none d-lg-block">Your favorite local pizzeria</ParaDiv>
      <NavbarTogglerCustom onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <NavCustom className="m-2" navbar>
          <NavItemcustom className="list-unstyled text-white">
            <NavLinkCustom className="text-white" to="/menu">
              Menu
            </NavLinkCustom>
          </NavItemcustom>
          <NavItemcustom className="list-unstyled">Order</NavItemcustom>
          <NavItemcustom className="list-unstyled">About</NavItemcustom>
          <NavItemcustom className="list-unstyled">Register</NavItemcustom>
          <NavItemcustom className="list-unstyled">Login</NavItemcustom>
          <NavItemcustom className="list-unstyled">
            <ShoppingCartOutlinedIcon />
          </NavItemcustom>
        </NavCustom>
      </Collapse>
    </NavbarCustom>
  );
};
const NavbarTogglerCustom = styled(NavbarToggler)`
  padding: 3px;
  border: 3px solid white;
  border-color: rgba(255, 255, 255, 0.5) !important;
  border-radius: 20%;
`;
const NavbarCustom = styled(Navbar)`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  color: white;
  justify-content: first baseline;
  width: 100%;
  padding: 10px;
`;
const NavLinkCustom = styled(NavLink)`
  text-decoration: none;
  &:hover,
  &:active {
    color: #ff0000 !important;
    text-decoration: underline;
    text-underline-offset: 0.75rem;
  }
`;
const NavbarBrandcustom = styled(NavbarBrand)`
  color: white !important;
`;
const NavCustom = styled(Nav)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background-color: black;
    padding: .5rem;
    border-radius: 20px;
  }
`;
const ImgLogo = styled.img`
  width: 50px;
  margin-right: 0.75rem;
  float: left;
  @media (max-width: 600px) {
    display: none;
  }
`;
const HeaderH1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  letter-spacing: 4px;
  text-shadow: 1px 2px 1px #000000;
  @media (max-width: 1100px) {
    font-size: 2.5rem;
  }
  @media (max-width: 485px) {
    font-size: 1.75rem;
  }
`;
const NavItemcustom = styled(NavItem)`
  display: flex;
  align-items: center;
  margin: 0 1vmax;
  font-size: 1.15rem;
  &:hover,
  &:active {
    color: #ff0000;
    text-decoration: underline;
    text-underline-offset: 0.75rem;
    cursor: pointer;
  }
`;
const ParaDiv = styled.div`
  font-size: 1.75vmin;
  text-shadow: 1px 2px 0px #000000;
  position: absolute;
  bottom: 1%;
  left: 15%;
`;

export default Header;
