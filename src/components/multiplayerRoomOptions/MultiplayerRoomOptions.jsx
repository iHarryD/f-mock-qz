import roomOptionsStyles from "./MultiplayerRoomOptions.module.css";
import { useEffect, useRef, useState } from "react";
import InRoom from "../inRoom/InRoom";
import { useUser } from "../../contexts/userContext";
import { useQuiz } from "../../contexts/quizContext";
import socket from "../../socket/socket";
import { useNavigate } from "react-router-dom";

export default function MultiplayerRoomOptions() {
  const [isJoiningRoom, setIsJoiningRoom] = useState(false);
  const [roomID, setRoomID] = useState(null);
  const [roomStatusMessages, setRoomStatusMessages] = useState([]);
  const roomIDInputRef = useRef(null);
  const { user, setUser } = useUser();
  const { quiz, setQuiz } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (!socket) return;
    socket.on("message", (...args) => {
      setRoomStatusMessages((prev) => [...prev, ...args]);
    });
  }, []);

  function createRoom() {
    if (!socket) return;
    socket.emit("add-nickname", user.name);
    socket.emit(
      "create-room",
      {
        name: quiz.name, // Store room information
        code: quiz.code,
      },
      (roomID) => setRoomID(roomID)
    );
    socket.on("start", (quizDetails) => {
      setQuiz((prev) => ({ ...prev, ...quizDetails }));
      navigate(`in-quiz/${quizDetails.code}`);
    });
  }

  function joinRoom(roomID) {
    if (!socket) return;
    socket.emit("add-nickname", user.name);
    socket.emit("join-room", roomID, (roomID, quizDetails) => {
      setRoomID(roomID);
      setQuiz((prev) => ({
        ...prev,
        ...quizDetails,
      }));
    });
    socket.on("start", (quizDetails) => {
      setQuiz((prev) => ({ ...prev, ...quizDetails }));
      navigate(`in-quiz/${quizDetails.code}`);
    });
  }

  function statusReady() {
    if (!socket) return;
    socket.emit("ready", roomID, { code: quiz.code });
  }

  return roomID ? (
    <InRoom
      isRoomAdmin={!isJoiningRoom}
      quizStartBtnHandler={statusReady}
      roomStatusMessages={roomStatusMessages}
    />
  ) : (
    <main className="--verticle-flex --centered-flex">
      <div className={roomOptionsStyles["section-container"]}>
        {isJoiningRoom ? (
          <>
            <div className={roomOptionsStyles["room-name-input-container"]}>
              <input
                placeholder="Room ID"
                className={`input ${roomOptionsStyles["room-name-input"]}`}
                ref={roomIDInputRef}
              />
            </div>

            <button
              className="btn --primary-btn --has-hover-overlay"
              onClick={() => joinRoom(roomIDInputRef.current.value)}
            >
              Join
            </button>
          </>
        ) : (
          <>
            <input
              placeholder={user.name}
              className={`input ${roomOptionsStyles["room-name-input"]}`}
              onChange={(e) => setUser({ name: e.target.value })}
            />
            <div className={roomOptionsStyles["button-container"]}>
              <button
                className="btn --primary-btn --has-hover-overlay"
                onClick={() => setIsJoiningRoom(true)}
              >
                Join a room
              </button>
              <button
                className="btn --primary-btn --has-hover-overlay"
                onClick={() => createRoom()}
              >
                Create a room
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
