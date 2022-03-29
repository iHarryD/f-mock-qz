import { Routes, Route } from "react-router-dom";

import LandingPage from "../components/landingPage/LandingPage";
import SinglePlayerHomepage from "../components/singlePlayerHomepage/SinglePlayerHomepage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="single-player" element={<SinglePlayerHomepage />} />
    </Routes>
  );
}
