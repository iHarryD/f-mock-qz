import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { QuizProvider } from "./contexts/quizContext";
import { ThemeProvider } from "./contexts/themeContext";
import { PlayerProvider } from "./contexts/playerContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <PlayerProvider>
            <QuizProvider>
              <App />
            </QuizProvider>
          </PlayerProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
