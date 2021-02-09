import { ImagesState } from "./images/types";
import { TagsState } from "./tags/types";

export type State = {
  images: ImagesState;
  tags: TagsState;
};
