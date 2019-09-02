export interface ICard {
  color: string;
  day: boolean;
  description: string;
  flipped: boolean;
  imgAltText: string;
  imgSrc: string;
}

export enum CARD_IMAGE_FILTERS {
  showAll = "SHOW_ALL",
  showDay = "SHOW_DAY",
  showNight = "SHOW_NIGHT"
}

export type CardImageFilter =
  | CARD_IMAGE_FILTERS.showAll
  | CARD_IMAGE_FILTERS.showDay
  | CARD_IMAGE_FILTERS.showNight;

export interface IAppState {
  cards: ICard[];
  activeCardIndex: number;
  cardImageFilter: CardImageFilter;
}

export enum APP_ACTION_TYPES {
  toggleCard = "TOGGLE_CARD",
  setActiveCard = "SET_ACTIVE_CARD",
  setCardImageFilter = "SET_CARD_IMAGE_FILTER"
}

export type AppActionType =
  | APP_ACTION_TYPES.toggleCard
  | APP_ACTION_TYPES.setActiveCard
  | APP_ACTION_TYPES.setCardImageFilter;

export interface IToggleCardAction {
  type: typeof APP_ACTION_TYPES.toggleCard;
  imgSrc: string;
}

export interface ISetActiveCardAction {
  type: typeof APP_ACTION_TYPES.setActiveCard;
  index: number;
}

export interface ISetCardImageFilterAction {
  type: typeof APP_ACTION_TYPES.setCardImageFilter;
  filter: CardImageFilter;
}

export type AppAction =
  | IToggleCardAction
  | ISetActiveCardAction
  | ISetCardImageFilterAction;
