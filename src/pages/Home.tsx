import styled from "styled-components";

import { PictureGrid } from "../components/PictureGrid";
import { SelectImage } from "../components/addImage";

export const HomePage = () => {
  return (
    <Root>
      <SelectImage />
      <PictureGrid />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;
