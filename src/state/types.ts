export enum LOCATIONS {
  canary = "CANARY",
  guatemala = "GUATEMALA",
  panama = "PANAMA",
  wales = "WALES",
  worchester = "WORCHESTER"
}

export type Location =
  | LOCATIONS.canary
  | LOCATIONS.guatemala
  | LOCATIONS.panama
  | LOCATIONS.wales
  | LOCATIONS.worchester;

export interface ICard {
  active: boolean;
  color: string;
  location: Location;
  imgAltText: string;
  imgSrc: string;
}

export enum CARD_IMAGE_FILTERS {
  showAll = "SHOW_ALL",
  showCanary = "SHOW_CANARY",
  showGuatemala = "SHOW_GUATEMALA",
  showPanama = "SHOW_PANAMA",
  showWales = "SHOW_WALES",
  showWorcester = "SHOW_WORCHESTER"
}

export type CardImageFilter =
  | CARD_IMAGE_FILTERS.showAll
  | CARD_IMAGE_FILTERS.showCanary
  | CARD_IMAGE_FILTERS.showGuatemala
  | CARD_IMAGE_FILTERS.showPanama
  | CARD_IMAGE_FILTERS.showWales
  | CARD_IMAGE_FILTERS.showWorcester;

export type ActiveCardImgSrc = null | string;

export type NavXTranslate = number;

export type Detail = boolean;

export interface IAppState {
  cards: ICard[];
  cardImageFilter: CardImageFilter;
  activeCardImgSrc: ActiveCardImgSrc;
  navXTranslate: NavXTranslate;
  detail: Detail;
}

export enum APP_ACTION_TYPES {
  setActiveCard = "SET_ACTIVE_CARD",
  setCardImageFilter = "SET_CARD_IMAGE_FILTER",
  setNavXTranslate = "SET_NAV_X_TRANSLATE",
  setDetail = "SET_DETAIL"
}

export type AppActionType =
  | APP_ACTION_TYPES.setActiveCard
  | APP_ACTION_TYPES.setCardImageFilter
  | APP_ACTION_TYPES.setNavXTranslate
  | APP_ACTION_TYPES.setDetail;

export interface ISetActiveCardAction {
  type: typeof APP_ACTION_TYPES.setActiveCard;
  imgSrc: ActiveCardImgSrc;
}

export interface ISetNavXTranslateAction {
  type: typeof APP_ACTION_TYPES.setNavXTranslate;
  xTranslate: NavXTranslate;
}

export interface ISetCardImageFilterAction {
  type: typeof APP_ACTION_TYPES.setCardImageFilter;
  filter: CardImageFilter;
}

export interface ISetDetailAction {
  type: typeof APP_ACTION_TYPES.setDetail;
  detail: Detail;
}

export type AppAction =
  | ISetActiveCardAction
  | ISetNavXTranslateAction
  | ISetDetailAction
  | ISetCardImageFilterAction;
