import * as React from "react";
import * as S from "./click-to-scroll.styles";

export interface IProps {
  children: any;
  className?: string;
}

export default function ClickToScroll({ children, className }: IProps) {
  const clickToScrollEl = React.useRef(document.createElement("div"));
  const innerEl = React.useRef(document.createElement("div"));

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const offsetX = e.clientX - innerEl.current.getBoundingClientRect().left;
    const scrollDist = offsetX - clickToScrollEl.current.clientWidth / 2;
    clickToScrollEl.current.scrollTo({ left: scrollDist, behavior: "smooth" });
  }

  return (
    <S.ClickToScroll ref={clickToScrollEl} className={className}>
      <S.Inner ref={innerEl} onClick={handleClick}>
        {children}
      </S.Inner>
    </S.ClickToScroll>
  );
}
