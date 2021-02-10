import styled from "styled-components";
import { CloseIcon } from "../icons/CloseIcon";

type Props = {
  title: string;
  onClick(): void;
};

export const Tag = ({ onClick, title }: Props) => {
  return (
    <Root>
      <TitleContainer>{title}</TitleContainer>
      <StyledCloseIcon color="#fff" onClick={onClick} />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  min-width: 80px;
  max-width: 140px;
  padding: 5px 10px;
  background: #0e64ce;
  border-radius: 8px;
  word-break: break-all;
  margin-bottom: 4px;
`;

const TitleContainer = styled.div`
  color: #fff;
  flex: 1;
  text-align: center;
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 20px;
  height: 20px;
`;
