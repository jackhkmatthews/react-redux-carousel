import * as React from "react";
import {
  getAverage,
  getNewScrollDirection,
  getNewTranslate
} from "./scroll-to-transform-big.hooks";
import * as S from "./scroll-to-transform-big.styles";
import {
  IScrollToTransformProps,
  ScrollDirections
} from "./scroll-to-transform-big.types";

export default function ScrollToTransformBig({
  className
}: IScrollToTransformProps) {
  const [scrollDirection, setScrollDirection] = React.useState(
    ScrollDirections.none
  );
  const [deltaNumber, setDeltaNumber] = React.useState(0);
  const [translate, setTranslate] = React.useState(0);

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const lastKnownDeltaYs = React.useRef([0]);
  const outerRef = React.useRef(document.createElement("div"));
  const innerRef = React.useRef(document.createElement("div"));
  const outerWidth = React.useRef(0);
  const innerWidth = React.useRef(0);
  const maxTranslate = React.useRef(0);
  const clientX = React.useRef(0);
  const time = React.useRef(Date.now());

  React.useEffect(() => {
    outerWidth.current = outerRef.current.clientWidth;
    innerWidth.current = innerRef.current.clientWidth;
    maxTranslate.current = innerWidth.current - outerWidth.current;
  }, []); // Make sure the effect runs only once

  const handleWheel = (e: React.WheelEvent) => {
    lastKnownDeltaYs.current.push(e.deltaY);
    if (time.current + 100 - Date.now() < 0) {
      time.current = Date.now();
      wheelUpdate();
    }
  };

  const wheelUpdate = () => {
    const avgDeltaY = getAverage(lastKnownDeltaYs.current);
    const translateChange =
      avgDeltaY * 0.05 * 0.01 * innerRef.current.clientWidth;
    lastKnownDeltaYs.current = [0];
    setDeltaNumber(avgDeltaY);
    setTranslate(
      getNewTranslate(translate, translateChange, maxTranslate.current)
    );
    setScrollDirection(getNewScrollDirection(avgDeltaY, scrollDirection));
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    clientX.current = e.clientX;
    clickUpdate();
  };

  const clickUpdate = () => {
    const offsetX =
      clientX.current - innerRef.current.getBoundingClientRect().left;
    const newTranslate = offsetX - outerWidth.current / 2;
    const translateChange = newTranslate - translate;
    setTranslate(
      getNewTranslate(translate, translateChange, maxTranslate.current)
    );
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a lacinia
          nibh. Sed semper eleifend leo a dictum. Phasellus blandit quam a
          tortor lobortis, tempor volutpat mi vestibulum. Pellentesque congue
          dignissim blandit
        </S.Title>
      </S.Inner>
    </S.Outer>
  );
}
