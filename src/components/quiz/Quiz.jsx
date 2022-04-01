import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./css/quizStyle.css";
import { useQuiz } from "../../contexts/quizContext";
import Question from "../question/Question";
import Timer from "../timer/Timer";
import PointTracker from "../pointTracker/PointTracker";

export default function Quiz() {
  const navigate = useNavigate();
  const renderCount = useRef(0);
  const totalScore = useRef(0);
  const currentQuestionIndex = useRef(0);
  const [timer, setTimer] = useState(15);
  const [hasUserSelected, setHasUserSelected] = useState(false);
  const [currentIntervalID, setCurrentIntervalID] = useState(null);
  const [allPointerTrackers, setAllPoitnerTrackers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(
    currentQuestionIndex.current
  );
  const { quiz } = useQuiz();

  useEffect(() => {
    renderCount.current += 1;
    console.log(renderCount.current);
  });

  // WHEN USER SELECTS AN OPTION
  const optionClickHandler = (e) => {
    clearInterval(currentIntervalID);
    setHasUserSelected(true);
    if (e.target.value === "true") {
      e.target.classList.add("correct");
      setAllPoitnerTrackers((prev) => [...prev, timer]);
      totalScore.current += timer;
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
    clearInterval(currentIntervalID);
    navigate("../single-player/result", {
      state: {
        finalScore: totalScore.current,
      },
    });
  }

  // UPDATES NEXT QUESTION STATE ONLY IF NEXT QUESTION EXISTS
  function updateQuestion() {
    currentQuestionIndex.current = currentQuestionIndex.current + 1;
    if (currentQuestionIndex.current > quiz.questions.length - 1) {
      quizEnds();
    } else {
      setCurrentQuestion(currentQuestionIndex.current);
    }
  }

  // RESETS EVERYTHING EVERYTIME QUESTION CHANGES
  useEffect(() => {
    setHasUserSelected(false);
    setTimer(15);
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

  return (
    <main className="--verticle-flex --has-padding">
      <div className="quiz-header --has-padding">
        <h2 className="sub-heading --h2 quiz-heading">{quiz.name} Quiz</h2>
      </div>
      <section className="quiz-section --horizontal-flex">
        <div className="question-and-footer-container">
          <div className="question-options-container">
            <Question
              currentQuestion={quiz.questions[currentQuestion]}
              optionClickHandler={optionClickHandler}
              hasUserSelected={hasUserSelected}
            />
          </div>
          <div className="quiz-section-footer --horizontal-flex --has-padding">
            <Timer currentTimer={timer} />
            <div className="helper-container"></div>
          </div>
        </div>

        <aside className="quiz-aside --has-padding">
          <p className="current-score-container">
            Current score:{" "}
            <span className="current-score --bold-700">
              {totalScore.current}
            </span>
          </p>
          <ul className="trackers-container --verticle-flex --has-gap">
            {allPointerTrackers.map((tracker, index) => (
              <PointTracker point={tracker} key={index} />
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
