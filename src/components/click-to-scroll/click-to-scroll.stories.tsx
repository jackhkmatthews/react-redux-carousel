import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components";
import { initialCardsState } from "../../state/initial";
import CardList from "../card-list/card-list";
import ClickToScroll from "./click-to-scroll";

const S = {
  ClickToScroll: styled(ClickToScroll)`
    width: 100%;
    border: 1px solid grey;
    border-radius: 10px;
  `
};

storiesOf("ClickToScroll", module)
  .add("default", () => (
    <S.ClickToScroll>
      <div>
        <h1>
          Hell123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
        </h1>
      </div>
    </S.ClickToScroll>
  ))
  .add("card list", () => (
    <S.ClickToScroll>
      <CardList cards={initialCardsState} handleCardClick={() => null} />
    </S.ClickToScroll>
  ));
