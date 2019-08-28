import * as React from "react";
import { Button } from "./action.styles";

function Action(props: any) {
  function handleClick(e: any) {
    console.log("clicked");
  }
  return <Button onClick={handleClick}>{props.children}</Button>;
}

export default Action;
