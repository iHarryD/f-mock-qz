import ReactDOM from "react-dom";

import "./css/bodyBackdropStyle.css";

export default function BodyBackdrop(props) {
  return ReactDOM.createPortal(
    <div className="backdrop">{props.children}</div>,
    document.getElementById("portal")
  );
}
