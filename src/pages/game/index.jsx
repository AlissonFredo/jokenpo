import { useState } from "react";
import Header from "../../components/Header";

function Game() {
  const options = ["rock", "paper", "scissor"];

  const [result, setResult] = useState("");
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);

  const play = (optionPlayer) => {
    const optionComputer = drawOptionComputer();

    const matchResult = getMatchResult(optionPlayer, optionComputer);

    setResult(matchResult);

    if (matchResult == "YOU WIN!") {
      handleScorePlayer();
    } else if (matchResult == "YOU LOSE!") {
      handleScoreComputer();
    }

    setTimeout(() => setResult(""), 1500);
  };

  const drawOptionComputer = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const getMatchResult = (optionPlayer, optionComputer) => {
    if (optionPlayer == optionComputer) {
      return "DRAW GAME";
    } else if (optionPlayer == "rock" && optionComputer == "scissor") {
      return "YOU WIN!";
    } else if (optionPlayer == "scissor" && optionComputer == "rock") {
      return "YOU WIN!";
    } else if (optionPlayer == "scissor" && optionComputer == "paper") {
      return "YOU WIN!";
    }

    return "YOU LOSE!";
  };

  const handleScorePlayer = () => {
    setScorePlayer(scorePlayer + 1);
  };

  const handleScoreComputer = () => {
    setScoreComputer(scoreComputer + 1);
  };

  return (
    <div className="w-full min-h-screen bg-radial from-yellow-600 from-30% to-yellow-800 flex items-center justify-center">
      <div className="flex flex-col justify-between rounded-xl border-15 border-gray-300 p-8 h-130 w-250 bg-radial from-orange-100 from-10% to-orange-300">
        <Header
          scorePlayer={scorePlayer}
          scoreComputer={scoreComputer}
          result={result}
        />

        <div className="flex justify-between">
          <div>
            <p>&#9994;&#10145;&#9995;</p>
          </div>
          <div>
            <p>&#9994;&#11013;&#9995;</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={() => play(options[0])}>&#9994; Rock</button>
          <button onClick={() => play(options[1])}>&#9995; Paper</button>
          <button onClick={() => play(options[2])}>&#9996; Scissor</button>
        </div>
      </div>
    </div>
  );
}

export default Game;
