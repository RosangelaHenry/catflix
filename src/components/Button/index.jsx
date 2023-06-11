import styled from "styled-components";
import {
  grayColorDark__1,
  grayColorLight__4,
  grayColorLight__1,
  primaryColor,
  whiteColor,
} from "../UI/variables";

export const Button = styled.button`
  font-weight: 600;
  font-size: 2.1rem;
  padding: 1.5rem 3rem;
  border-radius: 0.4rem;
  background-color: transparent;
  transition: all 0.3s;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
`;

export const ButtonPrimary = styled(Button)`
  border: none;
  background-color: ${(props) =>
    props.primary ? primaryColor : grayColorLight__4};
  color: ${(props) => (props.primary ? whiteColor : grayColorDark__1)};

  :hover {
    opacity: 0.85;
  }
`;

export const ButtonSecondary = styled(Button)`
  color: ${whiteColor};
  border: 1px solid ${grayColorLight__1};
  background-color: transparent;

  :hover {
    color: ${primaryColor};
    border-color: ${primaryColor};
  }
`;
