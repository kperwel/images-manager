import { imageReducer } from "../reducer";
import {
  GET_IMAGE_SUCCESS,
  LIST_STATUS,
  GET_IMAGES_SUCCESS,
  IMAGE_STATUS
} from "../types";

const testArray = [
  {
    id: "0",
    url: "url",
    thumb_url: "thumb_url",
    title: "title",
    description: "description"
  }
];

const initialState = {
  items: {},
  status: {},
  list: [],
  listStatus: LIST_STATUS.INIT
};

describe("reducer", () => {
  it("Sets items from payload in state and sets list status", () => {
    expect(
      imageReducer(undefined, { type: GET_IMAGES_SUCCESS, payload: testArray })
    ).toEqual({
      ...initialState,
      items: {
        "0": {
          id: "0",
          url: "url",
          thumb_url: "thumb_url",
          title: "title",
          description: "description"
        }
      },
      list: ["0"],
      listStatus: LIST_STATUS.READY
    });
  });
  it("Sets items from payload in state", () => {
    expect(
      imageReducer(undefined, {
        type: GET_IMAGE_SUCCESS,
        payload: testArray[0]
      })
    ).toEqual({
      ...initialState,
      items: {
        "0": {
          id: "0",
          url: "url",
          thumb_url: "thumb_url",
          title: "title",
          description: "description"
        }
      },
      status: {
        "0": IMAGE_STATUS.READY
      }
    });
  });
});
