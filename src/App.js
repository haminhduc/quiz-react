import React, { useState, useEffect } from "react";
import QuizCard from "./QuizCard.js";
import "./App.css";

function App() {
  const [questionList, setQuestionList] = useState([]);

  // const triviaAPI = "https://opentdb.com/api.php?amount=5";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://opentdb.com/api.php?amount=10`);
      const newData = await response.json();
      setQuestionList(newData.results);
    };

    fetchData();
  });
  console.log(questionList);

  return (
    <div className="App">
      <QuizCard questionList={questionList} />;
    </div>
  );
}

export default App;
