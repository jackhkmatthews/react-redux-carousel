import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCard, setDetail } from "../../state/actions";
import { selectActveCardImgSrc, selectDetail } from "../../state/selectors";
import * as S from "./card.styles";

export interface IProps {
  imgAltText: string;
  imgSrc: string;
}

export default function Card({ imgAltText, imgSrc }: IProps) {
  const activeImgSrc = useSelector(selectActveCardImgSrc);
  const detail = useSelector(selectDetail);
  const dispatch = useDispatch();

  const active = activeImgSrc === imgSrc;
  const hide = activeImgSrc !== imgSrc && detail;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (detail && !active) {
      return;
    }
    if (detail && active) {
      dispatch(setActiveCard(null));
      dispatch(setDetail(false));
      return;
    }
    dispatch(setActiveCard(imgSrc));
    dispatch(setDetail(true));
  };

  return (
    <S.Card hide={hide} large={active} onClick={handleClick}>
      <S.Img src={imgSrc} alt={imgAltText} />
    </S.Card>
  );
}
