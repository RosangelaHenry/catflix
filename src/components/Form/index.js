import styled from "styled-components";
import {
  errorColor,
  grayColorDark__3,
  grayColorLight__1,
  grayColorLight__2,
  primaryColor,
} from "../UI/variables";

export const TitleForm = styled.h1`
  color: ${grayColorLight__1};
  font-weight: 400;
  font-size: 4rem;
`;

export const FormStyled = styled.form`
  max-width: 100rem;
  margin: 2rem auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.3rem;
`;

export const fieldStyled = () => `
  color: ${grayColorLight__2};
  background-color: ${grayColorDark__3};
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
  border-radius:2px;

  :focus {
    outline: none;
  }
`;

export const selectFieldAnimation = () => `
  :valid ~ label{
    top: -2rem;
    font-size: 1.4rem;
    color: ${primaryColor};
  }
`;

export const textFieldAnimation = () => `
  :focus ~ label,
  :valid ~ label {
    top: -2rem;
    font-size: 1.4rem;
    color: ${primaryColor};
  }

  :focus ~ ${Bar}:before, &:focus ~ ${Bar}:after {
   width: 100%;
  }
`;

export const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  :before,
  :after {
    content: "";
    height: 0.2rem;
    width: 0;
    bottom: 0.1rem;
    position: absolute;
    background: ${primaryColor};
    transition: 0.5s ease all;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledLabel = styled.label`
  color: ${(props) => (props.static ? primaryColor : grayColorLight__1)};
  font-size: ${(props) => (props.static ? "1.4rem" : "1.8rem")};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: ${(props) => (props.static ? "-2rem" : "1rem")};
  transition: 0.2s ease all;
`;

export const Invalid = styled.p`
  color: ${errorColor};
  font-size: 1.4rem;
  font-weight: normal;
  position: absolute;
  left: 0;
  bottom: -2rem;
  padding: 0.4rem 0 0 0.5rem;
  z-index: 2;

  width: 100%;
  border-top: 0.3rem solid ${errorColor};
`;
