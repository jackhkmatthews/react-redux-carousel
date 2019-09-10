import * as React from "react";
import { ICard } from "../../state/types";
import Card from "../card/card";
import * as S from "./card-list.styles";

interface IProps {
  cards: ICard[];
  className?: string;
}

export default function CardList({ cards, className }: IProps) {
  const listItems = cards.map((card: ICard) => (
    <S.ListItem key={card.imgSrc}>
      <Card {...card} />
    </S.ListItem>
  ));
  return <S.CardList className={className}>{listItems}</S.CardList>;
}
