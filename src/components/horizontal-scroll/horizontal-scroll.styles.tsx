import styled from "styled-components";

export const HorizontalScroll = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: inline-block;
  transition: transform 0.3s ease-out;
`;
