import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 80px 150px;
`;

export const DayOfWeek = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Day = styled.div`
  padding: 10px 55px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelect ? "#4f9cd4" : "#d9d9d9")};
  color: ${(props) => (props.isSelect ? "white" : "black")};
  font-size: 28px;
`;

export const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
`;

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

export const MovieImg = styled.img`
  width: 180px;
  height: 260px;
`;

export const MovieTitle = styled.div`
  font-size: 28px;
`;
