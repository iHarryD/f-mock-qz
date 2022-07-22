import inRoomStyles from "./InRoom.module.css";

export default function InRoom({
  quizStartBtnHandler,
  roomStatusMessages,
  isRoomAdmin,
}) {
  return (
    <main className="--verticle-flex --centered-flex">
      <div className={inRoomStyles["room-updates-container"]}>
        <ul>
          {roomStatusMessages.map((message) => (
            <li className={inRoomStyles["room-update-text"]}>{message}</li>
          ))}
        </ul>
      </div>
      {isRoomAdmin && (
        <button
          className="btn --secondary-btn"
          onClick={() => quizStartBtnHandler()}
        >
          Start
        </button>
      )}
    </main>
  );
}
