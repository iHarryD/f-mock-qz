import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider(props) {
  const [quiz, setQuiz] = useState({ name: null, code: null, questions: null });
  return (
    <QuizContext.Provider value={{ quiz, setQuiz }}>
      {props.children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
