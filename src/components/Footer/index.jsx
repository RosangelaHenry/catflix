import React from "react";
import styled from "styled-components";

import { TbBrandGithub as IconGithub } from "react-icons/tb";
import { FiLinkedin as IconLinkedin } from "react-icons/fi";

import { MarginLine } from "../UI";
import {
  blackColor,
  bpSmall,
  grayColorLight__3,
  primaryColor,
} from "../UI/variables";
import LogoLink from "../LogoLink";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  width: 100%;
  position: relative;
  height: 7rem;
  background-color: ${blackColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;

  @media (max-width: ${bpSmall}) {
    height: auto;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 370px) {
    gap: 2rem;
  }

  @media (max-width: 290px) {
    gap: 1rem;
  }
`;

const TextFooter = styled.p`
  text-align: center;
  color: ${grayColorLight__3};
  font-size: 1.2rem;
  letter-spacing: 1px;
  line-height: 1.2;
  border-right: 2px solid ${grayColorLight__3};
  padding-right: 3rem;

  @media (max-width: 370px) {
    font-size: 1.1rem;
    letter-spacing: 0;
    padding-right: 2rem;
  }

  @media (max-width: 290px) {
    padding-right: 1rem;
  }
`;

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavItem = styled(Link)`
  color: ${grayColorLight__3};
  font-size: 5rem;

  transition: all 0.2s;

  :hover {
    color: ${primaryColor};
    transform: scale(1.2);
  }
`;

const MarginFooter = styled(MarginLine)`
  position: absolute;
  top: 0;
  left: 0;
  width: inherited;
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <MarginFooter />
        <LogoLink />
        <Container>
          <TextFooter>
            Desenvolvido por Rosangela Henry durante o <br />
            programa "ONE - Oracle Next Education".{" "}
          </TextFooter>

          <NavStyled>
            <NavItem to="https://www.linkedin.com/in/rosangela-moreira-1b016221" target="_blank">
              <IconLinkedin />
            </NavItem>
            <NavItem to="https://github.com/RosangelaHenry" target="_blank">
              <IconGithub />
            </NavItem>
          </NavStyled>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
