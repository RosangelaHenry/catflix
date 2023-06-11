import React from "react";
import styled from "styled-components";

import { Bar, StyledLabel, fieldStyled, textFieldAnimation } from ".";

const StyledTextarea = styled.textarea`
  ${fieldStyled};
  ${textFieldAnimation};
  resize: none;
`;

export default function TextLarge({
  name,
  label,
  type,
  value,
  setFunction,
  invalidFunction,
}) {
  return (
    <>
      <StyledTextarea
        rows="4"
        type={type}
        value={value}
        onChange={(event) => setFunction(event.target.value)}
        onBlur={() => invalidFunction(name, value, setFunction, label)}
        maxLength={"280"}
        required
      />
      <Bar />
      <StyledLabel>{label}</StyledLabel>
    </>
  );
}
