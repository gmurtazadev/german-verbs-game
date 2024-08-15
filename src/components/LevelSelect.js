// LevelSelect.js
import React from 'react';

const LevelSelect = ({ setLevel }) => {
  return (
    <div className="level-select">
      <h2>Select Difficulty Level</h2>
      <button onClick={() => setLevel('beginner')}>Beginner</button>
      <button onClick={() => setLevel('intermediate')}>Intermediate</button>
      <button onClick={() => setLevel('advanced')}>Advanced</button>
    </div>
  );
};

export default LevelSelect;
