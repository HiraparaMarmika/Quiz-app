import React, { useState } from "react";
import "./Quiz.css";
import { quizdata } from "../../quizdata";
import Score from "../Score/Score";
export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickQuestion, setClickQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < quizdata.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickQuestion(0);
    } else {
      setShowScore(true);
    }
  };
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  const updateScore = () => {
    if (clickQuestion === quizdata[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const tryAgain = () => {
    setShowScore(false);
    setClickQuestion(0);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <>
      <div className="container">
        <div className="quiz-box">
          <div className="start-quiz">
            {showScore ? <h2>Your Result</h2> : <h2>Start Quiz</h2>}
            {showScore ? (
              ""
            ) : (
              <>
                <div className="next-prev">
                  <h3
                    onClick={prevQuestion}
                    className={currentQuestion === 0 ? "disabled" : ""}
                  >
                    prev
                  </h3>
                  <h3 onClick={changeQuestion}>Next</h3>
                </div>
              </>
            )}
          </div>

          <div className="quiz-border">
            {showScore ? (
              <Score
                score={score}
                totalscore={quizdata.length}
                tryAgain={tryAgain}
              />
            ) : (
              <>
                <div className="question">
                  <p>{currentQuestion + 1}</p>
                  <p>{quizdata[currentQuestion].question}</p>
                </div>
                {quizdata[currentQuestion].option.map((option, i) => (
                  <>
                    <button
                      className={`option-btn ${
                        clickQuestion == i + 1 ? "checked" : null
                      }`}
                      onClick={() => {
                        setClickQuestion(i + 1);
                      }}
                      key={i}
                    >
                      {option}
                    </button>
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
