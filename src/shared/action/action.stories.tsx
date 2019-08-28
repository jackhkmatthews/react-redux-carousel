import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Action from "./action";

storiesOf("Action", module).add("default", () => (
  <Action onClick={action("action-click")}>Click me</Action>
));
