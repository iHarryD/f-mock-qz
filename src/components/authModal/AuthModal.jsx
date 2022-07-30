import AuthBox from "../authBox/AuthBox";
import "./css/authModalStyles.css";

export default function AuthModal({ quizMode }) {
  return (
    <div className="auth-modal">
      <AuthBox navigateTo={`/${quizMode}`} />
    </div>
  );
}
