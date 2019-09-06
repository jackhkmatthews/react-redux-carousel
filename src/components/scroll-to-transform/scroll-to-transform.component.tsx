import * as React from "react";
import {
  useClickToTransform,
  useWheelToTransform
} from "./scroll-to-transform.hooks";
import * as S from "./scroll-to-transform.styles";
import {
  IScrollToTransformProps,
  ScrollDirections
} from "./scroll-to-transform.types";

export default function ScrollToTransform({
  className
}: IScrollToTransformProps) {
  const [scrollDirection] = React.useState(ScrollDirections.none);
  const [deltaNumber] = React.useState(0);
  const [translate, setTranslate] = React.useState(0);

  const outerRef = React.useRef(document.createElement("div"));
  const outerWidth = React.useRef(0);
  const innerRef = React.useRef(document.createElement("div"));
  const innerWidth = React.useRef(0);
  const maxTranslate = React.useRef(0);

  React.useEffect(() => {
    outerWidth.current = outerRef.current.clientWidth;
    innerWidth.current = innerRef.current.clientWidth;
    maxTranslate.current = innerWidth.current - outerWidth.current;
  }, []); // Make sure the effect runs only once

  const handleWheel = useWheelToTransform(
    innerWidth,
    translate,
    setTranslate,
    maxTranslate
  );

  const handleClick = useClickToTransform(
    outerWidth,
    innerRef,
    translate,
    setTranslate,
    maxTranslate
  );

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
