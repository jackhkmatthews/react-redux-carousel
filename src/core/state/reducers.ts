import { combineReducers } from "redux";
import {
  CardImageFilters,
  SET_ACTIVE_CARD,
  SET_CARD_IMAGE_FILTER,
  TOGGLE_CARD
} from "./actions";

const initialCards: any[] = [
  {
    color: "red",
    description: "this is the description",
    flipped: false,
    image: {
      altText: "this is the alt",
      src: "foo.com"
    }
  },
  {
    color: "blue",
    description: "this is the description",
    flipped: false,
    image: {
      altText: "this is the alt",
      src: "foo.com"
    }
  }
];

function cards(state = initialCards, action: any) {
  switch (action.type) {
    case TOGGLE_CARD:
      return state.map((card: any, index: number) => {
        return {
          ...card,
          fipped: index === action.index
        };
      });
    default:
      return state;
  }
}

function activeCardIndex(state = 0, action: any) {
  switch (action.type) {
    case SET_ACTIVE_CARD:
      return action.index;
    default:
      return state;
  }
}

function cardImageFilter(
  state: string = CardImageFilters.SHOW_ALL,
  action: any
) {
  switch (action.type) {
    case SET_CARD_IMAGE_FILTER:
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
