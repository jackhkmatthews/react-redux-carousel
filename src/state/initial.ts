import {
  ActiveCardImgSrc,
  CARD_IMAGE_FILTERS,
  CardImageFilter,
  Detail,
  IAppState,
  ICard,
  LOCATIONS,
  NavXTranslate
} from "./types";

export const initialCardsState: ICard[] = [
  {
    active: false,
    color: "peachpuff",
    imgAltText: "this is the alt",
    imgSrc:
      "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/guatemala_1.jpg",
    location: LOCATIONS.guatemala
  },
  {
    active: false,
    color: "peachpuff",
    imgAltText: "this is the alt",
    imgSrc:
      "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/guatemala_2.jpg",
    location: LOCATIONS.guatemala
  },
  {
    active: false,
    color: "peachpuff",
    imgAltText: "this is the alt",
    imgSrc:
      "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/guatemala_3.jpg",
    location: LOCATIONS.guatemala
  },
  {
    active: false,
    color: "peachpuff",
    imgAltText: "this is the alt",
    imgSrc:
      "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/wales_1.jpg",
    location: LOCATIONS.wales
  },
  {
    active: false,
    color: "peachpuff",
    imgAltText: "this is the alt",
    imgSrc:
      "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/wales_2.jpg",
    location: LOCATIONS.wales
  },
  {
    active: false,
    color: "peachpuff",
    imgAltText: "this is the alt",
    imgSrc:
      "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/wales_3.jpg",
    location: LOCATIONS.wales
  },
  {
    active: false,
    color: "peachpuff",
    imgAltText: "this is the alt",
    imgSrc:
      "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/worchester_1.jpg",
    location: LOCATIONS.worchester
  },
  {
    active: false,
    color: "peachpuff",
    imgAltText: "this is the alt",
    imgSrc:
      "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/worchester_2.jpg",
    location: LOCATIONS.worchester
  },
  {
    active: false,
    color: "peachpuff",
    imgAltText: "this is the alt",
    imgSrc:
      "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/worchester_3.jpg",
    location: LOCATIONS.worchester
  },
  {
    active: false,
    color: "peachpuff",
    imgAltText: "this is the alt",
    imgSrc:
      "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/canary_1.jpg",
    location: LOCATIONS.canary
  },
  {
    active: false,
    color: "peachpuff",
    imgAltText: "this is the alt",
    imgSrc:
      "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/panama_1.jpg",
    location: LOCATIONS.panama
  }
];

export const initialCardImageFilterState: CardImageFilter =
  CARD_IMAGE_FILTERS.showAll;

export const initialActiveCardImgSrcState: ActiveCardImgSrc = null;

export const initialNavXTranslateState: NavXTranslate = 0;

export const initialDetailState: Detail = false;

export const initialAppState: IAppState = {
  activeCardImgSrc: initialActiveCardImgSrcState,
  cardImageFilter: initialCardImageFilterState,
  cards: initialCardsState,
  detail: initialDetailState,
  navXTranslate: initialNavXTranslateState
};
