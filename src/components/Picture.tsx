import styled from "styled-components";

import { Image } from "../reducers/images/types";

type Props = {
  image: Image;
};

export const Picture = ({ image }: Props) => {
  const { id, url, likes, tags } = image;

  return (
    <PictureWrapper>
      <PictureContainer src={url} alt={`${id}`} key={`${id}`} />
    </PictureWrapper>
  );
};

const PictureWrapper = styled.div`
  position: relative;
  padding-bottom: 10px;
`;

const PictureContainer = styled.img`
  width: 100%;
  height: 100%;
`;
