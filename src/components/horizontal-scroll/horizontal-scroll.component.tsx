import * as React from "react";
import {
  IHorizontalScrollProps,
  ScrollDirections
} from "./horizontal-scrol.types";
import * as S from "./horizontal-scroll.styles";
import {
  getAverage,
  getNewScrollDirection,
  getNewTranslate
} from "./horizontal-scroll.utils";

export default function HorizontalScroll({
  className,
  children
}: IHorizontalScrollProps) {
  const [scrollDirection, setScrollDirection] = React.useState(
    ScrollDirections.none
  );
  const [deltaNumber, setDeltaNumber] = React.useState(0);
  const [translate, setTranslate] = React.useState(0);

  const outerRef = React.useRef(document.createElement("div"));
  const outerWidth = React.useRef(0);
  const innerRef = React.useRef(document.createElement("div"));
  const innerWidth = React.useRef(0);
  const maxTranslate = React.useRef(0);
  const lastKnownDeltaYs = React.useRef([0]);
  const time = React.useRef(Date.now());
  const clientX = React.useRef(0);

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
    console.log(e.nativeEvent);
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
          transform: `translate3d(-${translate}px, 0, 0)`
        }}
      >
        {children}
      </S.Inner>
    </S.Outer>
  );
}
