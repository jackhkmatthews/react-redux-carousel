import * as React from "react";
import { Button } from "./action.styles";

function Action() {
  function handleClick(e: any) {
    console.log("clicked");
  }
  return <Button onClick={handleClick}>Click me</Button>;
}

export default Action;
