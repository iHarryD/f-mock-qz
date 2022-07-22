import "./css/pointTrackerStyle.css";
import { motion, AnimatePresence } from "framer-motion";

export function SinglePlayerPointTracker({ point }) {
  return (
    <li className="points-tracker --verticle-flex --centered-flex --bold-700">
      + {point}
    </li>
  );
}

export function MultiplayerPointTracker({
  questionNumber,
  selfPosition,
  opponentPosition,
}) {
  const markerVariant = {
    initial: {
      y: "200%",
      transition: {
        duration: 0.2,
        delay: 0.5,
      },
    },
    animate: {
      y: "-50%",
      transition: {
        duration: 0.2,
        delay: 0.5,
      },
    },
    exit: {
      y: "-200%",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <li className="points-tracker --verticle-flex --centered-flex --bold-700">
      <AnimatePresence>
        {selfPosition === questionNumber && (
          <motion.span
            className="player-position-marker --self"
            variants={markerVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            key={"u" + questionNumber}
          ></motion.span>
        )}
        <span>Question {questionNumber}</span>
        {opponentPosition === questionNumber && (
          <motion.span
            className="player-position-marker --opponent"
            variants={markerVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            key={"l" + questionNumber}
          ></motion.span>
        )}
      </AnimatePresence>
    </li>
  );
}
