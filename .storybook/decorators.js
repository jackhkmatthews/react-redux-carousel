import * as React from "react";
import Provider from "../src/components/provider/provider.component";
import { store } from "../src/state/store";

export const withProvider = story => (
  <Provider store={store}>{story()}</Provider>
);
