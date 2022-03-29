import { useState, useEffect } from "react";
import axios from "axios";

import "./css/singlePlayerHomepageStyle.css";
import QuizCard from "../quizCard/QuizCard";
import RulesModal from "../rulesModal/RulesModal";
import { ErrorToast } from "../toasts/Toasts";
import Loader from "../loader/Loader";
import { useQuiz } from "../../contexts/quizContext";

export default function SinglePlayerHomepage() {
  const [hasUserSelected, setHasUserSelected] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [caughtError, setCaughtError] = useState(null);
  const [allQuizes, setAllQuizes] = useState([]);
  const { quiz, setQuiz } = useQuiz();

  async function getAllQuizes() {
    setCaughtError(null);
    setIsLoaded(false);
    try {
      const res = await axios.get("http://localhost:3001/api/get-quizes");
      setAllQuizes(res.data.quizes);
      setIsLoaded(true);
    } catch (err) {
      setIsLoaded(true);
      setCaughtError(500 || err.response.status);
    }
  }

  useEffect(() => getAllQuizes(), []);

  const quizClickHandler = (e) => {
    setQuiz((prev) => ({ ...prev, name: e.target.dataset.quizname }));
    setQuiz((prev) => ({ ...prev, code: e.target.value }));
    setHasUserSelected(true);
  };

  return (
    <>
      {hasUserSelected && <RulesModal modalState={setHasUserSelected} />}
      {!isLoaded && <Loader />}
      <main className="single-player-homepage">
        <h3 className="sub-heading --h2">Select the quiz</h3>
        <section className="section quiz-selection-section --has-gap --has-padding">
          {Array.isArray(allQuizes) &&
            allQuizes.length > 0 &&
            allQuizes.map((quiz, index) => (
              <QuizCard
                quizDetails={quiz}
                clickHandler={quizClickHandler}
                key={index}
              />
            ))}
        </section>
        <p className="text-at-bottom --bold-600">
          This is it for now. More quizes will be added soon. Keep coming back.
        </p>
        {caughtError && (
          <ErrorToast>
            <div>
              <div className="--horizontal-flex --has-gap">
                <span>{`Error ${caughtError}`}</span>
                <button
                  className="btn --text-only-btn"
                  onClick={() => getAllQuizes()}
                >
                  Retry
                </button>
              </div>
            </div>
          </ErrorToast>
        )}
      </main>
    </>
  );
}
