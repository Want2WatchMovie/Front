import * as _ from "./style";
import Header from "../../components/Header/Header";

const Admin = () => {
  return (
    <>
      <Header />
      <_.Layout>
        <_.Container>
          <_.ImageContainer>
            <img src="https://via.placeholder.com/150" alt="영화 포스터" />
            <_.Button>사진 넣기</_.Button>
          </_.ImageContainer>
          <_.Form>
            <label>
              영화 제목
              <input type="text" placeholder="영화 제목을 입력하세요." />
            </label>
            <label>
              감독 이름
              <input type="text" placeholder="감독 이름을 입력하세요." />
            </label>
            <label>
              출연
              <input type="text" placeholder="출연 배우를 입력하세요." />
            </label>
            <label>
              개봉일
              <input type="date" placeholder="개봉일을 입력하세요." />
            </label>
            <label>
              상영 시작 시간
              <input type="time" placeholder="상영 시작 시간을 입력하세요." />
            </label>
            <label>
              영화 길이
              <input type="number" placeholder="영화 길이를 입력하세요." />
            </label>
            <label>
              좌석 수
              <input type="number" placeholder="좌석 수를 입력하세요." />
            </label>
            <_.SubmitButton>영화 만들기</_.SubmitButton>
          </_.Form>
        </_.Container>
      </_.Layout>
    </>
  );
};

export default Admin;
