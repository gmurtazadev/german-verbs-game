// App.js
import React, { useState } from 'react';
import LevelSelect from './components/LevelSelect';
import GameBoard from './components/GameBoard';
import ScoreDisplay from './components/ScoreDisplay';
import './App.css';

function App() {
  const [level, setLevel] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setLevel(null);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>German Verbs Memory Game</h1>
      {!level && <LevelSelect setLevel={setLevel} />}
      {level && !gameOver && (
        <GameBoard level={level} setScore={setScore} setGameOver={setGameOver} />
      )}
      {gameOver && <ScoreDisplay score={score} resetGame={resetGame} />}
      <footer>
        <p>
          Created by <a href="https://your-portfolio-link.com">Your Name</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
