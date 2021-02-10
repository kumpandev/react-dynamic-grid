import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Like from "./Like";
import { Image } from "../reducers/images/types";
import { Tag as TagType } from "../reducers/tags/types";
import {
  RemoveImageTag,
  SetImageTag,
  ToggleImageLike,
} from "../constants/actionTypes";
import AddTag from "./AddTag";
import { Tag } from "./Tag";
import { TagsSearch } from "./TagsSearch";
import { getTags } from "../selectors/images";

type Props = {
  image: Image;
};

export const Picture = ({ image }: Props) => {
  const dispatch = useDispatch();

  const [isInputShown, setInputShown] = useState<boolean>(false);

  const allTags = useSelector(getTags);

  const { id, url, tags, likedByUser } = image;

  const toggleLike = () => {
    dispatch(ToggleImageLike.success({ imageId: id, isLiked: !likedByUser }));
  };

  const toggleShowInput = () => {
    setInputShown(!isInputShown);
  };

  const removeTag = (tagId: string) => {
    dispatch(RemoveImageTag.success({ tagId, imageId: id }));
  };

  const addTagToImage = (tag: TagType) => {
    dispatch(SetImageTag.success({ tag, imageId: id }));
    setInputShown(false);
  };

  return (
    <Root>
      <PictureWrapper>
        <PictureContainer src={url} alt={`${id}`} key={`${id}`} />
        <FeaturesWrapper>
          <Like isLiked={likedByUser} onClick={toggleLike} />
          <AddTag onClick={toggleShowInput} />
        </FeaturesWrapper>
      </PictureWrapper>
      {isInputShown && (
        <SearchTagsContainer>
          <TagsSearch searchArr={allTags} onSubmit={addTagToImage} />
        </SearchTagsContainer>
      )}
      {!!tags.length ? (
        <TagsContainer>
          {tags.map((tag) => (
            <Tag
              title={tag.name}
              key={tag.id}
              onClick={() => removeTag(tag.id)}
            />
          ))}
        </TagsContainer>
      ) : null}
    </Root>
  );
};

const Root = styled.div``;

const FeaturesWrapper = styled.div`
  position: absolute;
  display: none;
  top: 10px;
  right: 10px;
`;

const PictureWrapper = styled.div`
  position: relative;
  padding-bottom: 10px;
  z-index: 10;
  &:hover ${FeaturesWrapper} {
    display: flex;
  }
`;

const PictureContainer = styled.img`
  width: 100%;
  height: 100%;
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const SearchTagsContainer = styled.div`
  margin-bottom: 10px;
`;
