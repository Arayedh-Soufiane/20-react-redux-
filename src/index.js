import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer from "./reducer/routeReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import raven from "raven"
// import crashreporter from "crashreporter"
// import rootReducer from "./reducer/routeReducer"
// const store = createStore(reducer, applyMiddleware(logger));
// const todoApp = combineReducers(reducer);
