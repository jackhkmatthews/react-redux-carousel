import { combineReducers } from "redux";
import {
  initialActiveCardImgSrcState,
  initialCardImageFilterState,
  initialCardsState,
  initialDetailState,
  initialNavBackgroundState,
  initialNavXTranslateState
} from "./initial";
import {
  APP_ACTION_TYPES,
  ISetActiveCardAction,
  ISetCardImageFilterAction,
  ISetDetailAction,
  ISetNavBackgroundColor,
  ISetNavXTranslateAction
} from "./types";

function cards(state = initialCardsState) {
  return state;
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

function navBackgroundColor(
  state = initialNavBackgroundState,
  action: ISetNavBackgroundColor
) {
  switch (action.type) {
    case APP_ACTION_TYPES.setNavBackgroundColor:
      return action.color;
    default:
      return state;
  }
}

export const carouselApp = combineReducers({
  activeCardImgSrc,
  cardImageFilter,
  cards,
  detail,
  navBackgroundColor,
  navXTranslate
});
