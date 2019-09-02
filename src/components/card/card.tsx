import * as React from "react";
import * as S from "./card.styles";

export interface IProps {
  color: string;
  description: string;
  flipped: boolean;
  imgAltText: string;
  imgSrc: string;
  handleClick: () => void;
}

export default function Card({
  color,
  description,
  flipped,
  imgAltText,
  imgSrc,
  handleClick
}: IProps) {
  return (
    <S.Card onClick={handleClick} flipped={flipped}>
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
