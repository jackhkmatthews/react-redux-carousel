import styled from "styled-components";

interface IFlipProps {
  flipped: boolean;
}

interface IColorProps {
  bgColor: string;
}

export const Card = styled.div<IFlipProps>`
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  height: 400px;
  width: 400px;
  perspective: 1000px;
`;

export const Inner = styled.div<IFlipProps>`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  transform: ${props => (props.flipped ? "rotateY(180deg)" : "rotate(0deg)")};
`;

export const Front = styled.div<IFlipProps>`
  display: inline-block;
  line-height: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  left: 0;
  transition: opacity 0.8s;
  opacity: ${props => (props.flipped ? "0" : "1")};
`;

export const Img = styled.img`
  height: 400px;
  width: 400px;
  object-fit: cover;
`;

export const Back = styled.div<IColorProps>`
  display: inline-block;
  background-color: ${props => props.bgColor};
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  left: 0;
`;
