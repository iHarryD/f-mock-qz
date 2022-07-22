import quizesStyles from "./Quizes.module.css";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import QuizCard from "../../components/quizCard/QuizCard";
import { ErrorToast } from "../../components/toasts/Toasts";
import { InFullPageLoader } from "../../components/loaders/Loaders";
import { getAllQuizes } from "../../services/quizServices";

export default function Quizes({ quizCardClickHandler }) {
  const [allQuizes, setAllQuizes] = useState({
    unfilteredQuizes: [],
    filteredQuizes: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(
    () =>
      getAllQuizes(
        setIsLoading,
        (result) => {
          setAllQuizes({
            unfilteredQuizes: result.data.quizes,
            filteredQuizes: result.data.quizes,
          });
        },
        (err) => {
          console.log(err);
        }
      ),
    []
  );

  function searchQuiz() {
    const query = searchInputRef.current.value;
    if (!query)
      setAllQuizes((prev) => ({
        ...prev,
        filteredQuizes: prev.unfilteredQuizes,
      }));
    const toReturn = allQuizes.unfilteredQuizes.filter((quiz) =>
      new RegExp(query, "gi").test(quiz.quizName)
    );
    setAllQuizes((prev) => ({ ...prev, filteredQuizes: toReturn }));
  }

  return (
    <main className="--verticle-flex --has-padding">
      <div className={quizesStyles["page-header"]}>
        <h3 className="sub-heading --h2">Select the quiz</h3>
        <div className={quizesStyles["search-bar-container"]}>
          <input
            placeholder="Search quiz"
            className={quizesStyles["search-bar"]}
            ref={searchInputRef}
          />
          <button className="btn --primary-btn" onClick={() => searchQuiz()}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className={quizesStyles["page-content-body"]}>
        {isLoading && Array.isArray(allQuizes.filteredQuizes) ? (
          <InFullPageLoader />
        ) : (
          <div>
            <div
              className={`section --has-gap --has-padding ${quizesStyles["quizes-listing-container"]}`}
            >
              {allQuizes.filteredQuizes.map((quiz, index) => (
                <QuizCard
                  quizDetails={quiz}
                  clickHandler={quizCardClickHandler}
                  key={index}
                />
              ))}
            </div>
            <p className={`--bold-600 ${quizesStyles["bottom-text"]}`}>
              This is it for now. More quizes will be added soon. Keep coming
              back.
            </p>
          </div>
        )}

        {/* {caughtError && (
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
        )} */}
      </div>
    </main>
  );
}
