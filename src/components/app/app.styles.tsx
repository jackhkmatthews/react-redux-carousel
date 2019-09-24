import styled from "styled-components";
import HorizontalScroll from "../horizontal-scroll/horizontal-scroll.component";

export const App = styled.div``;

export const StyledHorizontalScroll = styled(HorizontalScroll)`
  width: 80vw;
  margin: 0 auto;
  max-width: 1500px;
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    height: 420px;
    width: 100%;
    position: absolute;
    border: 1px solid black;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin: 30px 0;
  justify-content: center;
`;
