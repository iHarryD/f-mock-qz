import { Routes, Route } from "react-router-dom";

import LandingPage from "./landingPage/LandingPage";
import SinglePlayerHomepage from "./singlePlayerHomepage/SinglePlayerHomepage";
import QuizPage from "./quizPage/QuizPage";
import ResultPage from "./resultPage/ResultPage";
import MultiplayerHomepage from "./multiplayerHomepage/MultiplayerHomepage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="single-player" element={<SinglePlayerHomepage />} />
      <Route path="/multiplayer" element={<MultiplayerHomepage />} />
      <Route path="single-player/in-quiz/:quizCode" element={<QuizPage />} />
      <Route path="/single-player/result" element={<ResultPage />} />
    </Routes>
  );
}
