import * as React from "react";
import { ICard } from "../../state/types";
import Card from "../card/card";
import { CardListInner, ListItem } from "./card-list.styles";

interface IProps {
  cards: ICard[];
  handleCardClick: (index: number) => void;
}

export default function CardList({ cards, handleCardClick }: IProps) {
  const listItems = cards.map((card: ICard, index) => (
    <ListItem key={card.imgSrc}>
      <Card {...card} onClick={() => handleCardClick(index)} />
    </ListItem>
  ));
  return <CardListInner>{listItems}</CardListInner>;
}
