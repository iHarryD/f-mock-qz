import "./css/quizStyle.css";
import useQuizLogic from "../../hooks/useQuizLogic";
import Question from "../../components/question/Question";
import Timer from "../../components/timer/Timer";
import PointTracker, {
  MultiplayerPointTracker,
  SinglePlayerPointTracker,
} from "../../components/pointTracker/PointTracker";
import {
  MultiplayerScoreBoard,
  SinglePlayerScoreBoard,
} from "../../components/scoreBoards/ScoreBoards";

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
    opponentPointTrackers,
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
            {quiz.mode === "multiplayer" ? (
              <MultiplayerScoreBoard
                selfScore={allPointerTrackers.reduce(
                  (acc, currentScore) => acc + currentScore,
                  0
                )}
                opponentScore={opponentPointTrackers.reduce(
                  (acc, currentScore) => acc + currentScore,
                  0
                )}
              />
            ) : (
              <SinglePlayerScoreBoard score={totalScore} />
            )}
          </div>
          <ul className="trackers-container --verticle-flex --has-gap">
            {quiz.mode === "multiplayer"
              ? quiz.questions.map((question, index) => (
                  <MultiplayerPointTracker
                    key={index * 2}
                    questionNumber={index + 1}
                    selfPosition={allPointerTrackers.length + 1}
                    opponentPosition={opponentPointTrackers.length + 1}
                  />
                ))
              : allPointerTrackers.map((tracker, index) => (
                  <SinglePlayerPointTracker point={tracker} key={index} />
                ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
