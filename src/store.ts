import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { imageReducer } from "./images/reducer";

export default function configureStore() {
  return createStore(imageReducer, applyMiddleware(thunk));
}
