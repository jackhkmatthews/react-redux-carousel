import React from "react";
import * as RR from "react-redux";

export default function Provider({ children, store }: any) {
  return <RR.Provider store={store}>{children}</RR.Provider>;
}
