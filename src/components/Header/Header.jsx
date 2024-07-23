import { useState } from "react";
import * as S from "./style";

export default function Header() {
  const [login, setLogin] = useState(false);

  return (
    <S.HeaderBar>
      <S.Title>영화볼사람?</S.Title>
      <S.Buttons>
        <S.Button>{login ? "로그아웃" : "로그인"}</S.Button>
        <S.Button>{login ? "내정보" : "회원가입"}</S.Button>
      </S.Buttons>
    </S.HeaderBar>
  );
}
