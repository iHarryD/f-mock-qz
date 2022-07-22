import { useState } from "react";
import { useQuiz } from "../../contexts/quizContext";
import MultiplayerRoomOptions from "../multiplayerRoomOptions/MultiplayerRoomOptions";
import Quizes from "../quizes/Quizes";

export default function MultiplayerHomeScreen() {
  const { setQuiz } = useQuiz();
  const [hasUserSelected, setHasUserSelected] = useState(false);

  function quizCardClickHandler(name, code) {
    setQuiz((prev) => ({ ...prev, name, code }));
    setHasUserSelected(true);
  }

  return hasUserSelected ? (
    <MultiplayerRoomOptions />
  ) : (
    <Quizes quizCardClickHandler={quizCardClickHandler} />
  );
}
