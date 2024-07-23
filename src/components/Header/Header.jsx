import { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <S.HeaderBar>
      <S.Title
        onClick={() => {
          navigate("/");
        }}
      >
        영화볼사람?
      </S.Title>
      <S.Buttons>
        <S.Button
          onClick={() => {
            if (!login) navigate("/login");
          }}
        >
          {login ? "로그아웃" : "로그인"}
        </S.Button>
        <S.Button
          onClick={() => {
            if (!login) navigate("/register");
            else navigate("/myprofile");
          }}
        >
          {login ? "내정보" : "회원가입"}
        </S.Button>
      </S.Buttons>
    </S.HeaderBar>
  );
}
