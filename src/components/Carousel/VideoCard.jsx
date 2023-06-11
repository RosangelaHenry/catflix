import React from "react";
import { Card, CardLarge } from "../UI";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { bpMedium } from "../UI/variables";

const StyledVideo = styled.div`
  margin: 0 1;

  grid-column: 2;
  grid-row: 2 / 3;
  z-index: 3;

  @media (max-width: ${bpMedium}) {
    grid-column: 2 / 4;
    grid-row: 2 / 3;

    justify-self: center;
  }
`;

const VideoCard = ({ url, idVideo, color, large = false }) => {
  const srcImg = `https://img.youtube.com/vi/${idVideo}/0.jpg`;

  function isLarge(large) {
    if (!large) return <Card src={srcImg} style={{ borderColor: color }} />;
    else return <CardLarge src={srcImg} style={{ borderColor: color }} />;
  }

  return (
    <StyledVideo style={{ margin: "0 1rem" }}>
      <Link to={`/${url}/${idVideo}`}>{isLarge(large)}</Link>
    </StyledVideo>
  );
};

export default VideoCard;
