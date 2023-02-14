import axiosMiddleware from "redux-axios-middleware";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers/RootReducer";
import HttpService from "app/services/HttpService";

import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()
const initialState = {};

//const middlewares = [thunk];
const middlewares = [
  thunk,
  sagaMiddleware,
  //routerMiddleware(browserHistory),
  axiosMiddleware(HttpService.getAxiosClient())
];
export const Store = createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares)
    // applyMiddleware(...middlewares),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(mySaga)