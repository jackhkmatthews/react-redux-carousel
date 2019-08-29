import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { initialCardsState } from "../../state/initial";
import CardList from "./card-list";

storiesOf("CardList", module).add("default", () => (
  <CardList cards={initialCardsState} handleCardClick={action("card-click")} />
));
