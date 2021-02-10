import React from "react";
import styled from "styled-components";
import Plus from "../icons/Plus";

interface Props {
  onClick(): void;
}

const AddTag = ({ onClick }: Props) => {
  return (
    <Root onClick={onClick}>
      <Plus />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  cursor: pointer;
  background-color: #cacaca;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 6%);
  margin-left: 5px;
`;

export default AddTag;
