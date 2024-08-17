import React, { useState } from 'react';

// Mapping of numbers to German words
const numberToGerman = {
  0: 'null',
  1: 'eins',
  2: 'zwei',
  3: 'drei',
  4: 'vier',
  5: 'funf',
  6: 'sechs',
  7: 'sieben',
  8: 'acht',
  9: 'neun',
  10: 'zehn',
};

// Reverse mapping of German words to numbers
const germanToNumber = Object.fromEntries(
  Object.entries(numberToGerman).map(([key, value]) => [value, Number(key)])
);

const NumberGuessingGame = () => {
  const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuessChange = (event) => {
    setGuess(event.target.value.toLowerCase());
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkGuess();
    }
  };

  const checkGuess = () => {
    if (guess in germanToNumber) {
      const guessedNumber = germanToNumber[guess];
      setAttempts(attempts + 1);

      if (guessedNumber < randomNumber) {
        setMessage('Too low! Try again.');
      } else if (guessedNumber > randomNumber) {
        setMessage('Too high! Try again.');
      } else {
        setMessage(
          `Congratulations! You guessed the number '${numberToGerman[randomNumber]}' in ${attempts + 1} attempts.`
        );
      }
    } else {
      setMessage('Please enter a valid number in German (e.g., null, eins, zwei, ... zehn).');
    }
    setGuess(''); // Clear the input field after checking the guess
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>German Number Guessing Game</h1>
      <p style={styles.paragraph}>I have thought of a number between 1 and 10. Can you guess it? (Enter the number in German)</p>
      <input
        type="text"
        value={guess}
        onChange={handleGuessChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter your guess in German"
        style={styles.input}
      />
      <button onClick={checkGuess} style={styles.button}>Submit Guess</button>
      <p style={styles.message}>{message}</p>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '50px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#555',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    marginTop: '10px',
  },
  message: {
    fontSize: '18px',
    color: '#333',
    marginTop: '20px',
  },
};

export default NumberGuessingGame;
