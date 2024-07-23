import React, { useState } from "react";
import * as S from "./style";
import Header from "../../components/Header/Header";

const Register = () => {
  const [inputs, setInputs] = useState({ username: "", id: "", password: "" });

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
          <S.Title>회원가입</S.Title>
          <S.Input
            name="username"
            value={inputs.username}
            placeholder="이름을 입력하세요."
            onChange={handleInputs}
          />
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
          <S.Button>회원가입</S.Button>
        </S.LoginBox>
      </S.Content>
    </S.Layout>
  );
};

export default Register;
