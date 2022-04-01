import "./css/timerStyle.css";

export default function Timer({ currentTimer }) {
  return (
    <div className="timer-container --has-padding --bold-700">
      <p>
        {String(currentTimer).length < 2
          ? `00:0${currentTimer}`
          : `00:${currentTimer}`}
      </p>
    </div>
  );
}
