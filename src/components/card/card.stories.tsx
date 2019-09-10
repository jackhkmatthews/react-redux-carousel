import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Card from "./card";

const label = "image sources";
const options = {
  Landscape:
    "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/guatemala_3.jpg",
  Portrait:
    "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/wales_2.jpg"
};
const defaultValue =
  "https://res.cloudinary.com/thisissoon/image/upload/v1568106359/test/film/guatemala_3.jpg";

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <>
      <Card
        imgAltText="this is alt"
        imgSrc={select(label, options, defaultValue)}
        hide={boolean("hide", false)}
        large={boolean("large", false)}
      />
    </>
  ));
