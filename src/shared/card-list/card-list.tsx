import * as React from "react";
import { ICard } from "../../core/state/reducers";
import Card from "../card/card";
import { CardList, ListItem } from "./card-list.styles";

interface IProps {
  cards: ICard[];
  onCardClick: (index: number) => void;
}

export default ({ cards, onCardClick }: IProps) => {
  const listItems = cards.map((card: ICard, index) => (
    <ListItem key={index}>
      <Card {...card} onClick={() => onCardClick(index)} />
    </ListItem>
  ));
  return <CardList>{listItems}</CardList>;
};
