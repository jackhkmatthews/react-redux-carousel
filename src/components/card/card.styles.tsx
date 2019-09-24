import styled, { css } from "styled-components";

interface IProps {
  hide: boolean;
  large: boolean;
}

export const Card = styled.div<IProps>`
  display: inline-block;
  line-height: 0;
  transform: ${props =>
    props.large ? "scale3d(1.5, 1.5, 1)" : "scale3d(1, 1, 1)"};
  z-index: ${props => (props.large ? 1 : 0)};
  opacity: ${props => (props.hide ? "0" : "1")};
  transform-origin: center;
  ${props =>
    props.large
      ? css`
          z-index: 1;
          transition: transform 1.5s ease, opacity 0.5s ease, z-index 0s;
        `
      : css`
          z-index: 0;
          transition: transform 1.5s ease, opacity 0.5s ease,
            z-index 0s linear 1.5s;
        `}
`;

export const Img = styled.img`
  max-height: 400px;
  max-width: 400px;
`;
