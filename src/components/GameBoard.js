// GameBoard.js
import React, { useState, useEffect } from 'react';

// List of verbs and their translations
const verbs = [
  { german: 'sein', english: 'to be' },
  { german: 'haben', english: 'to have' },
  { german: 'werden', english: 'to become' },
  { german: 'können', english: 'can, to be able to' },
  { german: 'müssen', english: 'must, to have to' },
  { german: 'wollen', english: 'to want' },
  { german: 'sollen', english: 'should' },
  { german: 'dürfen', english: 'may, to be allowed to' },
  { german: 'machen', english: 'to make, to do' },
  { german: 'gehen', english: 'to go' },
  { german: 'kommen', english: 'to come' },
  { german: 'geben', english: 'to give' },
  { german: 'nehmen', english: 'to take' },
  { german: 'sprechen', english: 'to speak' },
  { german: 'essen', english: 'to eat' },
  { german: 'trinken', english: 'to drink' },
  { german: 'lesen', english: 'to read' },
  { german: 'sehen', english: 'to see' },
  { german: 'schreiben', english: 'to write' },
  { german: 'arbeiten', english: 'to work' },
];

// Levels for the game with different numbers of verbs
const levels = {
  beginner: verbs.slice(0, 5),
  intermediate: verbs.slice(0, 10),
  advanced: verbs.slice(0, 20),
};

// Utility function to shuffle an array
const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const GameBoard = ({ level, setScore, setGameOver }) => {
  const [selectedVerb, setSelectedVerb] = useState(null); // Currently selected verb
  const [correctMatches, setCorrectMatches] = useState([]); // List of correctly matched verbs
  const [score, setScoreLocal] = useState(0); // Local score tracking

  // Get verbs for the selected level and shuffle their order
  const currentLevelVerbs = shuffleArray(levels[level]);

  // Handle clicking on a verb
  const handleVerbClick = (verb) => {
    setSelectedVerb(verb);
  };

  // Handle clicking on a translation
  const handleTranslationClick = (translation) => {
    if (selectedVerb && selectedVerb.english === translation) {
      setCorrectMatches([...correctMatches, selectedVerb.german]);
      setScoreLocal(score + 1);
    }
    setSelectedVerb(null);
  };

  // Check if the game is over
  useEffect(() => {
    if (correctMatches.length === currentLevelVerbs.length) {
      setScore(score);
      setGameOver(true);
    }
  }, [correctMatches, currentLevelVerbs.length, score, setGameOver, setScore]);

  // Render the game board with randomized verbs and translations
  return (
    <div className="game-board">
      <div className="verb-list">
        {currentLevelVerbs.map((verb) => (
          <button
            key={verb.german}
            onClick={() => handleVerbClick(verb)}
            disabled={correctMatches.includes(verb.german)}
            style={{
              backgroundColor: correctMatches.includes(verb.german)
                ? 'green'
                : selectedVerb === verb
                ? '#3498db'
                : '#e74c3c',
            }}
          >
            {verb.german}
          </button>
        ))}
      </div>
      <div className="translation-list">
        {shuffleArray(currentLevelVerbs).map((verb) => (
          <button
            key={verb.english}
            onClick={() => handleTranslationClick(verb.english)}
            disabled={correctMatches.includes(verb.german)}
            style={{
              backgroundColor: correctMatches.includes(verb.german)
                ? 'green'
                : '#e74c3c',
            }}
          >
            {verb.english}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
