import { connect } from "react-redux";
import { toggleCard } from "../../state/actions";
import {
  CARD_IMAGE_FILTERS,
  CardImageFilter,
  IAppState,
  ICard
} from "../../state/types";
import CardList from "../card-list/card-list";

const getVisibleCards = (cards: ICard[], filter: CardImageFilter) => {
  switch (filter) {
    case CARD_IMAGE_FILTERS.showKind:
      return cards.filter(card => card.kind);
    case CARD_IMAGE_FILTERS.showEvil:
      return cards.filter(card => !card.kind);
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
    handleCardClick: (imgSrc: string) => {
      dispatch(toggleCard(imgSrc));
    }
  };
};

const VisibleCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

export default VisibleCardList;
