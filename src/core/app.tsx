import * as React from "react";
import Action from "../shared/action/action";
import VisibleCardList from "../shared/visible-card-list/visible-card-list";

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
        <VisibleCardList />
      </main>
    </div>
  );
}

export default App;
