import styled from "styled-components";

interface IProps {
  hide: boolean;
  large: boolean;
}

export const Card = styled.div<IProps>`
  display: inline-block;
  line-height: 0;
  transform: ${props =>
    props.large ? "scale3d(1.5, 1.5, 1)" : "scale3d(1, 1, 1)"};
  opacity: ${props => (props.hide ? "0" : "1")};
  transition: all 1.5s ease;
  transform-origin: center top;
`;

export const Img = styled.img`
  max-height: 400px;
  max-width: 400px;
`;
