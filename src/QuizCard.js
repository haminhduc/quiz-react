// display quizz
function QuizCard(props) {
  const quizData = props.question;
  // console.log( quizData);
  // collect answers and shuffle
  const allAnswers = [...quizData.incorrect_answers];
  allAnswers.push(quizData.correct_answer);
  shuffle(allAnswers);
  // console.log(allAnswers);

  return (
    <div className="quiz-item" id={props.questionID}>
      <h2 className="question">{decode(quizData.question)}</h2>
      <div className="answer-list">
        {allAnswers.map((answer, index) => (
          <label className="answer-item" key={index}>
            <input
              type="radio"
              name={"q-" + props.questionID}
              value={decode(answer)}
              onChange={() =>
                props.handleSelect(decode(answer), props.questionID)
              }
            />
            {decode(answer)}
          </label>
        ))}
      </div>
      <hr />
    </div>
  );
  // decode special characters
  function decode(str) {
    let txt = document.createElement("textarea");

    txt.innerHTML = str;

    return txt.value;
  }

  // shuffle an array
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
export default QuizCard;
