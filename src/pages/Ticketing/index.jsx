import React, { useState } from "react";
import * as S from "./style";
import Header from "../../components/Header/Header";

const Ticketing = () => {
  const [inputs, setInputs] = useState("");

  const handleInputs = (e) => {
    setInputs(e.target.value);
  };

  return (
    <S.Layout>
      <Header />
      <S.Content>
        <S.TicketingBox>
          <S.Title>범죄도시</S.Title>
          <S.Input
            name="seatnumber"
            value={inputs.seatnumber}
            placeholder="좌석을 입력하세요."
            onChange={handleInputs}
            type="number"
          />
          <S.Button>예매완료</S.Button>
        </S.TicketingBox>
      </S.Content>
    </S.Layout>
  );
};

export default Ticketing;
