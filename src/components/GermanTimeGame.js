import React, { useState } from 'react';

// Mapping of times to German phrases including "Viertel", "nach", and "vor"
const timeToGerman = {
  '07:00': 'sieben Uhr',
  '07:15': 'Viertel nach sieben',
  '07:30': 'halb acht',
  '07:45': 'Viertel vor acht',
  '09:00': 'neun Uhr',
  '09:15': 'Viertel nach neun',
  '09:30': 'halb zehn',
  '09:45': 'Viertel vor zehn',
  '12:00': 'zwolf Uhr',
  '12:15': 'Viertel nach zwolf',
  '12:30': 'halb eins',
  '12:45': 'Viertel vor eins',
  '15:00': 'funfzehn Uhr',
  '15:15': 'Viertel nach funfzehn',
  '15:30': 'halb sechzehn',
  '15:45': 'Viertel vor sechzehn',
  '18:00': 'achtzehn Uhr',
  '18:15': 'Viertel nach achtzehn',
  '18:30': 'halb neunzehn',
  '18:45': 'Viertel vor neunzehn',
  '21:00': 'einundzwanzig Uhr',
  '21:15': 'Viertel nach einundzwanzig',
  '21:30': 'halb zweiundzwanzig',
  '21:45': 'Viertel vor zweiundzwanzig',
};

// Function to get a random time
const getRandomTime = () => {
  const times = Object.keys(timeToGerman);
  return times[Math.floor(Math.random() * times.length)];
};

const GermanTimeGame = () => {
  const [currentTime, setCurrentTime] = useState(getRandomTime());
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
    if (guess === timeToGerman[currentTime].toLowerCase()) {
      setAttempts(attempts + 1);
      setMessage(`Congratulations! The correct time was '${timeToGerman[currentTime]}'. You got it in ${attempts + 1} attempts.`);
      setCurrentTime(getRandomTime());
      setAttempts(0);
    } else {
      setAttempts(attempts + 1);
      setMessage(`Incorrect. The correct time was '${timeToGerman[currentTime]}'. Try again.`);
    }
    setGuess(''); // Clear the input field after checking the guess
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Learn German Time</h1>
      <p style={styles.paragraph}>What is the German phrase for the time {currentTime}?</p>
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

export default GermanTimeGame;
