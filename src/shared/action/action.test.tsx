import { render } from "@testing-library/react";
import React from "react";
import Action from "./action";

test("renders text", () => {
  const text = "Click me";
  const handleClick = () => console.log("hi");
  const { getByText } = render(<Action onClick={handleClick}>{text}</Action>);
  const buttonText = getByText(text);
  expect(buttonText).toBeTruthy();
});
