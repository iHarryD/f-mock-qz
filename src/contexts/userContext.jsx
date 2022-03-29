import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState({
    name: "Guest",
    score: 0,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
