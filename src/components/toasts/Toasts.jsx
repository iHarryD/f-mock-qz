import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import "./css/toastsStyle.css";

export function ErrorToast(props) {
  return (
    <motion.div
      className="toast --error --horizontal-flex"
      initial={{
        x: "50vw",
      }}
      animate={{
        x: 0,
      }}
    >
      {props.children}
      <FontAwesomeIcon icon={faCircleExclamation} />
    </motion.div>
  );
}
