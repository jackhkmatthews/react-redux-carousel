import styled from "styled-components";

interface IProps {
  hide: boolean;
  large: boolean;
}

export const Card = styled.div<IProps>`
  display: inline-block;
  line-height: 0;
  transform: ${props => (props.large ? "scale3d(2, 2, 1)" : "scale(1, 1, 1)")};
  opacity: ${props => (props.hide ? "0" : "1")};
  transition: all 1.5s ease;
`;

export const Img = styled.img`
  max-height: 400px;
  max-width: 400px;
`;
