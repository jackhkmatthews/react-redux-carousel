import * as React from "react";
import * as S from "./card.styles";

export interface IProps {
  color: string;
  description: string;
  flipped: boolean;
  imgAltText: string;
  imgSrc: string;
  onClick: () => void;
}

export default function Card({
  color,
  description,
  flipped,
  imgAltText,
  imgSrc,
  onClick
}: IProps) {
  return (
    <S.Card onClick={onClick} flipped={flipped}>
      <S.Inner flipped={flipped}>
        <S.Front flipped={flipped}>
          <S.Img src={imgSrc} alt={imgAltText} />
        </S.Front>
        <S.Back bgColor={color}>
          <p>{description}</p>
        </S.Back>
      </S.Inner>
    </S.Card>
  );
}
