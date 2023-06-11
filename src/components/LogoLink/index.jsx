import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/images/logo1.png";
import { NavLink } from "react-router-dom";

const Logo = styled.img`
  height: 4rem;
`;

const LogoLink = () => {
  return (
    <NavLink to="/">
      <Logo src={logoImg} alt="Logo AluraFlix" />
    </NavLink>
  );
};

export default LogoLink;
