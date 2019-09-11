import { configure, addDecorator } from "@storybook/react";
import { withProvider } from "./decorators";

const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(withProvider);
