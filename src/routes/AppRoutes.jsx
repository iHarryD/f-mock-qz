import { Routes, Route } from "react-router-dom";

import LandingPage from "../components/landingPage/LandingPage";
import SinglePlayerHomepage from "../components/singlePlayerHomepage/SinglePlayerHomepage";
import Quiz from "../components/quiz/Quiz";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="single-player" element={<SinglePlayerHomepage />}>
        <Route path="in-quiz/:quizcode" element={<Quiz />} />
      </Route>
    </Routes>
  );
}
