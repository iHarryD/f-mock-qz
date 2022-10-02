import Quizes from "../../components/quizes/Quizes";
import RulesModal from "../../components/rulesModal/RulesModal";
import { useState } from "react";
import { useQuiz } from "../../contexts/quizContext";
import { useEffect } from "react";

export default function SinglePlayerHomepage() {
  const [hasUserSelected, setHasUserSelected] = useState(false);
  const { setQuiz } = useQuiz();

  useEffect(() => setQuiz((prev) => ({ ...prev, mode: "single-player" })), []);

  function quizClickHandler(name, code) {
    setQuiz((prev) => ({ ...prev, name, code }));
    setHasUserSelected(true);
  }

  return (
    <>
      {hasUserSelected && <RulesModal modalStateSetter={setHasUserSelected} />}
      <Quizes quizCardClickHandler={quizClickHandler} />
    </>
  );
}
