import { Action } from "../../utils/reduxUtils";
import { ImagesState } from "./types";

import {
  AddImage,
  AddImageLike,
  DeleteImage,
  RemoveImageLike,
  RemoveImageTag,
  SetImageTag,
} from "../../constants/actionTypes";

const initialImagesSatate: ImagesState = {
  list: [
    {
      id: "something",
      url:
        "https://www.popsci.com/resizer/QgEMm6gNVXFYEFCmonq-Tp9_D7g=/760x506/cloudfront-us-east-1.images.arcpublishing.com/bonnier/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg",
      likes: 0,
      tags: [],
    },
    {
      id: "something",
      url: "https://miro.medium.com/max/4800/1*jFyawcsqoYctkTuZg6wQ1A.jpeg",
      likes: 0,
      tags: [],
    },
    {
      id: "something",
      url:
        "https://i.pinimg.com/originals/5c/79/b5/5c79b5da91825df6bfd7716a623dcfbc.jpg",
      likes: 0,
      tags: [],
    },
    {
      id: "something",
      url:
        "https://i.pinimg.com/originals/4c/d8/6e/4cd86e99205fc1331836cc28b43de474.jpg",
      likes: 0,
      tags: [],
    },
    {
      id: "something",
      url:
        "https://i.pinimg.com/originals/5c/79/b5/5c79b5da91825df6bfd7716a623dcfbc.jpg",
      likes: 0,
      tags: [],
    },
    {
      id: "something",
      url:
        "https://www.popsci.com/resizer/QgEMm6gNVXFYEFCmonq-Tp9_D7g=/760x506/cloudfront-us-east-1.images.arcpublishing.com/bonnier/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg",
      likes: 0,
      tags: [],
    },
    {
      id: "something",
      url: "https://miro.medium.com/max/4800/1*jFyawcsqoYctkTuZg6wQ1A.jpeg",
      likes: 0,
      tags: [],
    },
    {
      id: "something",
      url:
        "https://i.pinimg.com/originals/5c/79/b5/5c79b5da91825df6bfd7716a623dcfbc.jpg",
      likes: 0,
      tags: [],
    },
    {
      id: "something",
      url:
        "https://i.pinimg.com/originals/4c/d8/6e/4cd86e99205fc1331836cc28b43de474.jpg",
      likes: 0,
      tags: [],
    },
    {
      id: "something",
      url:
        "https://i.pinimg.com/originals/5c/79/b5/5c79b5da91825df6bfd7716a623dcfbc.jpg",
      likes: 0,
      tags: [],
    },
  ],
};

export const imagesReducer = (
  state: ImagesState = initialImagesSatate,
  action: Action<any>
) => {
  switch (action.type) {
    case AddImage.type.SUCCESS: {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    case DeleteImage.type.SUCCESS: {
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.payload),
      };
    }
    case AddImageLike.type.SUCCESS: {
      return {
        ...state,
        list: state.list.map((image) => {
          if (image.id === action.payload) {
            image.likes += 1;
          }

          return image;
        }),
      };
    }
    case RemoveImageLike.type.SUCCESS: {
      return {
        ...state,
        list: state.list.map((image) => {
          if (image.id === action.payload) {
            image.likes -= 1;
          }

          return image;
        }),
      };
    }
    case SetImageTag.type.SUCCESS: {
      return {
        ...state,
        list: state.list.map((image) => {
          if (image.id === action.payload.imageId) {
            image.tags.push(action.payload.tagId);
          }

          return image;
        }),
      };
    }
    case RemoveImageTag.type.SUCCESS: {
      return {
        ...state,
        list: state.list.map((image) => {
          if (image.id === action.payload.imageId) {
            image.tags = image.tags.filter((id) => id !== action.payload.tagId);
          }

          return image;
        }),
      };
    }
    default:
      return state;
  }
};
