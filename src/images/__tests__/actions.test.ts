import { createActions } from "../actions";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { GET_IMAGES_SUCCESS, Image } from "../types";

const mockImage: Image = {
  id: "0",
  url: "url",
  thumb_url: "thumb_url",
  title: "title",
  description: "description"
};

const makeStore = configureStore([thunk, reduxPromise]);

describe("actions", () => {
  const mockApi = {
    get: (id: string) => new Promise<Image>(resolve => resolve(mockImage)),
    list: () => new Promise<Image[]>(resolve => resolve([mockImage])),
    delete: (id: string) => new Promise<Image>(resolve => resolve(mockImage)),
    patch: (id: string, properties: Partial<Image>) => new Promise<Image>(resolve => resolve(mockImage))
  };
  let store: MockStoreEnhanced<any>;

  beforeEach(() => {
    store = makeStore({});
  });

  describe("Get all images", () => {
    const { getImages } = createActions(mockApi);

    it("Should dispatch GET_IMAGES_SUCCESS on api.list reolve", () => {
      store.dispatch(getImages() as any).then(() => {
        expect(store.getActions()).toContainEqual({
          type: GET_IMAGES_SUCCESS,
          payload: [mockImage]
        });
      });

    });
  });
});
