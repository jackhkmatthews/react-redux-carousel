import { ScrollDirections } from "../scroll-to-transform/scroll-to-transform.types";
import { ScrollDirection } from "./horizontal-scroll.types";

export const getNewTranslate = (
  currentTranslate: number,
  translateChange: number,
  minTranslate: number,
  maxTranslate = 0
): number => {
  if (currentTranslate + translateChange > maxTranslate) {
    return maxTranslate;
  } else if (currentTranslate + translateChange < minTranslate) {
    return minTranslate;
  } else {
    return currentTranslate + translateChange;
  }
};

export const getNewScrollDirection = (
  avgDeltaY: number,
  scrollDirection: ScrollDirection
): ScrollDirection => {
  if (
    (avgDeltaY > -1 && scrollDirection === ScrollDirections.down) ||
    (avgDeltaY < 1 && scrollDirection === ScrollDirections.up)
  ) {
    return scrollDirection;
  } else if (avgDeltaY > 0) {
    return ScrollDirections.down;
  } else {
    return ScrollDirections.up;
  }
};

export const getAverage = (array: number[]) => {
  return (
    array.reduce((previous, current) => (current += previous)) / array.length
  );
};
