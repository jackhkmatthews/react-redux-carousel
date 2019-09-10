import { storiesOf } from "@storybook/react";
import * as React from "react";
import { initialCardsState } from "../../state/initial";
import CardList from "./card-list";

storiesOf("CardList", module).add("default", () => (
  <CardList cards={initialCardsState} />
));
