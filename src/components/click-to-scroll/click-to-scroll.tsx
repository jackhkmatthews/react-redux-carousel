import * as React from "react";
import * as S from "./click-to-scroll.styles";

export interface IProps {
  children: any;
  className?: string;
}

export default function ClickToScroll({ children, className }: IProps) {
  const outerEl = React.useRef(document.createElement("div"));

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const scrollDist = e.nativeEvent.offsetX - outerEl.current.clientWidth / 2;
    outerEl.current.scrollTo({ left: scrollDist, behavior: "smooth" });
  }

  return (
    <S.ClickToScroll ref={outerEl} className={className}>
      <S.Inner onClick={handleClick}>{children}</S.Inner>
    </S.ClickToScroll>
  );
}
