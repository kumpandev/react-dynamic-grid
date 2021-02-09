import { combineReducers } from "redux";
import { imagesReducer } from "./images";
import { tagsReducer } from "./tags";

export const rootReducer = combineReducers({
  images: imagesReducer,
  tags: tagsReducer,
});
