import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import SolidSVG from "../icons/iconmonstr-star-3.svg";
import BorderedSVG from "../icons/iconmonstr-star-5.svg";
import { StarIcon } from "./StarIcon";

interface StarProps {
  onClick: () => void;
}

const StarWrapper = styled.div<{ isClicked: boolean }>`
  mask-image: url(${SolidSVG});
  background-color: ${({ isClicked }) =>
    isClicked ? "rgba(255, 80, 0, 100%)" : "transparent"};
  mask-repeat: no-repeat;
  mask-size: 94.5%;
  mask-position: center 2px;
  > svg {
    mask-image: url(${BorderedSVG});
    mask-size: 100%;
    background-color: lightgray;
    mask-repeat: no-repeat;
    width: 26px;
    height: 26px;
    fill: ${(props) =>
      props.isClicked ? "rgba(255, 80, 0, 100%)" : "transparent"};
    stroke: ${(props) =>
      props.isClicked ? "rgba(255, 80, 0, 100%)" : "transparent"};
    stroke-width: 4px;
    transition: ${(props) => (props.isClicked ? "0s" : "1s")};
    stroke-dasharray: 85;
    stroke-dashoffset: 85;
    :hover {
      stroke-dasharray: -85;
      stroke-dashoffset: 0;
      stroke: rgba(255, 80, 0, 100%);
    }
  }
`;
export const Star: React.FunctionComponent<StarProps> = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <StarWrapper
      onClick={() => {
        setIsClicked((p) => !p);
        onClick();
      }}
      isClicked={isClicked}
    >
      <StarIcon />
    </StarWrapper>
  );
};
