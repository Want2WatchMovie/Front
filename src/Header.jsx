import { useState } from 'react'
import * as S from './Style.jsx'

export default function Header() {
    const [Login, setLogin] = useState(false);

    return (
        <S.HeaderBar>
            <S.Title>영화볼사람?</S.Title>
            <S.Login>{Login ? "로그아웃" : "로그인"}</S.Login>
            <S.Myinfo>{Login ? "내정보" : "회원가입"}</S.Myinfo>
        </S.HeaderBar>
    )
}