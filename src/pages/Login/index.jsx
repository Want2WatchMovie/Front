import React, { useState } from "react";
import * as S from "./style";
import Header from "../../components/Header/Header";

const Login = () => {
  const [inputs, setInputs] = useState({ id: "", password: "" });

  const handleInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <S.Layout>
      <Header />
      <S.Content>
        <S.LoginBox>
          <S.Title>로그인</S.Title>
          <S.Input
            name="id"
            value={inputs.id}
            placeholder="아이디를 입력하세요."
            onChange={handleInputs}
          />
          <S.Input
            name="password"
            value={inputs.password}
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={handleInputs}
          />
          <S.Button>로그인</S.Button>
        </S.LoginBox>
      </S.Content>
    </S.Layout>
  );
};

export default Login;
