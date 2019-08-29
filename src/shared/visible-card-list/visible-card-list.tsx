import { connect } from "react-redux";
import { toggleCard } from "../../core/state/actions";
import { ICard } from "../../core/state/reducers";
import CardList from "../card-list/card-list";

const getVisibleCards = (cards: ICard[], filter: string) => {
  switch (filter) {
    case "SHOW_DAY":
      return cards.filter(card => card.day);
    case "SHOW_NIGHT":
      return cards.filter(card => !card.day);
    case "SHOW_ALL":
      return cards;
    default:
      return cards;
  }
};

const mapStateToProps = (state: any) => {
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
