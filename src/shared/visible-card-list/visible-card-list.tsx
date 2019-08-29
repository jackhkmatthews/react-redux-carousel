import { connect } from "react-redux";
import { toggleCard } from "../../core/state/actions";
import {
  CARD_IMAGE_FILTERS,
  CardImageFilter,
  IAppState,
  ICard
} from "../../core/state/types";
import CardList from "../card-list/card-list";

const getVisibleCards = (cards: ICard[], filter: CardImageFilter) => {
  switch (filter) {
    case CARD_IMAGE_FILTERS.showDay:
      return cards.filter(card => card.day);
    case CARD_IMAGE_FILTERS.showNight:
      return cards.filter(card => !card.day);
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleCardClick: (index: number) => {
      dispatch(toggleCard(index));
    }
  };
};

const VisibleCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

export default VisibleCardList;
