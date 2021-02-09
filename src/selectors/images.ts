import { State } from "../reducers/types";
import { Image } from "../reducers/images/types";
import { Tag } from "../reducers/tags/types";

export const getImages = (state: State): Image[] => state.images.list;

export const getTags = (state: State): Tag[] => state.tags.list;

export const getTagById = (tagId: string) => (state: State): Tag | undefined =>
  state.tags.list.find(({ id }) => tagId);
