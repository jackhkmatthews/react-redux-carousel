import {
  APP_ACTION_TYPES,
  CardImageFilter,
  ISetActiveCardAction,
  ISetCardImageFilterAction,
  IToggleCardAction
} from "./types";

export function toggleCard(index: number): IToggleCardAction {
  return { type: APP_ACTION_TYPES.toggleCard, index };
}

export function setActiveCard(index: number): ISetActiveCardAction {
  return { type: APP_ACTION_TYPES.setActiveCard, index };
}

export function setCardImageFilter(
  filter: CardImageFilter
): ISetCardImageFilterAction {
  return { type: APP_ACTION_TYPES.setCardImageFilter, filter };
}
