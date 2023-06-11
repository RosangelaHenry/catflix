import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../Button";

const Container = styled.div`
  display: flex;
  gap: 4rem;
`;

export default function ButtonsForm({ clearFunction }) {
  return (
    <Container>
      <ButtonPrimary type="button" onClick={clearFunction}>
        Limpar
      </ButtonPrimary>
      <ButtonPrimary type="submit" primary>
        Salvar
      </ButtonPrimary>
    </Container>
  );
}
