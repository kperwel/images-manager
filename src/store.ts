import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from "./images/reducer";


export default function configureStore(initialState={}) {
 return createStore(reducer, initialState, applyMiddleware(thunk));
}