import { render } from "@testing-library/react";
import React from "react";
import Action from "./action";

test("renders text", () => {
  const text = "Click me";
  const { getByText } = render(<Action>{text}</Action>);
  const buttonText = getByText(text);
  expect(buttonText).toBeTruthy();
});
