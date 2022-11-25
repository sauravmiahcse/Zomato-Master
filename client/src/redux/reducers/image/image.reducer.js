import { GET_IMAGE } from "./image.type";

const initialState = {
  image: [],
};

const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default ImageReducer;
