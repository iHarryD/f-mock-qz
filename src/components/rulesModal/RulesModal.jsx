import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";

import "./css/rulesModalStyle.css";
import BodyBackdrop from "../bodyBackdrop/BodyBackdrop";
import { useUser } from "../../contexts/userContext";
import { useQuiz } from "../../contexts/quizContext";

export default function RulesModal(props) {
  const navigate = useNavigate();
  const usernameInputRef = useRef();
  const { user, setUser } = useUser();
  const { quiz } = useQuiz();

  const modalVariant = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      //   transition: {
      //     type: "spring",
      //     stiffness: 100,
      //   },
    },
  };

  return (
    <BodyBackdrop>
      <motion.div
        className="modal --verticle-flex --has-gap --has-padding"
        variants={modalVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="modal-header --horizontal-flex">
          <h3 className="sub-heading --h3 --has-padding">
            You have selected{" "}
            <span className="quiz-selected-name">{quiz.name}</span> quiz, but
            before getting started, let's get you started with the rules and
            everything.
          </h3>
        </div>
        <div className="modal-main --verticle-flex --has-gap --has-padding">
          <div className="modal__container">
            <p className="modal__container-heading">Rules</p>
            <ul>
              <li>There will be 10 questions in total.</li>
              <li>
                Four options will be given for each question, among which only
                one would be correct.
              </li>
              <li>
                You will be given 15 seconds for each question. In case you do
                not choose an option before the time runs out, you will be moved
                to the next question.
              </li>
            </ul>
          </div>
          <div className="modal__container">
            <p className="modal__container-heading">Marking System</p>
            <ul>
              <li>You will be given points for each corrent answers only.</li>
              <li>
                Points given would be equal to the time remaining when you
                answer, in seconds. For example, 5 points would be alloted if
                you answer when 5 seconds are remaining.
              </li>
              <li>Wrong answers would have no effect on your score.</li>
            </ul>
          </div>
        </div>
        <div className="--verticle-flex --centered-flex">
          <div className="--verticle-flex --has-gap">
            <div className="username-input-container">
              <input
                ref={usernameInputRef}
                className="username-input"
                type="text"
                name="name"
                placeholder={"Guest"}
              />
            </div>
            <div className="--horizontal-flex --centered-flex --has-gap">
              <button
                className="btn --primary-btn --has-hover-overlay"
                onClick={() => {
                  setUser((prev) => ({
                    ...prev,
                    name: usernameInputRef.current.value.replace(/\s/g, "")
                      ? usernameInputRef.current.value
                      : prev.name,
                  }));
                  props.modalState(false);
                  navigate(`in-quiz/${quiz.code}`);
                }}
              >
                Start Quiz
              </button>

              <button
                className="btn modal-close-btn --secondary-btn"
                onClick={() => {
                  props.modalState(false);
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </BodyBackdrop>
  );
}
