import { Routes, Route } from "react-router-dom";

import LandingPage from "./landingPage/LandingPage";
import SinglePlayerHomepage from "./singlePlayerHomepage/SinglePlayerHomepage";
import QuizPage from "./quizPage/QuizPage";
import ResultPage from "./resultPage/ResultPage";
import MultiplayerHomepage from "./multiplayerHomepage/MultiplayerHomepage";
import PrivateRoute from "../components/privateRoute/PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="single-player"
        element={<PrivateRoute protectedComponent={<SinglePlayerHomepage />} />}
      />
      <Route
        path="/multiplayer"
        element={<PrivateRoute protectedComponent={<MultiplayerHomepage />} />}
      />
      <Route
        path="multiplayer/in-quiz/:quizCode"
        element={<PrivateRoute protectedComponent={<QuizPage />} />}
      />
      <Route
        path="single-player/in-quiz/:quizCode"
        element={<PrivateRoute protectedComponent={<QuizPage />} />}
      />
      <Route
        path="/result"
        element={<PrivateRoute protectedComponent={<ResultPage />} />}
      />
    </Routes>
  );
}
