import * as React from "react";
import { getNewTranslate } from "./scroll-to-transform-css.hooks";
import * as S from "./scroll-to-transform-css.styles";
import { IScrollToTransformProps } from "./scroll-to-transform-css.types";

export default function ScrollToTransformBig({
  className
}: IScrollToTransformProps) {
  const [translate, setTranslate] = React.useState(0);

  const outerRef = React.useRef(document.createElement("div"));
  const outerWidth = React.useRef(0);
  const innerRef = React.useRef(document.createElement("div"));
  const innerWidth = React.useRef(0);
  const maxTranslate = React.useRef(0);
  const lastKnownDeltaYs = React.useRef([0]);
  const time = React.useRef(Date.now());
  const wasIncreasing = React.useRef(false);

  React.useEffect(() => {
    outerWidth.current = outerRef.current.clientWidth;
    innerWidth.current = innerRef.current.clientWidth;
    maxTranslate.current = innerWidth.current - outerWidth.current;
  }, []); // Make sure the effect runs only once

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    lastKnownDeltaYs.current.push(e.deltaY);
    const deltaYs = lastKnownDeltaYs.current;
    const length = deltaYs.length;
    const isIncreasing =
      Math.abs(deltaYs[length - 2]) < Math.abs(deltaYs[length - 1]);
    if (wasIncreasing.current && !isIncreasing) {
      if (time.current + 500 - Date.now() < 0) {
        wheelUpdate();
        time.current = Date.now();
      }
    }
    wasIncreasing.current = isIncreasing;
  };

  const wheelUpdate = () => {
    const translateChange =
      lastKnownDeltaYs.current[lastKnownDeltaYs.current.length - 1] *
      0.1 *
      0.01 *
      innerWidth.current;
    setTranslate(
      getNewTranslate(translate, translateChange, maxTranslate.current)
    );
    lastKnownDeltaYs.current = [0];
  };

  return (
    <S.Outer
      onWheel={handleWheel}
      className={className ? className : ""}
      ref={outerRef}
    >
      <S.Inner
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
