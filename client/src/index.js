import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./reset.css";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import CounterComponent from "./components/CounterComponent";
const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment": {
      const newState = {
        ...state,
        count: state.count + 1,
      };
      return newState;
    }
    case "decrement": {
      const newState = {
        ...state,
        count: state.count - 1,
      };
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(countReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CounterComponent />
  </Provider>
  // <React.StrictMode>
  // <Router>
  //   <App />
  // </Router>
  // </React.StrictMode>
);
