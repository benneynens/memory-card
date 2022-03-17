import React, { useState, useEffect } from "react";
import Card from "./components/card";
import ScoreBoard from "./components/scoreboard";
import shuffleArray from "./utilities/shuffleArray";

const animals = ["rabbit", "snake", "cat", "dog", "wolf"];

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardArray, reorderCards] = useState(animals);

  const cardClicked = (e) => {
    const cardPreviouslyClicked = e;
    if(cardPreviouslyClicked){
      //update high score
      if (currentScore >= highScore) setHighScore(currentScore);
      //reset current score
      setCurrentScore(0);

      //if clicked, 1) reset the counter, 2) update the high score, 3) set all cards to unclicked

    } else {
      setCurrentScore(currentScore + 1);

    }
  };

  useEffect(() => {
    const newCardOrder = shuffleArray(cardArray);
    reorderCards(newCardOrder);
  }, [currentScore]);

  return (
    <div>
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      {cardArray.map((card) => {
        return <Card key={card} title={card} click={cardClicked} currentScore={currentScore} />;
      })}
    </div>
  );
};

export default App;
