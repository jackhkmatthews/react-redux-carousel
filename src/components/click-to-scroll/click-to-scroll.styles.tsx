import styled from "styled-components";

export const ClickToScroll = styled.div`
  display: inline-block;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

export const Inner = styled.div`
  display: inline-block;
`;
