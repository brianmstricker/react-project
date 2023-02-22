import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavbarCustom = styled(Navbar)`
  flex-direction: column;
`;
const NavbarBrandcustom = styled(NavbarBrand)``;
const ImgLogo = styled.img`
  width: 40px;
  margin-right: 1rem;
`;
const HeaderH1 = styled.h1`
  font-size: 2.75rem;
  font-weight: 500;
`;
const NavItemcustom = styled(NavItem)`
  margin-left: 1rem;
  display: inline-block;
  &:hover,
  &:active {
    color: #ff0000;
    text-decoration: underline;
    text-underline-offset: 0.75rem;
  }
`;
const ParaDiv = styled.div`
  margin-top: -1rem;
  margin-left: 8rem;
`;

const Header = () => {
  return (
    <div>
      <NavbarCustom light expand="md">
        <NavbarBrandcustom href="/" className="ms-1">
          <ImgLogo className="float-start" src={Logo} alt="Logo" />
          <HeaderH1>Pizza Delicioso</HeaderH1>
        </NavbarBrandcustom>
        <Nav className="m-2" navbar>
          <NavItemcustom className="list-unstyled">Order</NavItemcustom>
          <NavItemcustom className="list-unstyled">Menu</NavItemcustom>
          <NavItemcustom className="list-unstyled">About</NavItemcustom>
          <NavItemcustom className="list-unstyled">Register</NavItemcustom>
          <NavItemcustom className="list-unstyled">Login</NavItemcustom>
          <NavItemcustom className="list-unstyled">
            <ShoppingCartOutlinedIcon />
          </NavItemcustom>
        </Nav>
      </NavbarCustom>
      <ParaDiv className="d-none d-md-block">
        Your favorite local pizzeria
      </ParaDiv>
    </div>
  );
};

export default Header;
