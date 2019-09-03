import { CARD_IMAGE_FILTERS, CardImageFilter, IAppState, ICard } from "./types";

export const initialCardsState: ICard[] = [
  {
    active: false,
    color: "peachpuff",
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332__340.jpg",
    kind: false
  },
  {
    active: false,
    color: "lightblue",
    description: "this is the description",
    flipped: true,
    imgAltText: "this is the alt",
    imgSrc: "https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345__340.jpg",
    kind: false
  },
  {
    active: false,
    color: "pink",
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2015/01/31/12/36/cat-618470__480.jpg",
    kind: true
  },
  {
    active: false,
    color: "peachpuff",
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462__480.jpg",
    kind: false
  },
  {
    active: false,
    color: "lightblue",
    description: "this is the description",
    flipped: true,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/09/05/23/00/persian-leopard-1647940__480.jpg",
    kind: true
  },
  {
    active: false,
    color: "pink",
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404__480.jpg",
    kind: true
  },
  {
    active: false,
    color: "peachpuff",
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg",
    kind: false
  },
  {
    active: false,
    color: "lightblue",
    description: "this is the description",
    flipped: true,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/11/13/07/14/cat-eyes-2944820__480.jpg",
    kind: false
  },
  {
    active: false,
    color: "pink",
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2015/11/15/22/09/cat-1044914__480.jpg",
    kind: true
  },
  {
    active: false,
    color: "peachpuff",
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__480.jpg",
    kind: false
  },
  {
    active: false,
    color: "lightblue",
    description: "this is the description",
    flipped: true,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544__480.jpg",
    kind: true
  },
  {
    active: false,
    color: "pink",
    description: "this is the description",
    flipped: false,
    imgAltText: "this is the alt",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg",
    kind: true
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
