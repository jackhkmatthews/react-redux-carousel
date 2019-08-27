import * as React from "react";
import Action from "./shared/action/action";

function App() {
  return (
    <div>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Action />
      </header>
    </div>
  );
}

export default App;
