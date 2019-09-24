import {
  ActiveCardImgSrc,
  APP_ACTION_TYPES,
  CardImageFilter,
  Detail,
  ISetActiveCardAction,
  ISetCardImageFilterAction,
  ISetDetailAction,
  ISetNavBackgroundColor,
  ISetNavXTranslateAction,
  NavBackgroundColor,
  NavXTranslate
} from "./types";

export function setActiveCard(imgSrc: ActiveCardImgSrc): ISetActiveCardAction {
  return { type: APP_ACTION_TYPES.setActiveCard, imgSrc };
}

export function setCardImageFilter(
  filter: CardImageFilter
): ISetCardImageFilterAction {
  return { type: APP_ACTION_TYPES.setCardImageFilter, filter };
}

export function setNavXTranslate(
  xTranslate: NavXTranslate
): ISetNavXTranslateAction {
  return { type: APP_ACTION_TYPES.setNavXTranslate, xTranslate };
}

export function setDetail(detail: Detail): ISetDetailAction {
  return { type: APP_ACTION_TYPES.setDetail, detail };
}

export function setNavBackgroundColor(
  color: NavBackgroundColor
): ISetNavBackgroundColor {
  return { type: APP_ACTION_TYPES.setNavBackgroundColor, color };
}
