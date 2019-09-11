import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { carouselApp } from "./reducers";

export const store = createStore(carouselApp, composeWithDevTools());
