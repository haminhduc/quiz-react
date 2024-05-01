import React, { useState, useEffect } from "react";
import QuizCard from "./QuizCard.js";
import "./App.css";

function App() {
  const [questionList, setQuestionList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [finalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);

      try {
        const response = await fetch(`${triviaAPI}`);
        const newData = await response.json();
        setQuestionList(newData.results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }

      // console.log("collected data", newData.results);
    };

    fetchData();
  }, [refresh]);
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
  const handleRefresh = () => {
    setRefresh(refresh + 1);
    setFinalResult(false);
    setScore(null);
  };
  if (isLoading) {
    return <div className="loading-screen">Loading...</div>;
  }

  if (error) {
    return <div className="error">Something went wrong</div>;
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="quiz-title">General knowledge Quiz</h1>

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
            <button className="btn" onClick={handleRefresh}>
              Refresh
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
