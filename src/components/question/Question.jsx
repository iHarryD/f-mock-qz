import "./css/questionStyle.css";

export default function Question({
  currentQuestion,
  optionClickHandler,
  hasUserSelected,
}) {
  return (
    <div className="quiz-question-container --bold-600 --has-padding">
      <p className="question">{currentQuestion.question}</p>
      {Object.keys(currentQuestion.options).map((option, index) => (
        <button
          className="option --verticle-flex --centered-flex"
          value={currentQuestion.options[option]}
          key={`${currentQuestion.questionCode}-${index}`}
          onClick={(e) => optionClickHandler(e)}
          disabled={hasUserSelected}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
