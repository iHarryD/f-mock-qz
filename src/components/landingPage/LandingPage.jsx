import { useNavigate } from "react-router-dom";

import "./css/landingPageStyle.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="--verticle-flex --centered-flex">
      <h1 className="heading landing-page-heading --horizontal-flex --centered-flex --has-gap">
        Welcome to{" "}
        <span className="--horizontal-flex">
          {" "}
          <span className="landing-page-animated-letters">m</span>
          <span className="landing-page-animated-letters">o</span>
          <span className="landing-page-animated-letters">c</span>
          <span className="landing-page-animated-letters">k</span>
          <span className="landing-page-animated-letters">q</span>
          <span className="landing-page-animated-letters">z</span>
        </span>
      </h1>
      <h2 className="sub-heading landing-page-sub-heading --h2">
        Haven't thought of a catchy phrase yet.
      </h2>
      <p className="landing-page-text --bold-600">Choose mode to get started</p>
      <div className="landing-page-btn-container --horizontal-flex --has-gap">
        <button
          className="btn --primary-btn --has-hover-overlay"
          onClick={() => navigate("/single-player")}
        >
          Single Player
        </button>
        <button
          className="btn --primary-btn --has-hover-overlay"
          disabled={true}
        >
          Multiplayer
        </button>
      </div>
    </main>
  );
}
