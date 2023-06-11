import React from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TitleCategory } from "../TitleCategory";
import SimpleSlider from "./Slider";
import InfoHover from "./InfoHover";
import { bpSmallest } from "../UI/variables";

const Container = styled.div`
  width: 100%;
  padding: 5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${bpSmallest}) {
    padding: 5rem 3rem 3rem 1rem;
  }
`;

const Carousel = (props) => {
  return (
    <>
      <Container>
        <TitleCategory color={props.color}>{props.category}</TitleCategory>
        <InfoHover description={props.description} />
      </Container>
      <SimpleSlider url={props.url} color={props.color} videos={props.videos} />
    </>
  );
};

export default Carousel;
