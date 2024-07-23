import React, { useState } from "react";
import * as S from "./style";
import Header from "../../components/Header/Header";

const Home = () => {
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState(dayOfWeek[today]);
  const [movies, setMovies] = useState([
    {
      img: "https://via.placeholder.com/150",
      title: "범죄도시4",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "변호인",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "몰라",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "범죄도시4",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "변호인",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "몰라",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "범죄도시4",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "변호인",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "몰라",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "범죄도시4",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "변호인",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "몰라",
    },
  ]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <S.Layout>
      <Header />
      <S.Content>
        <S.DayOfWeek>
          {dayOfWeek.map((day, index) => (
            <S.Day
              key={index}
              isSelect={selectedDay === day}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </S.Day>
          ))}
        </S.DayOfWeek>
        <S.Movies>
          {movies.map((movie, index) => (
            <S.Movie key={index}>
              <S.MovieImg src={movie.img} alt="영화 이미지" />
              <S.MovieTitle>{movie.title}</S.MovieTitle>
            </S.Movie>
          ))}
        </S.Movies>
      </S.Content>
    </S.Layout>
  );
};

export default Home;
