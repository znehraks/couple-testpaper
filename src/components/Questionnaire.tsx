/** @jsxImportSource @emotion/react */
import { useState } from 'react';

type QuestionnaireProps = {
  onSubmit: (answers: { [key: string]: string }) => void;
};

const questions = [
  '당신의 이름은 무엇인가요?',
  '취미는 무엇인가요?',
  '가장 좋아하는 영화는 무엇인가요?',
  '최근에 읽은 책은 무엇인가요?',
  '주말에 주로 하는 활동은 무엇인가요?',
];

const Questionnaire = ({ onSubmit }: QuestionnaireProps) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, question: string) => {
    setAnswers({
      ...answers,
      [question]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  return (
    <div>
      <h2>질문에 답해주세요</h2>
      {questions.map((question) => (
        <div key={question}>
          <p>{question}</p>
          <textarea onChange={(e) => handleChange(e, question)} />
        </div>
      ))}
      <button onClick={handleSubmit}>제출</button>
    </div>
  );
};

export default Questionnaire;
