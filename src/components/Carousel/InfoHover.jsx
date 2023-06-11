import React from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FiAlertCircle } from "react-icons/fi";
import {
  bpMedium,
  bpSmall,
  grayColorDark__2,
  grayColorLight__1,
} from "../UI/variables";
import { grayColorLight__3 } from "../UI/variables";

const InfoContainer = styled.div`
  position: relative;
`;

const InfoIcon = styled(FiAlertCircle)`
  color: ${grayColorLight__3};
  font-size: 3rem;

  :hover ~ div {
    opacity: 1;
  }
`;

const InfoText = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 3.5rem;
  width: 30rem;
  z-index: 10;

  padding: 1rem;
  background-color: ${grayColorDark__2};
  border-radius: 2px;
  font-size: 1.8rem;
  font-weight: 300;
  text-align: center;
  color: ${grayColorLight__1};

  opacity: 0;
  transition: all 0.2s;

  @media (max-width: ${bpMedium}) {
    width: 25rem;
  }

  @media (max-width: ${bpSmall}) {
    width: 20rem;
  }

  @media (max-width: 420px) {
    top: 4rem;
    left: -8.5rem;
  }
`;

const InfoHover = ({ description }) => {
  return (
    <InfoContainer>
      <InfoIcon />
      <InfoText>{description}</InfoText>
    </InfoContainer>
  );
};

export default InfoHover;
