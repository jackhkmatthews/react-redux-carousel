import { combineReducers } from "redux";
import {
  CardImageFilters,
  SET_ACTIVE_CARD,
  SET_CARD_IMAGE_FILTER,
  TOGGLE_CARD
} from "./actions";

export interface ICard {
  color: string;
  description: string;
  flipped: boolean;
  imgAltText: string;
  imgSrc: string;
}

export const initialCards: ICard[] = [
  {
    color: "paleviolet",
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332__340.jpg"
  },
  {
    color: "lightblue",
    description: "this is the description",
    flipped: true,
    imgAltText: "this is the alt",
    imgSrc: "https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345__340.jpg"
  },
  {
    color: "pink",
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164_960_720.jpg"
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
