import * as React from "react";

const getNewTranslate = (
  currentTranslate: number,
  translateChange: number,
  maxTranslate: number,
  minimumTranslate = 0
): number => {
  if (currentTranslate + translateChange > maxTranslate) {
    return maxTranslate;
  } else if (currentTranslate + translateChange < minimumTranslate) {
    return minimumTranslate;
  } else {
    return currentTranslate + translateChange;
  }
};

const getAverage = (array: number[]) => {
  return (
    array.reduce((previous, current) => (current += previous)) / array.length
  );
};

export const useRequestTick = (animate: () => void): (() => void) => {
  const afRequestRef = React.useRef(0);
  const ticking = React.useRef(false);
  React.useEffect(() => {
    return () => {
      cancelAnimationFrame(afRequestRef.current);
    };
  }, []);

  const requestTick = () => {
    if (!ticking.current) {
      afRequestRef.current = requestAnimationFrame(update);
    }
    ticking.current = true;
  };

  const update = () => {
    ticking.current = false;
    animate();
  };

  return requestTick;
};

export const useWheelToTransform = (
  innerWidth: React.MutableRefObject<number>,
  translate: number,
  setTranslate: React.Dispatch<React.SetStateAction<number>>,
  maxTranslate: React.MutableRefObject<number>
): ((e: React.WheelEvent) => void) => {
  const lastKnownDeltaYs = React.useRef([0]);

  const animate = () => {
    const avgDeltaY = getAverage(lastKnownDeltaYs.current);
    const translateChange = avgDeltaY * 0.05 * 0.01 * innerWidth.current;
    lastKnownDeltaYs.current = [0];
    setTranslate(
      getNewTranslate(translate, translateChange, maxTranslate.current)
    );
  };

  const requestTick = useRequestTick(animate);

  const handleWheel = (e: React.WheelEvent) => {
    lastKnownDeltaYs.current.push(e.deltaY);
    requestTick();
  };

  return handleWheel;
};

export const useClickToTransform = (
  outerWidth: React.MutableRefObject<number>,
  innerRef: React.MutableRefObject<HTMLElement>,
  translate: number,
  setTranslate: React.Dispatch<React.SetStateAction<number>>,
  maxTranslate: React.MutableRefObject<number>
): ((e: React.MouseEvent) => void) => {
  const clientX = React.useRef(0);

  const animate = () => {
    const offsetX =
      clientX.current - innerRef.current.getBoundingClientRect().left;
    const newTranslate = offsetX - outerWidth.current / 2;
    const translateChange = newTranslate - translate;
    setTranslate(
      getNewTranslate(translate, translateChange, maxTranslate.current)
    );
  };

  const requestTick = useRequestTick(animate);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    clientX.current = e.clientX;
    requestTick();
  };

  return handleClick;
};
