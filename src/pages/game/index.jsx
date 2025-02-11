import { useState } from "react";
import Header from "../../components/Header";
import Rock from "../../assets/rock.png";
import Peper from "../../assets/peper.png";
import Scissor from "../../assets/scissor.png";

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
      <div className="flex flex-col justify-between rounded-xl p-8 h-130 w-250 bg-radial from-orange-100 from-10% to-orange-300 drop-shadow-[8px_8px_4px_black]">
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
          <button
            className="p-2 rounded-xl ml-2 flex flex-col justify-between bg-radial from-yellow-600 from-30% to-yellow-800 drop-shadow-[6px_6px_4px_black] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={() => play(options[0])}
          >
            <img src={Rock} alt="" className="w-15 rotate-90" />
            <p className="text-white font-bold drop-shadow-[6px_6px_4px_black]">
              Rock
            </p>
          </button>

          <button
            className="p-2 rounded-xl ml-4 flex flex-col justify-end bg-radial from-yellow-600 from-30% to-yellow-800 drop-shadow-[6px_6px_4px_black] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={() => play(options[1])}
          >
            <div className="w-15 relative">
              <img
                src={Peper}
                alt=""
                className="w-15 rotate-90 absolute bottom-6 right-0"
              />
              <p className="text-white font-bold drop-shadow-[6px_6px_4px_black]">
                Paper
              </p>
            </div>
          </button>

          <button
            className="p-2 rounded-xl ml-4 flex flex-col justify-end bg-radial from-yellow-600 from-30% to-yellow-800 drop-shadow-[6px_6px_4px_black] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={() => play(options[2])}
          >
            <div className="w-15 relative">
              <img
                src={Scissor}
                alt=""
                className="w-15 rotate-90 absolute bottom-8 right-0"
              />
              <p className="text-white font-bold drop-shadow-[6px_6px_4px_black]">
                Scissor
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
