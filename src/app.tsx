import * as React from "react";
import { initialCards } from "./core/state/reducers";
import Action from "./shared/action/action";
import CardList from "./shared/card-list/card-list";

function App() {
  function handleClick() {
    console.log("click");
  }
  return (
    <div>
      <Action onClick={handleClick}>Landscape</Action>
      <Action onClick={handleClick}>People</Action>
      <Action onClick={handleClick}>Holiday</Action>
      <header></header>
      <main>
        <CardList cards={initialCards} onCardClick={handleClick} />
      </main>
    </div>
  );
}

export default App;
