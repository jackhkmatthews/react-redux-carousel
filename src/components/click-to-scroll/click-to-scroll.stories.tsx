import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components";
import ClickToScroll from "./click-to-scroll";

const StyledClickToScroll = styled(ClickToScroll)`
  width: 400px;
  border: 1px solid grey;
  border-radius: 10px;
`;

storiesOf("ClickToScroll", module).add("default", () => (
  <StyledClickToScroll>
    <div>
      <h1>Hellooooooooooooooooooooooooooooooooooooooooooooooooooo</h1>
    </div>
  </StyledClickToScroll>
));
