import React from "react";
import styled from "styled-components";
import {
  bpSmall,
  grayColorDark__2,
  grayColorLight__1,
  grayColorLight__2,
  primaryColor,
} from "../UI/variables";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: relative;

  @media (min-width: ${bpSmall}) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  height: 100vh;
  position: fixed;
  top: 35%;
  left: 0;
  z-index: 1500;

  opacity: 0;
  width: 0;
  visibility: hidden;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavCheckbox = styled.input`
  display: none;

  :checked ~ .background {
    position: fixed;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
  }

  :checked ~ nav {
    visibility: visible;
    opacity: 1;
    width: 100%;
  }

  :checked + label .icon {
    background-color: transparent;
    position: fixed;
    right: 4.5rem;
  }

  :checked + label .icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  :checked + label .icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;

const NavButton = styled.label`
  position: relative;
  background-color: ${grayColorDark__2};
  display: block;
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 25%;
  text-align: center;
  z-index: 2000;
  cursor: pointer;
`;

const NavIcon = styled.span`
  position: relative;
  margin-top: 2.25rem;
  z-index: 2000;

  &,
  &::before,
  &::after {
    width: 2.5rem;
    height: 2px;
    background-color: ${grayColorLight__2};
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }
`;

const NavBackground = styled.div`
  height: 0rem;
  width: 0rem;
  position: absolute;
  top: 0rem;
  right: 0rem;
  background-color: ${grayColorDark__2};

  transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
`;

const NavItem = styled(NavLink)`
  margin: 1rem;
  display: inline-block;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 600;
  padding: 1.5rem 3rem;
  color: ${grayColorLight__1};
  font-family: "Source Sans Pro", sans-serif;

  :hover {
    color: ${primaryColor};
  }
`;

const NavMobile = () => {
  function closeNav() {
    document.getElementById("navi-toggle").checked = false;
  }

  return (
    <Container>
      <NavCheckbox type="checkbox" id="navi-toggle" />
      <NavButton htmlFor="navi-toggle">
        <NavIcon className="icon" />
      </NavButton>

      <NavBackground className="background" />

      <StyledNav>
        <NavContainer>
          <NavItem to="novovideo" onClick={() => closeNav()}>
            Novo vídeo
          </NavItem>
          <NavItem to="novacategoria" onClick={() => closeNav()}>
            Nova categoria
          </NavItem>
        </NavContainer>
      </StyledNav>
    </Container>
  );
};

export default NavMobile;
