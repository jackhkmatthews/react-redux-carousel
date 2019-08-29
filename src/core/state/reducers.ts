import { combineReducers } from "redux";
import {
  initialActiveCardIndexState,
  initialCardImageFilterState,
  initialCardsState
} from "./initial";
import {
  APP_ACTION_TYPES,
  ISetActiveCardAction,
  ISetCardImageFilterAction,
  IToggleCardAction
} from "./types";

function cards(state = initialCardsState, action: IToggleCardAction) {
  switch (action.type) {
    case APP_ACTION_TYPES.toggleCard:
      return state.map((card: any, index: number) => {
        return {
          ...card,
          flipped: index === action.index ? !card.flipped : card.flipped
        };
      });
    default:
      return state;
  }
}

function activeCardIndex(
  state = initialActiveCardIndexState,
  action: ISetActiveCardAction
) {
  switch (action.type) {
    case APP_ACTION_TYPES.setActiveCard:
      return action.index;
    default:
      return state;
  }
}

function cardImageFilter(
  state = initialCardImageFilterState,
  action: ISetCardImageFilterAction
) {
  switch (action.type) {
    case APP_ACTION_TYPES.setCardImageFilter:
      return action.filter;
    default:
      return state;
  }
}

export const carouselApp = combineReducers({
  activeCardIndex,
  cardImageFilter,
  cards
});