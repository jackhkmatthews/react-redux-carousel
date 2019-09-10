import { connect } from "react-redux";
import {
  CARD_IMAGE_FILTERS,
  CardImageFilter,
  IAppState,
  ICard,
  LOCATIONS
} from "../../state/types";
import CardList from "../card-list/card-list";

const getVisibleCards = (cards: ICard[], filter: CardImageFilter) => {
  switch (filter) {
    case CARD_IMAGE_FILTERS.showCanary:
      return cards.filter(card => card.location === LOCATIONS.canary);
    case CARD_IMAGE_FILTERS.showGuatemala:
      return cards.filter(card => card.location === LOCATIONS.guatemala);
    case CARD_IMAGE_FILTERS.showPanama:
      return cards.filter(card => card.location === LOCATIONS.panama);
    case CARD_IMAGE_FILTERS.showWales:
      return cards.filter(card => card.location === LOCATIONS.wales);
    case CARD_IMAGE_FILTERS.showWorcester:
      return cards.filter(card => card.location === LOCATIONS.worchester);
    case CARD_IMAGE_FILTERS.showAll:
      return cards;
    default:
      return cards;
  }
};

const mapStateToProps = (state: IAppState) => {
  return {
    cards: getVisibleCards(state.cards, state.cardImageFilter)
  };
};

const VisibleCardList = connect(mapStateToProps)(CardList);

export default VisibleCardList;
