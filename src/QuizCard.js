// display quizz
function QuizCard(props) {
  const quizData = props.question;
  // console.log("tuong cau hoi", quizData);
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

  function decode(str) {
    let txt = document.createElement("textarea");

    txt.innerHTML = str;

    return txt.value;
  }
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
  /* <li
              
             
              value={decode(answer)}
              onClick={(event) => props.handleSelection(event, decode(answer))}
            >
              {decode(answer)}
            </li> */
  //handle result
  // function handleResult(questionsData) {
  //   var answerContainers = quizzBlock.querySelectorAll(".answers-container");
  // console.log(answerContainers);
  // var userAnswer = "";
  // var userAnswerID = "";

  // for (var i = 0; i < questionsData.length; i++) {
  //   const answerLocation = answerContainers[i].querySelector(
  //     "input[name=question-no-" + i + "]:checked"
  //   );
  //   if (answerLocation === null) {
  // alert("please answer all 5 questions");
  // return hideButton();
  // } else {
  //   userAnswer = answerLocation.value;
  //   userAnswerID = answerContainers[i].querySelector(
  //     "input[name=question-no-" + i + "]:checked"
  //   ).id;

  //   if (userAnswer === questionsData[i].correct_answer) {
  //     // add to the number of correct answers
  //   score++;

  //   document
  //     .querySelector("label[for=" + userAnswerID + "]")
  //     .classList.add("correct-selection");
  // }
  // check if answer is wrong or blank
  //     else {
  //       document
  //         .querySelector("label[for=" + userAnswerID + "]")
  //         .classList.add("wrong-selection");
  //     }
  //   }
  // }
  // resultLine.innerHTML = `you have ${score} correct answers`;
  // hideButton();
}
export default QuizCard;
