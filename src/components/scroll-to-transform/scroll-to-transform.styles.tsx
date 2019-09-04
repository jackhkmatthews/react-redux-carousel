import styled from "styled-components";
import { ScrollDirections } from "./scroll-to-transform.types";

export const Outer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Meta = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Inner = styled.div`
  display: inline-block;
  transition: transform 0.5s ease-out;
`;

export const Scroll = styled.h3`
  margin-top: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  top: 0;
  left: 0;
  ${Outer}[data-scroll="${ScrollDirections.up}"] & {
    color: firebrick;
  }
  ${Outer}[data-scroll="${ScrollDirections.down}"] & {
    color: cornflowerblue;
  }
  transition: all 2s ease;
`;

export const Delta = styled.h3`
  margin-top: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  top: 0;
  left: 0;
  ${Outer}[data-scroll="${ScrollDirections.up}"] & {
    color: firebrick;
  }
  ${Outer}[data-scroll="${ScrollDirections.down}"] & {
    color: cornflowerblue;
  }
  transition: all 2s ease;
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 120px;
  white-space: nowrap;
  ${Outer}[data-scroll="${ScrollDirections.up}"] & {
    color: firebrick;
  }
  ${Outer}[data-scroll="${ScrollDirections.down}"] & {
    color: cornflowerblue;
  }
  transition: all 2s ease;
`;
