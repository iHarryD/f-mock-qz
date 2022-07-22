import { useEffect } from "react";
import MultiplayerHomeScreen from "../../components/multiplayerHomeScreen/MultiplayerHomeScreen";
import { useQuiz } from "../../contexts/quizContext";

export default function MultiplayerHomepage() {
  const { setQuiz } = useQuiz();

  useEffect(() => setQuiz((prev) => ({ ...prev, mode: "multiplayer" })), []);

  return <MultiplayerHomeScreen />;
}
