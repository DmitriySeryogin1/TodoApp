import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { SquareIcon } from "./SquareIcon";
import SolidSquare from "../icons/iconmonstr-square-filled.svg";
import LineSquare from "../icons/iconmonstr-square-lined.svg";
import CheckboxIcon from "../icons/iconmonstr-check-mark-square-filled.svg";

interface CheckboxProps {
  onClick: () => void;
}
const enter = keyframes`
  100% {
    stroke: rgba(0, 160, 255, 80%);
    stroke-dashoffset: -86;
  }
`;
const CheckboxWrapper = styled.div<{ isClicked: boolean }>`
  cursor: pointer;
  margin-top: 3px;
  mask-image: url(${CheckboxIcon});
  mask-repeat: no-repeat;
  mask-size: 100%;
  background-color: ${(props) =>
    props.isClicked ? "rgba(0, 160, 255, 80%)" : "transparent"};

  > svg {
    transform: rotateZ(270deg);
    mask-image: url(${LineSquare});
    mask-size: 100%;
    background-color: lightgray;
    mask-repeat: no-repeat;
    width: 26px;
    height: 26px;
    fill: ${(props) =>
      props.isClicked ? "rgba(0, 160, 255, 80%)" : "transparent"};
    stroke: ${(props) =>
      props.isClicked ? "rgba(0, 160, 255, 80%)" : "transparent"};
    stroke-width: 4px;
    transition: ${(props) => (props.isClicked ? "0s" : "1s")};
    stroke-dasharray: 85;
    stroke-dashoffset: -85;
    :hover {
      stroke: rgba(0, 160, 255, 80%);
      stroke-dashoffset: 0;
      stroke-dasharray: 85;
    }
  }
`;

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  onClick,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <CheckboxWrapper
      onClick={() => {
        onClick();
        setIsClicked(!isClicked);
      }}
      isClicked={isClicked}
    >
      <SquareIcon />
    </CheckboxWrapper>
  );
};
