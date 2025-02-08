import { useState } from "react";

function Game() {
  const options = ["rock", "paper", "scissor"];

  const [result, setResult] = useState("");
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);

  const drawOptionComputer = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const handleScorePlayer = () => {
    setScorePlayer(scorePlayer + 1);
  };

  const handleScoreComputer = () => {
    setScoreComputer(scoreComputer + 1);
  };

  const play = (optionPlayer) => {
    const optionComputer = drawOptionComputer();

    console.log("Player", optionPlayer);
    console.log("Computer", optionComputer);

    if (optionPlayer == optionComputer) {
      console.log("Result", "DRAW GAME");

      setResult("DRAW GAME");
    } else if (optionPlayer == "rock" && optionComputer == "scissor") {
      console.log("Result", "YOU WIN!");

      setResult("YOU WIN!");
      handleScorePlayer();
    } else if (optionPlayer == "scissor" && optionComputer == "rock") {
      console.log("Result", "YOU WIN!");

      setResult("YOU WIN!");
      handleScorePlayer();
    } else if (optionPlayer == "scissor" && optionComputer == "paper") {
      console.log("Result", "YOU WIN!");

      setResult("YOU WIN!");
      handleScorePlayer();
    } else {
      console.log("Result", "YOU LOSE!");
      setResult("YOU LOSE!");
      handleScoreComputer();
    }

    setTimeout(() => {
      setResult("");
    }, 1000);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>Player</p>
          <p>{scorePlayer}</p>
        </div>
        <div>
          <p>{result}</p>
        </div>
        <div>
          <p>Computer</p>
          <p>{scoreComputer}</p>
        </div>
      </div>

      <div
        style={{
          marginBottom: "2rem",
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <p>&#9994;&#10145;&#9995;</p>
        </div>
        <div>
          <p>&#9994;&#11013;&#9995;</p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => play(options[0])}>&#9994; Rock</button>
        <button onClick={() => play(options[1])}>&#9995; Paper</button>
        <button onClick={() => play(options[2])}>&#9996; Scissor</button>
      </div>
    </div>
  );
}

export default Game;
