import React from "react";
import styled from "styled-components";

import { FieldContainer, StyledLabel } from ".";
import { grayColorDark__3 } from "../UI/variables";

const StyledInput = styled.input`
  background-color: ${grayColorDark__3};
  padding: 0 0.3rem;
  width: 6rem;
  height: 4.2rem;

  border: none;
  border-radius: 2px;
`;

export default function ColorInput({ value, setFunction }) {
  return (
    <FieldContainer>
      <StyledInput
        type="color"
        value={value}
        onChange={(event) => setFunction(event.target.value)}
        required
      />
      <StyledLabel static>Cor</StyledLabel>
    </FieldContainer>
  );
}
