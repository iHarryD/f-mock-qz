import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz as useQuizContext } from "../contexts/quizContext";

export default function useQuizLogic() {
  const navigate = useNavigate();
  const timeLimitInSeconds = 15;
  const latestQuestionIndex = useRef(0);
  const [timer, setTimer] = useState(timeLimitInSeconds);
  const [hasUserSelected, setHasUserSelected] = useState(false);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [currentIntervalID, setCurrentIntervalID] = useState(null);
  const [allPointerTrackers, setAllPoitnerTrackers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(
    latestQuestionIndex.current
  );
  const { quiz } = useQuizContext();
  const [totalScore, setTotalScore] = useState(0);

  // WHEN USER SELECTS AN OPTION
  const optionClickHandler = (e) => {
    clearInterval(currentIntervalID);
    setHasUserSelected(true);
    if (e.target.value === "true") {
      e.target.classList.add("correct");
      setAllPoitnerTrackers((prev) => [...prev, timer]);
      setTotalScore((prev) => (prev += timer));
    } else {
      setAllPoitnerTrackers((prev) => [...prev, 0]);
      e.target.classList.add("wrong");
    }
    setTimeout(() => {
      updateQuestion();
    }, 1500);
  };

  // ENDS QUIZ WHEN ALL QUESTIONS HAVE BEEN PUT OUT
  function quizEnds() {
    setIsQuizOver(true);
  }

  useEffect(() => {
    if (!isQuizOver) return;
    clearInterval(currentIntervalID);
    console.log(totalScore);
    navigate("../single-player/result", {
      state: {
        finalScore: totalScore,
      },
    });
  }, [isQuizOver]);

  // UPDATES NEXT QUESTION STATE ONLY IF NEXT QUESTION EXISTS
  function updateQuestion() {
    latestQuestionIndex.current = latestQuestionIndex.current + 1;
    if (latestQuestionIndex.current > quiz.questions.length - 1) {
      quizEnds();
    } else {
      setCurrentQuestion(latestQuestionIndex.current);
    }
  }

  // RESETS EVERYTHING EVERYTIME QUESTION CHANGES
  useEffect(() => {
    setHasUserSelected(false);
    setTimer(timeLimitInSeconds);
    clearInterval(currentIntervalID);
    const currentInterval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    setCurrentIntervalID(currentInterval);
  }, [currentQuestion]);

  // IF THE TIMER RUNS OUT
  useEffect(() => {
    if (timer !== 0) return;
    setAllPoitnerTrackers((prev) => [...prev, 0]);
    updateQuestion();
  }, [timer]);

  return {
    allPointerTrackers,
    totalScore,
    timer,
    quiz,
    hasUserSelected,
    optionClickHandler,
    currentQuestion,
  };
}
