import { Tag } from "../tags/types";

export type Image = {
  id: string;
  url: string;
  likes: number;
  tags: Tag[];
  likedByUser: boolean;
};

export interface ImagesState {
  list: Image[];
}
