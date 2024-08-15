import React, { useState, useEffect } from 'react';
import { verbs } from '../verbs';

function Conjugation() {
  const [selectedVerb, setSelectedVerb] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (questionIndex >= 10) {
      setIsGameOver(true);
      return;
    }
    generateQuestion();
  }, [questionIndex]);

  const generateQuestion = () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    setSelectedVerb(randomVerb);

    const correctConjugations = Object.values(randomVerb.conjugations);
    const incorrectConjugations = verbs
      .filter(v => v.infinitive !== randomVerb.infinitive)
      .flatMap(v => Object.values(v.conjugations))
      .sort(() => 0.5 - Math.random())
      .slice(0, 6 - correctConjugations.length);

    const allOptions = [...correctConjugations, ...incorrectConjugations].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
  };

  const handleOptionClick = (conjugation) => {
    if (Object.values(selectedVerb.conjugations).includes(conjugation)) {
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div className="App">
      <h1>German Conjugation Game</h1>
      {isGameOver ? (
        <div>
          <h2>Game Over!</h2>
          <p>Your score: {score}</p>
        </div>
      ) : selectedVerb ? (
        <div>
          <h2>Verb: {selectedVerb.infinitive}</h2>
          <div>
            {options.map((option, index) => (
              <button key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default import React, { useState, useEffect } from 'react';
import { verbs } from './verbs';

function App() {
  const [selectedVerb, setSelectedVerb] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (questionIndex >= 10) {
      setIsGameOver(true);
      return;
    }
    generateQuestion();
  }, [questionIndex]);

  const generateQuestion = () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    setSelectedVerb(randomVerb);

    const correctConjugations = Object.values(randomVerb.conjugations);
    const incorrectConjugations = verbs
      .filter(v => v.infinitive !== randomVerb.infinitive)
      .flatMap(v => Object.values(v.conjugations))
      .sort(() => 0.5 - Math.random())
      .slice(0, 6 - correctConjugations.length);

    const allOptions = [...correctConjugations, ...incorrectConjugations].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
  };

  const handleOptionClick = (conjugation) => {
    if (Object.values(selectedVerb.conjugations).includes(conjugation)) {
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div className="App">
      <h1>German Conjugation Game</h1>
      {isGameOver ? (
        <div>
          <h2>Game Over!</h2>
          <p>Your score: {score}</p>
        </div>
      ) : selectedVerb ? (
        <div>
          <h2>Verb: {selectedVerb.infinitive}</h2>
          <div>
            {options.map((option, index) => (
              <button key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Conjugation;
