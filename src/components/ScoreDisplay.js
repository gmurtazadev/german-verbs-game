// ScoreDisplay.js
import React from 'react';

const ScoreDisplay = ({ score, resetGame }) => {
  return (
    <div className="score-display">
      <h2>Your Score: {score}</h2>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default ScoreDisplay;
