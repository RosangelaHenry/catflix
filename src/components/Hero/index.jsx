import React from "react";
import styled from "styled-components";

import {
  bpLarge,
  bpMedium,
  bpSmallest,
  grayColorLight__1,
} from "../UI/variables";
import { SubtitleCategoryLarge, TitleCategoryLarge } from "../TitleCategory";
import { MarginMedium } from "../UI";
import SimpleSlider from "../Carousel/Slider";
import VideoCard from "../Carousel/VideoCard";
import InfoHover from "../Carousel/InfoHover";

const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.7fr 2fr 0.4fr 1fr 1fr;
  align-items: center;
  gap: 0 4rem;

  @media (max-width: ${bpLarge}) {
    height: auto;
  }

  @media (max-width: ${bpMedium}) {
    grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
    grid-template-rows: 0.2fr 2fr 0.2fr 1fr 1fr;
    gap: 0;
  }
`;

const Container = styled.div`
  padding: 0 5rem;
  grid-column: 1;
  grid-row: 2 / 3;
  z-index: 4;

  @media (max-width: ${bpMedium}) {
    grid-column: 1 / -1;
    grid-row: 3;
    padding-top: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${bpSmallest}) {
    align-items: flex-start;
    padding: 3rem 0 0 1rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledInfoHover = styled.div`
  display: none;

  @media (max-width: ${bpMedium}) {
    display: block;
  }
`;

const SliderStyle = styled.div`
  grid-column: 1 /-1;
  grid-row: 4 / 6;
  z-index: 3;
`;

const Info = styled.p`
  color: ${grayColorLight__1};
  font-weight: 300;
  font-size: 1.9rem;
  line-height: 2.5rem;

  @media (max-width: ${bpLarge}) {
    font-size: 1.7rem;
  }

  @media (max-width: ${bpMedium}) {
    display: none;
  }
`;

const VideoIframe = styled.iframe`
  border: none;
  grid-column: 1 / -1;
  grid-row: 1 / 5;
  z-index: 1;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  pointer-events: none;

  @media (max-width: ${bpMedium}) {
    display: none;
  }
`;

const Hero = ({ url, category, description, color, videos }) => {
  return (
    <StyledHero>
      <VideoIframe
        src={`https://www.youtube.com/embed/${videos[0].id}?&autoplay=1&mute=1&playsinline=1`}
      ></VideoIframe>
      <Container>
        <TitleContainer>
          <TitleCategoryLarge color={color}>{category}</TitleCategoryLarge>
          <StyledInfoHover>
            <InfoHover description={description} />
          </StyledInfoHover>
        </TitleContainer>
        <MarginMedium />
        <SubtitleCategoryLarge>{videos[0].title}</SubtitleCategoryLarge>
        <Info>{videos[0].description}</Info>
      </Container>
      <VideoCard url={url} idVideo={videos[0].id} large={true} color={color} />
      <SliderStyle>
        <SimpleSlider url={url} color={color} videos={videos.slice(1)} />;
      </SliderStyle>
    </StyledHero>
  );
};

export default Hero;
