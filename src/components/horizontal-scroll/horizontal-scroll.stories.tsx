import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components";
import HorizontalScroll from "./horizontal-scroll.component";

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 120px;
  white-space: nowrap;
  transition: all 2s ease;
`;

storiesOf("HorizontalScroll", module).add("default", () => (
  <HorizontalScroll>
    <div>
      <Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a lacinia
        nibh. Sed semper eleifend leo a dictum. Phasellus blandit quam a tortor
        lobortis, tempor volutpat mi vestibulum. Pellentesque congue dignissim
        blandit
      </Title>
    </div>
  </HorizontalScroll>
));
