export const TOGGLE_CARD = "TOGGLE_CARD";
export const SET_ACTIVE_CARD = "SET_ACTIVE_CARD";
export const SET_CARD_IMAGE_FILTER = "SET_HOLIDAY_FILTER";

export const CardImageFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_DAY: "SHOW_DAY",
  SHOW_LANDSCAPES: "SHOW_LANDSCAPES",
  SHOW_NIGHT: "SHOW_NIGHT",
  SHOW_PEOPLE: "SHOW_PEOPLE"
};

export function toggleCard(index: number) {
  return { type: TOGGLE_CARD, index };
}

export function setCard(index: number) {
  return { type: SET_ACTIVE_CARD, index };
}

export function setCardImageFilter(filter: string) {
  return { type: SET_CARD_IMAGE_FILTER, filter };
}
