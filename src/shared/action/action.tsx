import * as React from "react";
import { Action } from "./action.styles";

interface IProps {
  children: any;
  onClick: () => void;
}

export default ({ children, onClick }: IProps) => {
  return <Action onClick={() => onClick()}>{children}</Action>;
};
