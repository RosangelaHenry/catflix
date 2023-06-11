import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FaChevronDown as Icon } from "react-icons/fa";
import {
  FieldContainer,
  StyledLabel,
  fieldStyled,
  selectFieldAnimation,
} from ".";
import {
  grayColorDark__3,
  grayColorLight__1,
  grayColorLight__2,
  primaryColor,
} from "../UI/variables";

const StyledSelect = styled.select`
  ${fieldStyled};
  ${selectFieldAnimation};
  appearance: none;
  pointer-events: none;
`;

const ArrowIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 1rem;
  height: 100%;
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  color: ${grayColorLight__1};
  transition: all 0.5s;
`;

const OptionsBox = styled.div`
  position: absolute;
  width: inherit;
  height: 0px;
  max-height: 20rem;
  overflow-y: auto;
  z-index: 10;

  background-color: ${grayColorDark__3};

  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;

  transition: all 0.5s;
`;

const OptionDiv = styled.div`
  color: ${grayColorLight__2};
  font-size: 1.8rem;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid #656565;
  cursor: pointer;

  :hover {
    background-color: ${primaryColor};
  }
`;

export default function Select({ name, label, value, options, setFunction }) {
  const [selectOpen, setSelectOpen] = useState(false);
  useEffect(() => {
    toggleOptionBox();
  }, [selectOpen]);

  function toggleOptionBox() {
    const optionsBox = document.querySelector(".options-box");

    if (selectOpen) optionsBox.style.height = "auto";
    else optionsBox.style.height = "";
  }

  function selectOption(event) {
    setSelectOpen(false);
    setFunction(event.currentTarget.id);
  }

  window.addEventListener("click", (e) => {
    if (selectOpen && e.target.id === "") setSelectOpen(false);
  });

  return (
    <FieldContainer>
      <FieldContainer onClick={() => setSelectOpen(!selectOpen)} id="container">
        <StyledSelect
          name={name}
          value={value}
          className="select"
          onChange={() => setFunction(value)}
          required
        >
          <option key="" hidden></option>
          {options.map((option) => (
            <option key={option} hidden>
              {option}
            </option>
          ))}
        </StyledSelect>
        <ArrowIcon />

        <StyledLabel>{label}</StyledLabel>
      </FieldContainer>

      <OptionsBox className="options-box">
        {options.map((option) => (
          <OptionDiv key={option} id={option} onClick={selectOption}>
            {option}
          </OptionDiv>
        ))}
      </OptionsBox>
    </FieldContainer>
  );
}
