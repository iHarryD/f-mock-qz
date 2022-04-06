import ReactDOM from "react-dom";

import "./css/loaderStyle.css";
import BodyBackdrop from "../bodyBackdrop/BodyBackdrop";

export function FullPageLoader() {
  return ReactDOM.createPortal(
    <BodyBackdrop>
      <div className="full-page-loader"></div>
    </BodyBackdrop>,
    document.getElementById("portal")
  );
}

export function ButtonLoader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="204px"
      height="204px"
      className="btn-loader"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      data-darkreader-inline-bgimage=""
      data-darkreader-inline-bgcolor=""
    >
      <circle
        cx="84"
        cy="50"
        r="10"
        fill="#17374f"
        data-darkreader-inline-fill=""
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.5681818181818182s"
          calcMode="spline"
          keyTimes="0;1"
          values="11;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="2.272727272727273s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values="#17374f;#17374f;#17374f;#17374f;#17374f"
          begin="0s"
        ></animate>
      </circle>
      <circle
        cx="16"
        cy="50"
        r="10"
        fill="#17374f"
        data-darkreader-inline-fill=""
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.272727272727273s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;11;11;11"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.272727272727273s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="10"
        fill="#17374f"
        data-darkreader-inline-fill=""
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.272727272727273s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;11;11;11"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.5681818181818182s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.272727272727273s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.5681818181818182s"
        ></animate>
      </circle>
      <circle
        cx="84"
        cy="50"
        r="10"
        fill="#17374f"
        data-darkreader-inline-fill=""
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.272727272727273s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;11;11;11"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.1363636363636365s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.272727272727273s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.1363636363636365s"
        ></animate>
      </circle>
      <circle
        cx="16"
        cy="50"
        r="10"
        fill="#17374f"
        data-darkreader-inline-fill=""
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.272727272727273s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;11;11;11"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.7045454545454546s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.272727272727273s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.7045454545454546s"
        ></animate>
      </circle>
    </svg>
  );
}
