import "./css/quizStyle.css";
import useQuizLogic from "../../hooks/useQuizLogic";
import Question from "../../components/question/Question";
import Timer from "../../components/timer/Timer";
import PointTracker from "../../components/pointTracker/PointTracker";

export default function QuizPage() {
  const {
    allPointerTrackers,
    totalScore,
    timer,
    quiz,
    hasUserSelected,
    optionClickHandler,
    currentQuestion,
    quizEnds,
  } = useQuizLogic();

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
          <div className="score-quit-btn-container --verticle-flex --has-gap">
            <button
              className="btn quit-quiz-btn --primary-btn --small-text"
              onClick={() => quizEnds()}
            >
              Quit Quiz
            </button>
            <p className="current-score-container">
              Current score:{" "}
              <span className="current-score --bold-700">{totalScore}</span>
            </p>
          </div>
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
