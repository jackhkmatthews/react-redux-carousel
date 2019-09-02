import { render } from "@testing-library/react";
import React from "react";
import Action from "./action";

test("renders text", () => {
  const text = "Click me";
  const handleClick = (): null => null;
  const { getByText } = render(
    <Action handleClick={handleClick} active={false}>
      {text}
    </Action>
  );
  const buttonText = getByText(text);
  expect(buttonText).toBeTruthy();
});
