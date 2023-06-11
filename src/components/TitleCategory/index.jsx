import styled from "styled-components";
import { bpLarge, bpMedium, grayColorLight__1 } from "../UI/variables";

export const TitleCategory = styled.h1`
  color: ${grayColorLight__1};
  font-weight: 400;
  font-size: 3.5rem;
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  background-color: ${(props) => props.color};

  @media (max-width: 450px) {
    font-size: 3rem;
  }

  @media (max-width: 320px) {
    font-size: 2.5rem;
  }
`;

export const TitleCategoryLarge = styled(TitleCategory)`
  font-size: 6rem;

  @media (max-width: ${bpLarge}) {
    font-size: 5rem;
  }

  @media (max-width: 450px) {
    font-size: 3.5rem;
  }

  @media (max-width: 320px) {
    font-size: 3rem;
  }
`;

export const SubtitleCategoryLarge = styled.h2`
  font-size: 4.7rem;
  font-weight: 400;
  color: ${grayColorLight__1};

  @media (max-width: ${bpLarge}) {
    font-size: 3.7rem;
  }

  @media (max-width: ${bpMedium}) {
    display: none;
  }
`;
