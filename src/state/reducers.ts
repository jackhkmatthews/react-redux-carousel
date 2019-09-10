import { combineReducers } from "redux";
import {
  initialActiveCardImgSrcState,
  initialCardImageFilterState,
  initialCardsState,
  initialDetailState,
  initialNavXTranslateState
} from "./initial";
import {
  APP_ACTION_TYPES,
  ICard,
  ISetActiveCardAction,
  ISetCardImageFilterAction,
  ISetDetailAction,
  ISetNavXTranslateAction,
  IToggleCardAction
} from "./types";

function cards(state = initialCardsState, action: IToggleCardAction) {
  switch (action.type) {
    case APP_ACTION_TYPES.toggleCard:
      return state.map((card: ICard) => {
        return {
          ...card,
          active: card.imgSrc === action.imgSrc ? true : false,
          flipped:
            card.imgSrc === action.imgSrc && card.active ? !card.flipped : false
        };
      });
    default:
      return state;
  }
}

function activeCardImgSrc(
  state = initialActiveCardImgSrcState,
  action: ISetActiveCardAction
) {
  switch (action.type) {
    case APP_ACTION_TYPES.setActiveCard:
      return action.imgSrc;
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

function navXTranslate(
  state = initialNavXTranslateState,
  action: ISetNavXTranslateAction
) {
  switch (action.type) {
    case APP_ACTION_TYPES.setNavXTranslate:
      return action.xTranslate;
    default:
      return state;
  }
}

function detail(state = initialDetailState, action: ISetDetailAction) {
  switch (action.type) {
    case APP_ACTION_TYPES.setDetail:
      return action.detail;
    default:
      return state;
  }
}

export const carouselApp = combineReducers({
  activeCardImgSrc,
  cardImageFilter,
  cards,
  detail,
  navXTranslate
});
