import * as React from "react";
import * as S from "./action.styles";

interface IProps {
  active: boolean;
  children: any;
  handleClick: () => void;
}

export default function Action({ active, children, handleClick }: IProps) {
  return (
    <S.Action onClick={handleClick} disabled={active}>
      {children}
    </S.Action>
  );
}
