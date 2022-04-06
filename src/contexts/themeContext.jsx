import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const defaultTheme = "dark";

  const [themePreference, setThemePreference] = useState(
    localStorage.getItem("themePreference") || defaultTheme
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme-preference",
      themePreference
    );
  }, [themePreference]);

  return (
    <ThemeContext.Provider value={{ themePreference, setThemePreference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
