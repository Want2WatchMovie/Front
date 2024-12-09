import styled from "styled-components";

export const Title = styled.h1 `
    font-weight: normal;
`

export const Info = styled.h3 `
    font-weight: normal;
`

export const Profile = styled.div`
    background-color: #E9E9E9;
    width: 420px;
    height: 500px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 15px;
    padding: 30px;
`;

export const TicketList = styled.div`
    width: 380px;
    height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #4F9CD4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    padding: 15px 20px 20px 20px;
    margin-top: 20px;
    margin-bottom: 20px;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;
