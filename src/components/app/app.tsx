import * as React from "react";
import { CARD_IMAGE_FILTERS } from "../../state/types";
import FilterAction from "../filter-action/filter-action";
import ScrollToTransformBig from "../scroll-to-transform-big/scroll-to-transform-big.component";
import ScrollToTransform from "../scroll-to-transform/scroll-to-transform.component";

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
        <ScrollToTransform />
        <ScrollToTransformBig />
      </main>
    </div>
  );
}

export default App;
