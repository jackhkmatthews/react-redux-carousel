import * as React from "react";
import { CARD_IMAGE_FILTERS } from "../../state/types";
import FilterAction from "../filter-action/filter-action";
import VisibleCardList from "../visible-card-list/visible-card-list";
import * as S from "./app.styles";

function App() {
  return (
    <div>
      <header>
        <h1>React Redux Carousel</h1>
      </header>
      <nav>
        <FilterAction filter={CARD_IMAGE_FILTERS.showAll}>
          Show All
        </FilterAction>
        <FilterAction filter={CARD_IMAGE_FILTERS.showKind}>
          Show Kind
        </FilterAction>
        <FilterAction filter={CARD_IMAGE_FILTERS.showEvil}>
          Show Evil
        </FilterAction>
      </nav>
      <main>
        <S.StyledClickToScroll>
          <VisibleCardList />
        </S.StyledClickToScroll>
      </main>
    </div>
  );
}

export default App;
