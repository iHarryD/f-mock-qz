import "./css/scoreBoardsStyles.css";

export function SinglePlayerScoreBoard({ score }) {
  return (
    <p className="current-score-container">
      Current score: <span className="current-score --bold-700">{score}</span>
    </p>
  );
}

export function MultiplayerScoreBoard({ selfScore, opponentScore }) {
  return (
    <div className="multiplayer-scoreboard-container">
      <div>
        <p className="current-score --bold-700">{selfScore}</p>
        <p className="player-notation">Your</p>
      </div>
      <div>
        <p className="current-score --bold-700">{opponentScore}</p>
        <p className="player-notation">Opponent</p>
      </div>
    </div>
  );
}
