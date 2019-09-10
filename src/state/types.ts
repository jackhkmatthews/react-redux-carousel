export interface ICard {
  active: boolean;
  color: string;
  kind: boolean;
  description: string;
  flipped: boolean;
  imgAltText: string;
  imgSrc: string;
}

export enum CARD_IMAGE_FILTERS {
  showAll = "SHOW_ALL",
  showKind = "SHOW_KIND",
  showEvil = "SHOW_EVIL",
  showWales = "SHOW_WALES",
  showCanary = "SHOW_CANARY",
  showWorcester = "SHOW_WORCHESTER"
}

export type CardImageFilter =
  | CARD_IMAGE_FILTERS.showAll
  | CARD_IMAGE_FILTERS.showKind
  | CARD_IMAGE_FILTERS.showEvil
  | CARD_IMAGE_FILTERS.showWales
  | CARD_IMAGE_FILTERS.showCanary
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
  toggleCard = "TOGGLE_CARD",
  setActiveCard = "SET_ACTIVE_CARD",
  setCardImageFilter = "SET_CARD_IMAGE_FILTER",
  setNavXTranslate = "SET_NAV_X_TRANSLATE",
  setDetail = "SET_DETAIL"
}

export type AppActionType =
  | APP_ACTION_TYPES.toggleCard
  | APP_ACTION_TYPES.setActiveCard
  | APP_ACTION_TYPES.setCardImageFilter
  | APP_ACTION_TYPES.setNavXTranslate
  | APP_ACTION_TYPES.setDetail;

export interface IToggleCardAction {
  type: typeof APP_ACTION_TYPES.toggleCard;
  imgSrc: string;
}

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
  | IToggleCardAction
  | ISetActiveCardAction
  | ISetNavXTranslateAction
  | ISetDetailAction
  | ISetCardImageFilterAction;
