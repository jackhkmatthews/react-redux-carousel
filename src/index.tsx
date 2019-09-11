import React from "react";
import { render } from "react-dom";
import App from "./components/app/app";
import Provider from "./components/provider/provider.component";
import { store } from "./state/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
