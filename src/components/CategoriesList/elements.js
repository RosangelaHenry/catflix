import styled from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";
import { MdDelete as IconDelete } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TitleForm } from "../Form";
import {
  grayColorDark__2,
  grayColorLight__1,
  primaryColor,
  grayColorLight__4,
  grayColorLight__3,
  errorColor,
  bpMedium,
} from "../UI/variables";
import { Hyperlink } from "../UI";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 2rem;
`;

export const AlertIcon = styled(FiAlertTriangle)`
  color: ${primaryColor};
  font-size: 8rem;
`;

export const ErrorIcon = styled(AiOutlineCloseCircle)`
  color: ${errorColor};
  font-size: 10rem;
`;

export const DialogText = styled.p`
  font-size: 2.1rem;
  color: ${grayColorLight__1};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const CategoryList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 50%;

  li {
    padding: 1rem 0;
  }

  @media (max-width: ${bpMedium}) {
    width: 95%;
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #313131;
  padding: 1rem 2rem;
  border-top: 5px solid;
  border-radius: 0.3rem;

  color: ${grayColorLight__3};
  font-size: 2rem;
`;

export const IconsBox = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 4rem;

  > :hover {
    color: ${grayColorLight__4};
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const TitleDialog = styled(TitleForm)`
  font-size: 3rem;
`;

export const VideoDialogBox = styled.div`
  background-color: ${grayColorDark__2};
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const VideoCard = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;

  color: ${grayColorLight__1};
  font-size: 1.8rem;
`;

export const IconDeleteVideo = styled(IconDelete)`
  font-size: 2.5rem;

  :hover {
    color: ${grayColorLight__4};
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const BackHyperLink = styled(Hyperlink)`
  margin-bottom: 2rem;
  align-self: flex-start;
`;
