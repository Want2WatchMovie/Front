import { useState } from "react";
import Header from "../../components/Header/Header";
import Ticket from "./Ticket";
import * as S from "./style";

export default function MyPage() {
    const [name, setName] = useState("이나영");
    const [info, setInfo] = useState([
        {
            title: "범죄도시",
            date: "2024년 7월 31일 수요일",
            time: "18:20 ~ 19:40(80분)",
            seat: "23",
        },
        {
            title: "범죄도시",
            date: "2024년 7월 31일 수요일",
            time: "18:20 ~ 19:40(80분)",
            seat: "23",
        },
        {
            title: "범죄도시",
            date: "2024년 7월 31일 수요일",
            time: "18:20 ~ 19:40(80분)",
            seat: "23",
        }
    ]);

    return (
        <div>
            <Header />
            <S.Profile>
                <S.Title>{name} 님</S.Title>
                <S.Info>예매 정보</S.Info>
                <S.TicketList>
                    {
                        info.map((item, index) => {
                            return <Ticket key={index} info={item} />
                        })
                    }
                </S.TicketList>
            </S.Profile>
        </div>
    )
}