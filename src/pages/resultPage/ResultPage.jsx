import { useNavigate, useLocation } from "react-router-dom";

import "./css/resultPageStyle.css";
import { useUser } from "../../contexts/userContext";
import { useQuiz } from "../../contexts/quizContext";

export default function ResultPage() {
  const { user } = useUser();
  const { quiz } = useQuiz();
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <main className="main --result-page --verticle-flex">
      <div className="result-page-header --has-padding">
        <h2 className="sub-heading --h2">
          <span>{quiz.name}</span> Quiz Ends
        </h2>
      </div>
      <section className="result-section --verticle-flex --centered-flex --has-padding">
        {quiz.mode === "multiplayer" ? (
          <>
            <p className="to-user-message">
              <span className="name-span --bold-700">scoreboard</span>
            </p>
            <div>
              <table>
                <tr>
                  <th>Player</th>
                  {Array.from(Array(10)).map((item, index) => (
                    <th>Question {index}</th>
                  ))}
                </tr>
                <tr>
                  <th>you</th>
                  {location.state.scoreboard.you.map((score) => (
                    <th>{score}</th>
                  ))}
                </tr>
                <tr>
                  <th>opponent</th>
                  {location.state.scoreboard.opponent.map((score) => (
                    <th>{score}</th>
                  ))}
                </tr>
              </table>
            </div>
          </>
        ) : (
          <>
            <p className="to-user-message">
              Kuddos, <span className="name-span --bold-700">{user.name}</span>.
            </p>
            <p className="score-message">
              Your final score is{" "}
              <span className="total-score-span --bold-700">
                {location.state.finalScore}
              </span>
              .
            </p>
          </>
        )}
      </section>
      <div className="result-page-footer --has-padding">
        <p className="footer-message --bold-600">
          If you want me to add you on the scoreboard, send me screenshot of
          this page.
        </p>
        <div className="--horizontal-flex --centered-flex --has-gap">
          <button
            className="btn --primary-btn --has-hover-overlay"
            onClick={() => {
              navigation("/");
            }}
          >
            Go back to home
          </button>
          <button className="btn --primary-btn --has-hover-overlay" disabled>
            Check scoreboard
          </button>
        </div>
      </div>
    </main>
  );
}
