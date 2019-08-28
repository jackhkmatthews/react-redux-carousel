import { action } from "@storybook/addon-actions";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Card from "./card";

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Card
      onClick={action("card-click")}
      color="pink"
      description="this is the desc"
      flipped={boolean("flipped", false)}
      imgAltText="this is alt"
      imgSrc="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg"
    />
  ));
