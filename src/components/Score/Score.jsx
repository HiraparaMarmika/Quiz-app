import React from "react";
import "./Score.css";
export default function Score({ score, totalscore, tryAgain }) {
  const percentage = ((score / totalscore) * 100).toFixed(2);
  return (
    <>
      <p className="Score-details">
        Your Score:
        <span className="scores">{score}</span>
      </p>
      <p className="Score-details">
        Total Score:
        <span className="scores"> {totalscore}</span>
      </p>
      <p className="Score-details">
        Percentage:
        <span className="scores">{percentage}%</span>
      </p>
      <div className="score-btn">
        <button onClick={tryAgain}>Try Again</button>
      </div>
    </>
  );
}
