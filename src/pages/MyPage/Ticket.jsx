import styled from "styled-components";

export default function Ticket({ info }) {
    return (
        <Container>
            <Content>
                <Title>{info.title}</Title>
                <div>상영날짜: {info.date}</div>
                <div>상영시간: {info.time}</div>
                <div>좌석: {info.seat}번</div>
            </Content>
            <Del>예매 취소</Del>
        </Container>
    );
}

const Container = styled.div`
    width: 350px;
    min-height: 140px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    position: relative;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: bolder;
`;

const Del = styled.button`
    width: 100px;
    min-height: 40px;
    background-color: #B80000;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    margin-top: 10px;
    margin-left: 250px;
`;
