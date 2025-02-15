import { useState } from "react";
import Header from "../../components/Header";
import Rock from "../../assets/rock.png";
import Paper from "../../assets/paper.png";
import Scissors from "../../assets/scissor.png";
import ButtonMenu from "../../components/ButtonMenu";
import Container from "../../components/Container";
import Title from "../../components/Title";

function Game() {
  const options = ["rock", "paper", "scissors"];
  const images = { rock: Rock, paper: Paper, scissors: Scissors };

  const [result, setResult] = useState("");
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);
  const [initialGame, setInitialGame] = useState(false);
  const [optionPlayer, setOptionPlayer] = useState("rock");
  const [optionComputer, setOptionComputer] = useState("rock");
  const [lastPlayerOption, setLastPlayerOption] = useState("");

  const play = (playerChoice) => {
    setInitialGame(true);

    const animationSequence = ["Rock", "Paper", "Scissors"];

    animateResult(animationSequence, () => {
      const computerChoice = drawOptionComputer();

      if (playersWillRepeatOption(playerChoice)) return;

      const matchResult = getMatchResult(playerChoice, computerChoice);

      setOptionPlayer(playerChoice);
      setOptionComputer(computerChoice);
      setResult(matchResult);

      if (matchResult == "YOU WIN!") {
        setScorePlayer((prev) => prev + 1);
      } else if (matchResult == "YOU LOSE!") {
        setScoreComputer((prev) => prev + 1);
      }

      setTimeout(() => {
        setLastPlayerOption(playerChoice);
        resetGame();
      }, 2000);
    });
  };

  const animateResult = (steps, callback, index = 0) => {
    if (index < steps.length) {
      setResult(steps[index]);
      setTimeout(() => animateResult(steps, callback, index + 1), 1000);
    } else {
      callback();
    }
  };

  const drawOptionComputer = () =>
    options[Math.floor(Math.random() * options.length)];

  const playersWillRepeatOption = (playerChoice) => {
    if (playerChoice == "rock" && lastPlayerOption == "rock") {
      setTimeout(resetGame, 2000);
      return true;
    }

    return false;
  };

  const resetGame = () => {
    setInitialGame(false);
    setOptionPlayer("rock");
    setOptionComputer("rock");
    setResult("");
  };

  const getMatchResult = (player, computer) => {
    if (player === computer) return "DRAW GAME";

    const winningMoves = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    return winningMoves[player] === computer ? "YOU WIN!" : "YOU LOSE!";
  };

  return (
    <Container styles="flex-col">
      <Title label={"Jokenpo"} />

      <div className="flex flex-col justify-between rounded-xl p-8 h-130 w-250 bg-radial from-orange-100 from-10% to-orange-300 drop-shadow-[8px_8px_4px_black]">
        <Header
          scorePlayer={scorePlayer}
          scoreComputer={scoreComputer}
          result={result}
        />

        <div className="flex justify-evenly">
          {[optionPlayer, optionComputer].map((option, index) => (
            <div
              key={index}
              className={initialGame ? "animate-bounce-custom" : ""}
            >
              <img
                src={images[option]}
                alt={option}
                className={`w-30 ${index === 0 ? "rotate-180" : ""}`}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          {options.map((option, index) => (
            <ButtonMenu
              disabled={
                initialGame || (lastPlayerOption === "rock" && index === 0)
              }
              key={option}
              action={() => play(option)}
              image={images[option]}
              label={option}
              styles={index === 1 ? "ml-3 mr-3" : ""}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Game;
