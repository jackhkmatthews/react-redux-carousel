import * as React from "react";
// import { CARD_IMAGE_FILTERS } from "../../state/types";
// import FilterAction from "../filter-action/filter-action";
import HorizontalScroll from "../horizontal-scroll/horizontal-scroll.component";

function App() {
  return (
    <div>
      <nav>
        {/* <FilterAction filter={CARD_IMAGE_FILTERS.showAll}>
          Show All
        </FilterAction>
        <FilterAction filter={CARD_IMAGE_FILTERS.showKind}>
          Show Kind
        </FilterAction>
        <FilterAction filter={CARD_IMAGE_FILTERS.showEvil}>
          Show Evil
        </FilterAction> */}
      </nav>
      <main>
        <HorizontalScroll />
      </main>
    </div>
  );
}

export default App;
