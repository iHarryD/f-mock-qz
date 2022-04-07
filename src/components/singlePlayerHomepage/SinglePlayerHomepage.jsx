import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./css/singlePlayerHomepageStyle.css";
import QuizCard from "../quizCard/QuizCard";
import RulesModal from "../rulesModal/RulesModal";
import { ErrorToast } from "../toasts/Toasts";
import { FullPageLoader } from "../loaders/Loaders";
import { useQuiz } from "../../contexts/quizContext";

export default function SinglePlayerHomepage() {
  const [hasUserSelected, setHasUserSelected] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [caughtError, setCaughtError] = useState(null);
  const [allQuizes, setAllQuizes] = useState({
    unfilteredQuizes: [],
    filteredQuizes: [],
  });
  const searchInputRef = useRef();
  const { setQuiz } = useQuiz();

  async function getAllQuizes() {
    setCaughtError(null);
    setIsLoaded(false);
    try {
      const res = await axios.get(
        "https://b-mock-qz.vercel.app/api/get-quizes"
      );
      setAllQuizes((prev) => ({
        ...prev,
        unfilteredQuizes: res.data.quizes,
        filteredQuizes: res.data.quizes,
      }));
      setIsLoaded(true);
    } catch (err) {
      setIsLoaded(true);
      setCaughtError(err?.response?.status || 500);
    }
  }

  useEffect(() => getAllQuizes(), []);

  const quizClickHandler = (e) => {
    setQuiz((prev) => ({ ...prev, name: e.target.dataset.quizname }));
    setQuiz((prev) => ({ ...prev, code: e.target.value }));
    setHasUserSelected(true);
  };

  function searchQuiz() {
    const query = searchInputRef.current.value;
    if (!query)
      setAllQuizes((prev) => ({
        ...prev,
        filteredQuizes: prev.unfilteredQuizes,
      }));
    let toReturn = [...allQuizes.unfilteredQuizes];
    toReturn = toReturn.filter((quiz) =>
      new RegExp(query, "gi").test(quiz.quizName)
    );
    setAllQuizes((prev) => ({ ...prev, filteredQuizes: toReturn }));
  }

  return (
    <>
      {hasUserSelected && <RulesModal modalState={setHasUserSelected} />}
      {!isLoaded && <FullPageLoader />}
      <main className="single-player-homepage">
        <div className="single-player-homepage__header --horizontal-flex">
          <h3 className="sub-heading --h2">Select the quiz</h3>
          <div className="search-container --horizontal-flex">
            <input type="text" placeholder="Search quiz" ref={searchInputRef} />
            <button className="btn --primary-btn" onClick={() => searchQuiz()}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <section className="section quiz-selection-section --has-gap --has-padding">
          {Array.isArray(allQuizes.filteredQuizes) &&
            !!allQuizes.filteredQuizes.length &&
            allQuizes.filteredQuizes.map((quiz, index) => (
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
