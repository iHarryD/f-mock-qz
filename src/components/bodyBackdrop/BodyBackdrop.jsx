import { useRef } from "react";
import ReactDOM from "react-dom";

import "./css/bodyBackdropStyle.css";

export default function BodyBackdrop(props) {
  const backdropRef = useRef(null);
  return ReactDOM.createPortal(
    <div
      ref={backdropRef}
      className="backdrop"
      onClick={(e) => {
        if (e.target === backdropRef.current && props.onClick) {
          props.onClick(e);
        }
      }}
    >
      {props.children}
    </div>,
    document.getElementById("portal")
  );
}
