import * as React from "react";
import { useSelector } from "react-redux";
import { selectNavBackgroundColor } from "../../state/selectors";
import { CARD_IMAGE_FILTERS } from "../../state/types";
import FilterAction from "../filter-action/filter-action";
import VisibleCardList from "../visible-card-list/visible-card-list";
import * as S from "./app.styles";

export default function App() {
  const navBackgroundColor = useSelector(selectNavBackgroundColor);
  return (
    <S.App>
      <S.Nav>
        <FilterAction filter={CARD_IMAGE_FILTERS.showAll}>
          Show All
        </FilterAction>
        <FilterAction filter={CARD_IMAGE_FILTERS.showCanary}>
          Show Canary
        </FilterAction>
        <FilterAction filter={CARD_IMAGE_FILTERS.showGuatemala}>
          Show Guatemala
        </FilterAction>
        <FilterAction filter={CARD_IMAGE_FILTERS.showPanama}>
          Show Panama
        </FilterAction>
        <FilterAction filter={CARD_IMAGE_FILTERS.showWales}>
          Show Wales
        </FilterAction>
        <FilterAction filter={CARD_IMAGE_FILTERS.showWorcester}>
          Show Worchester
        </FilterAction>
      </S.Nav>
      <main>
        <S.StyledHorizontalScroll bgColor={navBackgroundColor}>
          <VisibleCardList />
        </S.StyledHorizontalScroll>
      </main>
    </S.App>
  );
}
