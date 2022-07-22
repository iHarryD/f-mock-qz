import { useEffect } from "react";
import { useReducer } from "react";
import { io } from "socket.io-client";
import { socketClientHandler } from "../reducers/socketClientHandler";

export default function useSocketClient() {
  const [socketData, socketReducerDispatch] = useReducer(socketClientHandler, {
    socket: null,
    roomID: null,
  });

  useEffect(() => {
    const socket = io("http://127.0.0.1:3001");
    socketReducerDispatch({
      type: "INITIATE_SOCKET_CONNECTION",
      payload: { socket },
    });
  }, []);

  return { socketData, socketReducerDispatch };
}
