import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrow from "../../assets/images/sliderArrow.png";
import VideoCard from "./VideoCard";
import { bpSmall, bpSmallest } from "../UI/variables";

const StyledSlider = styled(Slider)`
  width: 90%;
  margin: 0 auto;

  @media (max-width: ${bpSmallest}) {
    width: auto;
    margin: 0;
  }
`;

function Arrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

const StyledNextArrow = styled(Arrow)`
  @media (min-width: ${bpSmall}) {
    :before {
      content: url(${arrow});
    }
  }

  @media (max-width: ${bpSmallest}) {
    display: none;
  }
`;
const StyledPrevArrow = styled(StyledNextArrow)`
  @media (min-width: ${bpSmall}) {
    transform: rotate(180deg);
  }

  @media (max-width: ${bpSmallest}) {
    display: none;
  }
`;

export default function SimpleSlider({ url, videos, color }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    nextArrow: <StyledNextArrow />,
    prevArrow: <StyledPrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider {...settings}>
      {videos.map((video, index) => {
        return (
          <div key={index}>
            <VideoCard url={url} idVideo={video.id} color={color} />
          </div>
        );
      })}
    </StyledSlider>
  );
}
