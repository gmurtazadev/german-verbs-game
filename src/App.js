import React, { useState } from 'react';
import NumberGuessingGame from './components/NumberGame/NumberGuessingGame';
import VerbsGame from './components/VerbsGame';

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameSelection = (game) => {
    setSelectedGame(game);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Game Selector</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => handleGameSelection('NumberGuessingGame')} style={styles.button}>
          Number Guessing Game
        </button>
        <button onClick={() => handleGameSelection('VerbsGame')} style={styles.button}>
          VerbsGame
        </button>
      </div>
      {selectedGame === 'NumberGuessingGame' && <NumberGuessingGame />}
      {selectedGame === 'VerbsGame' && <VerbsGame />}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  buttonContainer: {
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    margin: '10px',
  },
};

export default App;
