import React from "react";
import styled from "styled-components";
import HeartIcon from "../icons/HeartIcon";

interface Props {
  isLiked: boolean;
  onClick(): void;
}

const LikeComponent = ({ isLiked, onClick }: Props) => {
  return (
    <Root isLiked={isLiked} onClick={onClick}>
      <StyledHeartIcon isLiked={isLiked} />
    </Root>
  );
};

const Root = styled.div<HeartIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  cursor: pointer;
  background-color: #cacaca;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 6%);
`;

interface HeartIconProps {
  isLiked: boolean;
}

const StyledHeartIcon = styled(HeartIcon)<HeartIconProps>`
  fill: ${({ isLiked }: HeartIconProps) => (isLiked ? "#000" : "#fff")};
`;

export default LikeComponent;
