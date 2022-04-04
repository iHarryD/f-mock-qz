import "./css/quizStyle.css";
import useQuizLogic from "../../hooks/useQuizLogic";
import Question from "../question/Question";
import Timer from "../timer/Timer";
import PointTracker from "../pointTracker/PointTracker";

export default function Quiz() {
  const {
    allPointerTrackers,
    totalScore,
    timer,
    quiz,
    hasUserSelected,
    optionClickHandler,
    currentQuestion,
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
          <p className="current-score-container">
            Current score:{" "}
            <span className="current-score --bold-700">{totalScore}</span>
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
