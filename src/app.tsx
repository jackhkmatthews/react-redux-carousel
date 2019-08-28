import * as React from "react";
import { initialCards } from "./core/state/reducers";
import Action from "./shared/action/action";
import CardList from "./shared/card-list/card-list";

function App() {
  return (
    <div>
      <Action>Landscape</Action>
      <Action>People</Action>
      <Action>Holiday</Action>
      <header></header>
      <main>
        <CardList cards={initialCards} />
      </main>
    </div>
  );
}

export default App;
