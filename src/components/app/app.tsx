import * as React from "react";
import { CARD_IMAGE_FILTERS } from "../../state/types";
import FilterAction from "../filter-action/filter-action";
import HorizontalScroll from "../horizontal-scroll/horizontal-scroll.component";
import VisibleCardList from "../visible-card-list/visible-card-list";

function App() {
  return (
    <div>
      <nav>
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
      </nav>
      <main>
        <HorizontalScroll>
          <VisibleCardList />
        </HorizontalScroll>
      </main>
    </div>
  );
}

export default App;
