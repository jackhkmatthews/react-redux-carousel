import styled from "styled-components";
import { NavBackgroundColor } from "../../state/types";
import HorizontalScroll from "../horizontal-scroll/horizontal-scroll.component";

interface IProps {
  bgColor: NavBackgroundColor;
}

export const App = styled.div``;

export const StyledHorizontalScroll = styled(HorizontalScroll)<IProps>`
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
    top: 100px;
    left: 0;
    box-sizing: border-box;
    background-color: ${props => (props.bgColor ? props.bgColor : "")};
    transition: background-color 1.5s ease;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin: 30px 0;
  justify-content: center;
`;
