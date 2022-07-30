import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

function initiateUserData() {
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  if (email && token) {
    return { email, token };
  } else {
    return null;
  }
}

const defaultValues = initiateUserData();

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(defaultValues);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("email", userData.email);
      localStorage.setItem("token", userData.token);
      axios.defaults.headers.common["authorization"] = userData.token;
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      axios.defaults.headers.common["authorization"] = false;
    }
  }, [userData]);

  function logout(callback) {
    setUserData(null);
    if (callback) callback();
  }

  return (
    <AuthContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
