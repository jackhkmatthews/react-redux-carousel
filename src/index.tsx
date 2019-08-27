import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  CardImageFilters,
  setCardImageFilter,
  toggleCard
} from "./state/actions";
import { store } from "./state/store";

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(toggleCard(0));
store.dispatch(toggleCard(1));
store.dispatch(setCardImageFilter(CardImageFilters.SHOW_PEOPLE));

// Stop listening to state updates
unsubscribe();

const myName = "Josh Perez";
const element = <h1>Hello, {myName}</h1>;

ReactDOM.render(element, document.getElementById("root"));
