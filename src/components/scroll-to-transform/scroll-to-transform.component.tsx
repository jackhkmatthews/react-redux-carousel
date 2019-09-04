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
  const [translate, setTranslate] = React.useState(0);

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const wheelRequestRef = React.useRef(0);
  const clickRequestRef = React.useRef(0);
  const lastKnownDeltaYs = React.useRef([0]);
  const wheelTicking = React.useRef(false);
  const clickTicking = React.useRef(false);
  const outerRef = React.useRef(document.createElement("div"));
  const innerRef = React.useRef(document.createElement("div"));
  const outerWidth = React.useRef(0);
  const innerWidth = React.useRef(0);
  const maxTranslate = React.useRef(0);
  const clientX = React.useRef(0);

  React.useEffect(() => {
    outerWidth.current = outerRef.current.clientWidth;
    innerWidth.current = innerRef.current.clientWidth;
    maxTranslate.current = innerWidth.current - outerWidth.current;
    return () => {
      cancelAnimationFrame(clickRequestRef.current);
      cancelAnimationFrame(wheelRequestRef.current);
    };
  }, []); // Make sure the effect runs only once

  const handleWheel = (e: React.WheelEvent) => {
    lastKnownDeltaYs.current.push(e.deltaY);
    requestWheelTick();
  };

  const requestWheelTick = () => {
    if (!wheelTicking.current) {
      wheelRequestRef.current = requestAnimationFrame(wheelUpdate);
    }
    wheelTicking.current = true;
  };

  const wheelUpdate = () => {
    wheelTicking.current = false;
    const avgDeltaY = getAverage(lastKnownDeltaYs.current);
    const translateChange =
      avgDeltaY * 0.05 * 0.01 * innerRef.current.clientWidth;
    lastKnownDeltaYs.current = [0];
    setDeltaNumber(avgDeltaY);
    updateTranslate(translateChange);
    updateScrollDirection(avgDeltaY);
  };

  const getAverage = (array: number[]) => {
    return (
      array.reduce((previous, current) => (current += previous)) /
      lastKnownDeltaYs.current.length
    );
  };

  const updateTranslate = (translateChange: number): void => {
    if (translate + translateChange > maxTranslate.current) {
      setTranslate(maxTranslate.current);
    } else if (translate + translateChange < 0) {
      setTranslate(0);
    } else {
      setTranslate(translate + translateChange);
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

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    clientX.current = e.clientX;
    requestClickTick();
  };

  const requestClickTick = () => {
    if (!clickTicking.current) {
      clickRequestRef.current = requestAnimationFrame(clickUpdate);
    }
    clickTicking.current = true;
  };

  const clickUpdate = () => {
    clickTicking.current = false;
    const offsetX =
      clientX.current - innerRef.current.getBoundingClientRect().left;
    const newTranslate = offsetX - outerWidth.current / 2;
    const translateChange = newTranslate - translate;
    updateTranslate(translateChange);
  };

  return (
    <S.Outer
      onWheel={handleWheel}
      className={className ? className : ""}
      data-scroll={scrollDirection}
      ref={outerRef}
    >
      <S.Meta>
        <S.Scroll>Scrolling: {scrollDirection}</S.Scroll>
        <S.Delta>Delta: {deltaNumber}</S.Delta>
      </S.Meta>
      <S.Inner
        onClick={handleClick}
        ref={innerRef}
        style={{
          transform: `translateX(-${translate}px)`
        }}
      >
        <S.Title>
          <span>Hahahah</span>
          <span>ahahahah1ahahahahah</span>
          <span>ahahah</span>
          <span>ahaha</span>
          <span>hahahahahahahahahahahahahahaahhaahahahahahahahaha</span>
        </S.Title>
      </S.Inner>
    </S.Outer>
  );
}
