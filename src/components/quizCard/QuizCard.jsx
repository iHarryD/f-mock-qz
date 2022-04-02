import "./css/quizCardStyle.css";

export default function QuizCard(props) {
  return (
    <div className="quiz-card --homepage --verticle-flex">
      <div className="quiz-card-thumbnail-container">
        <img
          className="quiz-card-thumbnail-img"
          src={require(`../../assets/card-thumbnail-${props.quizDetails.quizCode}.jpg`)}
          alt="marvel-cinematic-universe"
        />
      </div>
      <div className="quiz-card-text-container --verticle-flex --has-gap --has-padding">
        <p className="quiz-card-heading --bold-600">
          {props.quizDetails.quizName}
        </p>
        <p className="quiz-card-description">
          {props.quizDetails.quizDescription}
        </p>
      </div>
      <div className="quiz-card-overlay --verticle-flex --centered-flex">
        <button
          className="btn --secondary-btn"
          value={props.quizDetails.quizCode}
          onClick={(e) => props.clickHandler(e)}
          data-quizname={props.quizDetails.quizName}
        >
          Take Quiz
        </button>
      </div>
    </div>
  );
}
