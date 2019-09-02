import * as React from "react";
import { ICard } from "../../state/types";
import Card from "../card/card";
import * as S from "./card-list.styles";

interface IProps {
  cards: ICard[];
  handleCardClick: (index: number) => void;
}

export default function CardList({ cards, handleCardClick }: IProps) {
  const listItems = cards.map((card: ICard, index) => (
    <S.ListItem key={card.imgSrc}>
      <Card {...card} onClick={() => handleCardClick(index)} />
    </S.ListItem>
  ));
  return <S.CardList>{listItems}</S.CardList>;
}
