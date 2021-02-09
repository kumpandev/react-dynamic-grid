import styled from "styled-components";

import { Search } from "../components/Search";
import { PictureGrid } from "../components/PictureGrid";
import { SelectImage } from "../components/addImage";

export const HomePage = () => {
  return (
    <Root>
      {/* <Search
        searchArr={["Hello", "Something", "Image", "PUGB"]}
        onSubmit={(value) => console.log(value)}
      />
      */}
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
