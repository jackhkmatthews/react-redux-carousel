import * as React from "react";

function Action() {
  function handleClick(e: any) {
    console.log("clicked");
  }
  return <button onClick={handleClick}>Click me</button>;
}

export default Action;
