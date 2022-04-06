import { ButtonLoader } from "../loaders/Loaders";
import "./css/buttonsStyle.css";

export function ButtonWithLoader({ loading, text, clickHandler }) {
  return (
    <button
      className={`btn ${
        !loading ? "--primary-btn --has-hover-overlay" : "--is-loading"
      }`}
      onClick={() => clickHandler()}
    >
      {loading ? <ButtonLoader /> : text}
    </button>
  );
}
