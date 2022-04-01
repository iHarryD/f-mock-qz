import { Routes, Route } from "react-router-dom";

import LandingPage from "../components/landingPage/LandingPage";
import SinglePlayerHomepage from "../components/singlePlayerHomepage/SinglePlayerHomepage";
import Quiz from "../components/quiz/Quiz";
import ResultPage from "../components/resultPage/ResultPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="single-player" element={<SinglePlayerHomepage />} />
      <Route path="single-player/in-quiz/:quizCode" element={<Quiz />} />
      <Route path="/single-player/result" element={<ResultPage />} />
    </Routes>
  );
}
