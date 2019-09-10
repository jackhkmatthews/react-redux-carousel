import * as React from "react";
import * as S from "./card.styles";

export interface IProps {
  imgAltText: string;
  imgSrc: string;
  hide?: boolean;
  large?: boolean;
}

export default function Card({
  imgAltText,
  imgSrc,
  hide = false,
  large = false
}: IProps) {
  return (
    <S.Card hide={hide} large={large}>
      <S.Img src={imgSrc} alt={imgAltText} />
    </S.Card>
  );
}
