import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 100%;
  padding: 20px 540px;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;

  img {
    width: 150px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: bold;

    input {
      width: 100%;
      margin-top: 5px;
      padding: 8px;
      border: 1px solid #ced4da;
      border-radius: 4px;
      font-size: 14px;
    }
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  padding: 10px;
`;
