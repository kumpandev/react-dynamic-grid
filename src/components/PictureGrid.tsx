import styled from "styled-components";
import { useSelector } from "react-redux";

import { Grid } from "../components/Grid";
import { Picture } from "../components/Picture";

import { getImages } from "../selectors/images";
import { Image } from "../reducers/images/types";

import {
  media,
  LAPTOP_MD_BREAKPOINT,
  DESKTOP_BREAKPOINT,
} from "../utils/styles";

export const PictureGrid = () => {
  const columns: Image[][] = [[], [], []];

  const imagesList = useSelector(getImages);

  imagesList.forEach((image, idx) => {
    columns[idx % 3].push(image);
  });

  return (
    <GridContainer>
      <Grid>
        {columns.map((col, colIdx) => {
          return (
            <ColumnContainer key={colIdx}>
              {col.map((image, idx) => (
                <Picture image={image} key={`${idx}${colIdx}`} />
              ))}
            </ColumnContainer>
          );
        })}
      </Grid>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  margin: 25px 0;
  max-width: 80%;

  ${media(LAPTOP_MD_BREAKPOINT)} {
    max-width: 90%;
  }

  ${media(DESKTOP_BREAKPOINT)} {
    max-width: 98%;
  }
`;

const ColumnContainer = styled.div`
  position: relative;
`;

