import React from "react";
import styled from "styled-components";

import { Bar, StyledLabel, fieldStyled, textFieldAnimation } from ".";

const StyledInput = styled.input`
  ${fieldStyled};
  ${textFieldAnimation};
`;

export default function TextSmall({
  name,
  label,
  type,
  value,
  setFunction,
  invalidFunction,
  isLink = false,
}) {
  return (
    <>
      <StyledInput
        type={type}
        value={value}
        onChange={(event) => setFunction(event.target.value)}
        onBlur={() => invalidFunction(name, value, setFunction, label, isLink)}
        required
      />

      <Bar />
      <StyledLabel>{label}</StyledLabel>
    </>
  );
}
