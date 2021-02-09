import { Action } from "../../utils/reduxUtils";
import { TagsState } from "./types";

import { AddTag } from "../../constants/actionTypes";

const initialTagsState: TagsState = {
  list: [],
};

export const tagsReducer = (
  state: TagsState = initialTagsState,
  action: Action<any>
) => {
  switch (action.type) {
    case AddTag.type.SUCCESS: {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    default:
      return state;
  }
};
