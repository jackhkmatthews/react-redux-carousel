import * as React from "react";
import { useSelector } from "react-redux";
import { selectDetail, selectNavXTranslate } from "../../state/selectors";
import {
  useClickToTranslate,
  useWheelToTranslate
} from "./horizontal-scroll.hooks";
import * as S from "./horizontal-scroll.styles";
import { IHorizontalScrollProps } from "./horizontal-scroll.types";

export default function HorizontalScroll({
  className,
  children
}: IHorizontalScrollProps) {
  const xTranslate = useSelector(selectNavXTranslate);
  const detail = useSelector(selectDetail);

  const outerRef = React.useRef(document.createElement("div"));
  const innerRef = React.useRef(document.createElement("div"));

  const clickTranslate = useClickToTranslate(outerRef, innerRef);
  const wheelTranslate = useWheelToTranslate(outerRef, innerRef);

  const handleWheel = (e: React.WheelEvent) => {
    if (detail) {
      return;
    }
    wheelTranslate(e);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (detail) {
      return;
    }
    clickTranslate(e);
  };

  return (
    <S.HorizontalScroll
      onWheel={handleWheel}
      className={className ? className : ""}
      ref={outerRef}
    >
      <S.Inner
        onClick={handleClick}
        ref={innerRef}
        style={{
          transform: `translate3d(-${xTranslate}px, 0, 0)`
        }}
      >
        {children}
      </S.Inner>
    </S.HorizontalScroll>
  );
}
