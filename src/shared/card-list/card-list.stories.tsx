import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { initialCards } from "../../core/state/reducers";
import CardList from "./card-list";

storiesOf("CardList", module).add("default", () => (
  <CardList cards={initialCards} onCardClick={action("card-click")} />
));
