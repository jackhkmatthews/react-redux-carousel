import * as React from "react";
import * as S from "./scroll-to-transform.styles";
import {
  IScrollToTransformProps,
  ScrollDirections
} from "./scroll-to-transform.types";

export default function ScrollToTransform({
  className
}: IScrollToTransformProps) {
  const [scrollDirection, setScrollDirection] = React.useState(
    ScrollDirections.none
  );
  const [deltaNumber, setDeltaNumber] = React.useState(0);
  const [percentageTranslate, setPercentageTranslate] = React.useState(0);

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef(0);
  const lastKnownDeltaYs = React.useRef([0]);
  const ticking = React.useRef(false);

  React.useEffect(() => {
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once

  const handleWheel = (e: React.WheelEvent) => {
    lastKnownDeltaYs.current.push(e.deltaY);
    requestTick();
  };

  const requestTick = () => {
    if (!ticking.current) {
      requestRef.current = requestAnimationFrame(update);
    }
    ticking.current = true;
  };

  const update = () => {
    ticking.current = false;
    const avgDeltaY = getAverage(lastKnownDeltaYs.current);
    const translationChange = avgDeltaY * 0.05;
    lastKnownDeltaYs.current = [0];
    setDeltaNumber(avgDeltaY);
    updatePercentageTranslate(translationChange);
    updateScrollDirection(avgDeltaY);
  };

  const getAverage = (array: number[]) => {
    return (
      array.reduce((previous, current) => (current += previous)) /
      lastKnownDeltaYs.current.length
    );
  };

  const updatePercentageTranslate = (translationChange: number): void => {
    if (percentageTranslate + translationChange > 100) {
      setPercentageTranslate(100);
    } else if (percentageTranslate + translationChange < 0) {
      setPercentageTranslate(0);
    } else {
      setPercentageTranslate(percentageTranslate + translationChange);
    }
  };

  const updateScrollDirection = (avgDeltaY: number): void => {
    if (
      (avgDeltaY > -1 && scrollDirection === ScrollDirections.down) ||
      (avgDeltaY < 1 && scrollDirection === ScrollDirections.up)
    ) {
      return;
    } else if (avgDeltaY > 0) {
      setScrollDirection(ScrollDirections.down);
    } else {
      setScrollDirection(ScrollDirections.up);
    }
  };

  return (
    <S.Outer
      onWheel={handleWheel}
      className={className ? className : ""}
      data-scroll={scrollDirection}
    >
      <S.Inner>
        <S.Scroll>Scrolling: {scrollDirection}</S.Scroll>
        <S.Delta>Delta: {deltaNumber}</S.Delta>
        <S.Title
          style={{
            transform: `translateX(calc(-${percentageTranslate}% + ${percentageTranslate}vw))`
          }}
        >
          Hahahahahahahahahahahahahahahahahaha
        </S.Title>
      </S.Inner>
    </S.Outer>
  );
}
