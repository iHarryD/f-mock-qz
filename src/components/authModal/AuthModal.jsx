import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import "./css/authModalStyles.css";
import { useRef, useState } from "react";
import { login, signup } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { ButtonWithLoader } from "../buttons/Buttons";

const testCredentials = {
  email: "test@mockqz.com",
  password: "sayshazam",
};

export default function AuthModal({ navigateTo }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(null);
  const { setUserData } = useAuth();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  function handleLogin() {
    if (
      emailInputRef.current.value.replaceAll(" ", "") &&
      passwordInputRef.current.value.replaceAll(" ", "")
    ) {
      login(
        emailInputRef.current.value,
        passwordInputRef.current.value,
        setIsLoggingIn,
        (result) => {
          setUserData({
            email: result.data.email,
            token: result.data.token,
          });
          navigate(navigateTo);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Fill in all fields to proceed.");
    }
  }

  function handleRegister() {
    if (
      emailInputRef.current.value.replaceAll(" ", "") &&
      passwordInputRef.current.value.replaceAll(" ", "")
    ) {
      signup(
        emailInputRef.current.value,
        passwordInputRef.current.value,
        setIsRegistering,
        () => {
          handleLogin();
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Fill in all fields to proceed.");
    }
  }

  return (
    <>
      <div className="auth-modal ">
        <div className="--verticle-flex --has-gap">
          <input
            ref={emailInputRef}
            type="email"
            className="input"
            placeholder="Email"
          />
          <div className="input-password-container">
            <input
              ref={passwordInputRef}
              className="input password-input"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
            />
            <button
              className="btn --icon-only-btn"
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
          {error && <p className="auth-error-text">{error}</p>}
          <div className="auth-modal-btns-container">
            <ButtonWithLoader
              loading={isLoggingIn}
              text="Login"
              clickHandler={() => handleLogin()}
            />
            <ButtonWithLoader
              loading={isRegistering}
              text="Register"
              clickHandler={() => handleRegister()}
            />
            <button
              className="btn --text-btn"
              onClick={() => {
                emailInputRef.current.value = testCredentials.email;
                passwordInputRef.current.value = testCredentials.password;
              }}
            >
              Login using test credentials.
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
