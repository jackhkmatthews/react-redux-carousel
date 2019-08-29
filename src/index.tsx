import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./core/app";
import { store } from "./core/state/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
store.subscribe(() => console.log(store.getState()));
