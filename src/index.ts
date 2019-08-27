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
