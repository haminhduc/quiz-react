// display quizz
function QuizCard(props) {
  return (
    <div className="container">
      <h1 className="quiz-title">General knowledge quiz</h1>
      <article className="quiz-list">
        <div className="quiz-item">
          <h2 className="question">
            Lorem ipsum, dolori quo autem fugit a non provident adipisci
            cupiditate optio, ad ipsa.
            {/* {questionList[0].question} */}
          </h2>
          <ul className="answer-list">
            <li className="answer-item">
              fugitorem asdasdas, quo autem fugorem asdasdas, quo autem fug
              asda, quo a utem fug quo quo quo quo qu utem fug quo quo quo quo
              qu o quo quo quo
            </li>
            <li className="answer-item">lorem asdasdas, quo autem fug</li>
            <li className="answer-item">lorem asdasdas, quo autem fug</li>
            <li className="answer-item">lorem asdasdas, quo autem fug</li>
          </ul>
          <hr />
        </div>
      </article>
    </div>
  );
  // function getQuestions(callback) {
  //   fetch(triviaAPI)
  //     .then((data) => data.json())
  //     .then(callback);
  // }
  // console.log(data);
  // const questions = data.results;
  // console.log(questions);

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
