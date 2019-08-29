import { connect } from "react-redux";
import { setCardImageFilter } from "../../core/state/actions";
import { CardImageFilter, IAppState } from "../../core/state/types";
import Action from "../action/action";

export interface IFilterActionProps {
  filter: CardImageFilter;
}

const mapStateToProps = (state: IAppState, ownProps: any) => ({
  active: ownProps.filter === state.cardImageFilter
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  handleClick: () => dispatch(setCardImageFilter(ownProps.filter))
});

const FilterAction = connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Action);

export default FilterAction;
