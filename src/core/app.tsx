import * as React from "react";
import FilterAction from "../shared/filter-action/filter-action";
import VisibleCardList from "../shared/visible-card-list/visible-card-list";
import { CARD_IMAGE_FILTERS } from "./state/types";

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
        <FilterAction filter={CARD_IMAGE_FILTERS.showDay}>
          Show Day
        </FilterAction>
        <FilterAction filter={CARD_IMAGE_FILTERS.showNight}>
          Show Night
        </FilterAction>
      </nav>
      <main>
        <VisibleCardList />
      </main>
    </div>
  );
}

export default App;
