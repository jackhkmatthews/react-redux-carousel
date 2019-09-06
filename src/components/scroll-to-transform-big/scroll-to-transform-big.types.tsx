export enum ScrollDirections {
  up = "UP",
  down = "DOWN",
  none = "NONE"
}

export type ScrollDirection =
  | ScrollDirections.up
  | ScrollDirections.down
  | ScrollDirections.none;

export interface IScrollToTransformProps {
  className?: string;
}
