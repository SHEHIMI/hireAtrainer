/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import allReducers from "../reducers/reducers";

// Configure persistor
const persistConfig = {
  key: "HIRETRAINER",
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["modalReducer"],
};

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// const composeEnhancer = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null;
let composeEnhancers = null;
if (process.env.NODE_ENV === "development") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

export const configureStore = () => {
  const pReducer = persistReducer(persistConfig, allReducers);
  return createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));
};

export const configurePersistor = (store) => persistStore(store);
