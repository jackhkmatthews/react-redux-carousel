import { CARD_IMAGE_FILTERS, CardImageFilter, IAppState, ICard } from "./types";

export const initialCardsState: ICard[] = [
  {
    color: "peachpuff",
    day: true,
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332__340.jpg"
  },
  {
    color: "lightblue",
    day: false,
    description: "this is the description",
    flipped: true,
    imgAltText: "this is the alt",
    imgSrc: "https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345__340.jpg"
  },
  {
    color: "pink",
    day: true,
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164_960_720.jpg"
  },
  {
    color: "peachpuff",
    day: true,
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg"
  },
  {
    color: "lightblue",
    day: false,
    description: "this is the description",
    flipped: true,
    imgAltText: "this is the alt",
    imgSrc: "https://cdn.pixabay.com/photo/2015/08/30/10/58/cat-914110__480.jpg"
  },
  {
    color: "pink",
    day: true,
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720__480.jpg"
  }
];

export const initialCardImageFilterState: CardImageFilter =
  CARD_IMAGE_FILTERS.showAll;

export const initialActiveCardIndexState: number = 0;

export const initialAppState: IAppState = {
  activeCardIndex: initialActiveCardIndexState,
  cardImageFilter: initialCardImageFilterState,
  cards: initialCardsState
};
