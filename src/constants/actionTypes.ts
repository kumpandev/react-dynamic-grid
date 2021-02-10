import { createActions } from "../utils/reduxUtils";

export const AddImage = createActions("AddImage");

export const DeleteImage = createActions("DeleteImage");

export const AddTag = createActions("AddTage");

export const SetImageTag = createActions("SetImageTag");

export const RemoveImageTag = createActions("RemoveImageTag");

export const ToggleImageLike = createActions("ToggleImageLike");

export const AddImageLike = createActions("AddImageLike");

export const RemoveImageLike = createActions("RemoveImageLike");
