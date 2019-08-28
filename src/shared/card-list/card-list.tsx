import * as React from "react";
import { ICard } from "../../core/state/reducers";
import Card from "../card/card";
import { List, ListItem } from "./card-list.styles";

interface IProps {
  cards: ICard[];
}

function CardList({ cards }: IProps) {
  const listItems = cards.map((card: ICard, index) => (
    <ListItem key={index}>
      <Card
        color={card.color}
        description={card.description}
        flipped={card.flipped}
        imgAltText={card.imgAltText}
        imgSrc={card.imgSrc}
        onClick={() => null}
      />
    </ListItem>
  ));
  return <List>{listItems}</List>;
}

export default CardList;
