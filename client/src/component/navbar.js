import React from "react"; //peut-être ajouter React, { useState }
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;
const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }
`;
const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;
const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #bada55;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;
const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <Nav>
      <Logo><Link to="/">Jungle Vape</Link></Logo>

      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? "Close" : "Menu"}
      </MobileNavToggle>

      <DesktopNav>
        <NavItem>
          <Link to="/shop">SHOP</Link>
        </NavItem>
        <NavItem>
          <Link to="/nous">QUI SOMMES-NOUS</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">CONTACT</Link>
        </NavItem>
        <NavItem>
          <Link to="/panier">MON PANIER</Link>
        </NavItem>
        <NavItem>
          <Link to="/connexion">CONNEXION</Link>
        </NavItem>
      </DesktopNav>

      <MobileNav style={{ display: isMobileNavOpen ? "flex" : "none" }}>
        <NavItem>
          <Link to="/shop">SHOP</Link>
        </NavItem>
        <NavItem>
          <Link to="/nous">QUI SOMMES-NOUS</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">CONTACT</Link>
        </NavItem>
        <NavItem>
          <Link to="/panier">MON PANIER</Link>
        </NavItem>
        <NavItem>
          <Link to="/connexion">CONNEXION</Link>
        </NavItem>

      </MobileNav>
    </Nav>
  );
};

export default Navbar;