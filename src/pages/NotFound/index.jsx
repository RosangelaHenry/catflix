import React from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import { TbFaceIdError as AlertIcon } from "react-icons/tb";
import {
  errorColorDark,
  grayColorLight__3,
} from "../../components/UI/variables";

const Container = styled.main`
  width: 100vw;
  height: calc(100vh - 17rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: ${errorColorDark};
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: 600;
  background-color: ${grayColorLight__3};
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 20rem;
`;

const NotFound = () => {
  return (
    <>
      <Header />
      <Container>
        <IconDiv>
          <AlertIcon color={errorColorDark} size="15rem" />
          <p>404</p>
        </IconDiv>
        <p>Página não encontrada!</p>
      </Container>
    </>
  );
};

export default NotFound;
