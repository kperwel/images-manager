import {
  ImagesState,
  ImageActionTypes,
  GET_IMAGE_REQUEST,
  GET_IMAGE_SUCCESS,
  GET_IMAGE_ERROR,
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  REMOVE_IMAGE_REQUEST,
  REMOVE_IMAGE_SUCCESS,
  REMOVE_IMAGE_ERROR,
  RENAME_IMAGE_ERROR,
  RENAME_IMAGE_REQUEST,
  RENAME_IMAGE_SUCCESS,
  GET_IMAGES_ERROR,
  IMAGE_STATUS,
  LIST_STATUS,
  Image
} from "./types";

const mapById = (images: Image[]) => {
  return images.reduce<{ [id: string]: Image }>((acc, image) => {
    acc[image.id] = image;
    return acc;
  }, {});
};

const initialState: ImagesState = {
  items: {},
  status: {},
  list: [],
  listStatus: LIST_STATUS.INIT
};

export function imageReducer(
  state = initialState,
  action: ImageActionTypes
): ImagesState {
    console.log(action.type);
  switch (action.type) {
    case GET_IMAGE_REQUEST:
      return {
        ...state,
        status: {
          [action.payload]: IMAGE_STATUS.FETCHING
        }
      };
    case GET_IMAGE_SUCCESS:
      return {
        ...state,
        status: {
          [action.payload.id]: IMAGE_STATUS.READY
        }
      };
    case GET_IMAGE_ERROR:
      return { ...state };
    case GET_IMAGES_REQUEST:
      return { ...state, listStatus: LIST_STATUS.FETCHING };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        listStatus: LIST_STATUS.READY,
        items: mapById(action.payload),
        list: action.payload.map(image => image.id)
      };
    case GET_IMAGES_ERROR:
      return { ...state, listStatus: LIST_STATUS.ERROR, list: [] };
    case REMOVE_IMAGE_REQUEST:
      return {
        ...state,
        status: { ...state.status, [action.payload]: IMAGE_STATUS.REMOVING }
      };
    case REMOVE_IMAGE_SUCCESS:
            const newItems = { ...state.items };
            delete newItems[action.payload];
      return { ...state, list: state.list.filter(id => id !== action.payload), items: newItems };
    case REMOVE_IMAGE_ERROR:
      return { ...state };
    case RENAME_IMAGE_REQUEST:
      return {
        ...state,
        status: { ...state.status, [action.payload.id]: IMAGE_STATUS.PATCHING }
      };
    case RENAME_IMAGE_SUCCESS:
      return {
        ...state,
        status: { ...state.status, [action.payload.id]: IMAGE_STATUS.READY },
        items: { ...state.items, [action.payload.id]: { ...action.payload }}
      };
    case RENAME_IMAGE_ERROR:
      return { ...state };
    default:
      return state;
  }
}
