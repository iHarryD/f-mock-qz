import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [playerName, setPlayerName] = useState(
    localStorage.getItem("name") ? localStorage.getItem("name") : "Guest"
  );

  useEffect(() => {
    if (playerName) {
      localStorage.setItem("name", playerName);
    } else {
      localStorage.removeItem("name");
    }
  }, [playerName]);

  return (
    <PlayerContext.Provider value={{ playerName, setPlayerName }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
