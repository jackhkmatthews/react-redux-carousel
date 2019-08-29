import * as React from "react";
import { Back, Card, Front, Img, Inner } from "./card.styles";

export interface IProps {
  color: string;
  description: string;
  flipped: boolean;
  imgAltText: string;
  imgSrc: string;
  onClick: () => void;
}

export default ({
  color,
  description,
  flipped,
  imgAltText,
  imgSrc,
  onClick
}: IProps) => {
  return (
    <Card onClick={onClick} flipped={flipped}>
      <Inner flipped={flipped}>
        <Front flipped={flipped}>
          <Img src={imgSrc} alt={imgAltText} />
        </Front>
        <Back bgColor={color}>
          <p>{description}</p>
        </Back>
      </Inner>
    </Card>
  );
};
