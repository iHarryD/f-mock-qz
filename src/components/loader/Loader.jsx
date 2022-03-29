import ReactDOM from "react-dom";

import "./css/loaderStyle.css";
import BodyBackdrop from "../bodyBackdrop/BodyBackdrop";

export default function Loader() {
  return ReactDOM.createPortal(
    <BodyBackdrop>
      <div className="loader"></div>
    </BodyBackdrop>,
    document.getElementById("portal")
  );
}
