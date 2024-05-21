import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const QuestionsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

export const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
