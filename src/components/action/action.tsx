import * as React from "react";
import { InnerAction } from "./action.styles";

interface IProps {
  active: boolean;
  children: any;
  handleClick: () => void;
}

export default function Action({ active, children, handleClick }: IProps) {
  return (
    <InnerAction onClick={handleClick} disabled={active}>
      {children}
    </InnerAction>
  );
}
