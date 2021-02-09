import { ReactNode } from "react";
import styled from "styled-components";

import {
  media,
  LAPTOP_MD_BREAKPOINT,
  DESKTOP_BREAKPOINT,
} from "../utils/styles";

interface Props {
  children: ReactNode;
}

export const Grid = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  ${media(LAPTOP_MD_BREAKPOINT)} {
    grid-template-columns: repeat(2, 1fr);

    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }

  ${media(DESKTOP_BREAKPOINT)} {
    grid-template-columns: 1fr;

    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;
