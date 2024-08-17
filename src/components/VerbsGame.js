// App.js
import React, { useState } from 'react';
import LevelSelect from './LevelSelect';
import GameBoard from './GameBoard';
import ScoreDisplay from './ScoreDisplay';

import './VerbsGame.css';

function VerbsGame() {
  const [level, setLevel] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setLevel(null);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="verbsGame">
      <h1>German Verbs Memory Game</h1>
      {!level && <LevelSelect setLevel={setLevel} />}
      {level && !gameOver && (
        <GameBoard level={level} setScore={setScore} setGameOver={setGameOver} />
      )}
      {gameOver && <ScoreDisplay score={score} resetGame={resetGame} />}
    </div>
  );
}

export default VerbsGame;
