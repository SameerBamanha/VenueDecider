import React, { useState } from 'react';
import './App.css';

const stringsList = [
  "My Fitness Gym",
  "My Fitness Gym 2",
  "All time best: My Fitness Gym 2",
  "Hamari Fitness Gym",
];

const RandomStringGenerator = () => {
  const [randomString, setRandomString] = useState('');

  const generateRandomString = () => {
    const randomIndex = Math.floor(Math.random() * stringsList.length);
    setRandomString(stringsList[randomIndex] + "🎉");
  };

  return (
    <div className="container">
      <h1>✨ Hi Anushka ✨</h1>
      <p>{randomString}</p>
      <button className="round-button" onClick={generateRandomString}>Click it and Choose a random place</button>
    </div>
  );
};

export default RandomStringGenerator;
