import { connect } from "react-redux";
import {
  setActiveCard,
  setCardImageFilter,
  setDetail,
  setNavXTranslate
} from "../../state/actions";
import { CardImageFilter, IAppState } from "../../state/types";
import Action from "../action/action";

export interface IFilterActionProps {
  filter: CardImageFilter;
}

const mapStateToProps = (state: IAppState, ownProps: any) => ({
  active: ownProps.filter === state.cardImageFilter
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  handleClick: () => {
    dispatch(setCardImageFilter(ownProps.filter));
    dispatch(setNavXTranslate(0));
    dispatch(setActiveCard(null));
    dispatch(setDetail(false));
  }
});

const FilterAction = connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Action);

export default FilterAction;
