import { ActiveCardImgSrc, Detail, IAppState, NavXTranslate } from "./types";

export const selectActveCardImgSrc = (state: IAppState): ActiveCardImgSrc =>
  state.activeCardImgSrc;

export const selectDetail = (state: IAppState): Detail => state.detail;

export const selectNavXTranslate = (state: IAppState): NavXTranslate =>
  state.navXTranslate;
