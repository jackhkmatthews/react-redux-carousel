import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavXTranslate } from "../../state/actions";
import { selectNavXTranslate } from "../../state/selectors";
import { getAverage, getNewTranslate } from "./horizontal-scroll.utils";

export const useWheelToTranslate = (
  outerRef: React.MutableRefObject<HTMLElement>,
  innerRef: React.MutableRefObject<HTMLElement>
): ((e: React.WheelEvent) => void) => {
  const xTranslate = useSelector(selectNavXTranslate);

  const dispatch = useDispatch();

  const lastKnownDeltaYs = React.useRef([0]);
  const time = React.useRef(Date.now());

  const updateTranslate = () => {
    const avgDeltaY = getAverage(lastKnownDeltaYs.current);
    const translateChange =
      avgDeltaY * 0.1 * 0.01 * innerRef.current.clientWidth;
    lastKnownDeltaYs.current = [0];
    const maxTranslate =
      innerRef.current.clientWidth - outerRef.current.clientWidth;
    const newTranslate = getNewTranslate(
      xTranslate,
      translateChange,
      maxTranslate
    );
    dispatch(setNavXTranslate(newTranslate));
  };

  const handleWheel = (e: React.WheelEvent) => {
    lastKnownDeltaYs.current.push(e.deltaY);
    if (time.current + 100 - Date.now() < 0) {
      time.current = Date.now();
      updateTranslate();
    }
  };

  return handleWheel;
};

export const useClickToTranslate = (
  outerRef: React.MutableRefObject<HTMLElement>,
  innerRef: React.MutableRefObject<HTMLElement>
): ((e: React.MouseEvent) => void) => {
  const dispatch = useDispatch();

  const clientX = React.useRef(0);

  const updateTranslate = () => {
    const offsetX =
      clientX.current - innerRef.current.getBoundingClientRect().left;
    const newTranslate = offsetX - outerRef.current.clientWidth / 2;
    dispatch(setNavXTranslate(newTranslate));
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    clientX.current = e.clientX;
    updateTranslate();
  };

  return handleClick;
};
