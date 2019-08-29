import { action } from "@storybook/addon-actions";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Action from "./action";

storiesOf("Action", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Action
      handleClick={action("action-click")}
      active={boolean("active", false)}
    >
      Click me
    </Action>
  ));
