import * as React from "react";
import { IHorizontalScrollProps } from "./horizontal-scrol.types";
import * as S from "./horizontal-scroll.styles";
import { getAverage, getNewTranslate } from "./horizontal-scroll.utils";

export default function HorizontalScroll({
  className,
  children
}: IHorizontalScrollProps) {
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
      avgDeltaY * 0.1 * 0.01 * innerRef.current.clientWidth;
    lastKnownDeltaYs.current = [0];
    setTranslate(
      getNewTranslate(translate, translateChange, maxTranslate.current)
    );
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
      ref={outerRef}
    >
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
