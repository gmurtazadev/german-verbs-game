import React, { useState } from 'react';

// Mapping of numbers from 11 to 20 to German words
const numberToGerman = {
  11: 'elf',
  12: 'zwolf',
  13: 'dreizehn',
  14: 'vierzehn',
  15: 'funfzehn',
  16: 'sechzehn',
  17: 'siebzehn',
  18: 'achtzehn',
  19: 'neunzehn',
  20: 'zwanzig',
};

// Reverse mapping of German words to numbers
const germanToNumber = Object.fromEntries(
  Object.entries(numberToGerman).map(([key, value]) => [value, Number(key)])
);

const GermanNumbersGame = () => {
  const [currentNumber, setCurrentNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    const numbers = Object.keys(numberToGerman);
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

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

      if (guessedNumber === Number(currentNumber)) {
        setMessage(`Congratulations! You guessed the number '${numberToGerman[currentNumber]}' in ${attempts + 1} attempts.`);
        setCurrentNumber(generateRandomNumber());
        setAttempts(0);
      } else {
        setMessage(`Incorrect. The correct German word for ${currentNumber} is '${numberToGerman[currentNumber]}'. Try again.`);
      }
    } else {
      setMessage('Please enter a valid number in German (e.g., elf, zwölf, dreizehn, ... zwanzig).');
    }
    setGuess(''); // Clear the input field after checking the guess
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Learn German Numbers (11-20)</h1>
      <p style={styles.paragraph}>What is the German word for the number {currentNumber}?</p>
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
    margin: '20px auto',
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

export default GermanNumbersGame;
