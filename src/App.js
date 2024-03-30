import React, { useState, useEffect } from "react";
import QuizCard from "./QuizCard.js";
import "./App.css";

function App() {
  const [questionList, setQuestionList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [finalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(null);

  const triviaAPI = "https://opentdb.com/api.php?amount=5";

  // decode special characters
  function decode(str) {
    let txt = document.createElement("textarea");

    txt.innerHTML = str;

    return txt.value;
  }

  // fetch API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${triviaAPI}`);
      const newData = await response.json();
      setQuestionList(newData.results);
      // console.log("collected data", newData.results);
    };

    fetchData();
  }, []);
  // console.log("collected data", questionList);

  // Function to handle radio button selection
  const handleSelect = (value, questionID) => {
    const correctAnswer = decode(questionList[questionID].correct_answer);
    const selectedAnswer = value;
    // console.log("selected", selectedAnswer);
    // console.log("selected", questionID);
    // console.log("selected", correctAnswer);
    var answeredQuestion = { selectedAnswer, correctAnswer, questionID };
    // console.log("final answer", answeredQuestion);
    setAnswerList((prev) => {
      const index = prev.findIndex(
        (e) => e.questionID === answeredQuestion.questionID
      );

      if (index === -1) {
        prev.push(answeredQuestion);
      } else {
        prev[index] = answeredQuestion;
      }
      return prev;
    });
    console.log(answerList);
  };

  // Function to handle submission
  const handleSubmit = (event) => {
    console.log("submit answers");
    event.preventDefault();
    answerList.forEach((answer) => {
      console.log("answer", answer);
      if (answer.selectedAnswer === answer.correctAnswer) {
        console.log("correctAnswer");
        setScore((prev) => {
          return prev + 1;
        });
      }
    });
    setFinalResult(true);
  };

  // Function to handle restart
  const handleRestart = (event) => {
    event.preventDefault();
    setFinalResult(false);
    setScore(null);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="quiz-title">General knowledge quiz</h1>

        {finalResult ? (
          <div className="quiz-end">
            <div className="quiz-result">
              You have{" "}
              {score === null
                ? ` 0 correct answers`
                : score > 1
                ? ` ${score} correct answers`
                : ` ${score} correct answer`}
            </div>
            <button className="btn" onClick={handleRestart}>
              Re-Try
            </button>
          </div>
        ) : (
          <div className="quiz-section">
            <div className="quiz-list">
              {questionList.map((question, index) => {
                return (
                  <QuizCard
                    question={question}
                    key={index}
                    questionID={index}
                    handleSelect={handleSelect}
                  />
                );
              })}
            </div>
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
