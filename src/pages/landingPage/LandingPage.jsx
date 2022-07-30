import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../../components/authModal/AuthModal";
import BodyBackdrop from "../../components/bodyBackdrop/BodyBackdrop";
import { useAuth } from "../../contexts/authContext";

import "./css/landingPageStyle.css";

export default function LandingPage() {
  const [modeSelected, setModeSelected] = useState(null);
  const { userData } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {modeSelected && (
        <BodyBackdrop>
          <AuthModal quizMode={modeSelected} />
        </BodyBackdrop>
      )}
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
        <p className="landing-page-text --bold-600">
          Choose mode to get started
        </p>
        <div className="landing-page-btn-container --horizontal-flex --has-gap">
          <button
            className="btn --primary-btn --has-hover-overlay"
            onClick={() => {
              if (userData) {
                navigate("/single-player");
              } else {
                setModeSelected("single-player");
              }
            }}
          >
            Single Player
          </button>
          <button
            className="btn --primary-btn --has-hover-overlay"
            onClick={() => {
              if (userData) {
                navigate("/multiplayer");
              } else {
                setModeSelected("multiplayer");
              }
            }}
          >
            Multiplayer
          </button>
        </div>
      </main>
    </>
  );
}
