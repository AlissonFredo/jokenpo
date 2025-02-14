import { useState } from "react";
import Header from "../../components/Header";
import Rock from "../../assets/rock.png";
import Peper from "../../assets/peper.png";
import Scissor from "../../assets/scissor.png";
import ButtonMenu from "../../components/ButtonMenu";
import Container from "../../components/Container";

function Game() {
  const options = ["rock", "paper", "scissor"];

  const [result, setResult] = useState("");
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);
  const [initialGame, setInitialGame] = useState(false);
  const [optionPlayer, setOptionPlayer] = useState("rock");
  const [optionComputer, setOptionComputer] = useState("rock");
  const [lastPlayerOption, setLastPlayerOption] = useState("");
  const [lastComputerOption, setLastComputerOption] = useState("");

  const play = (optionPlayer) => {
    setInitialGame(true);

    setTimeout(() => {
      setResult("Rock");

      setTimeout(() => {
        setResult("Peper");

        setTimeout(() => {
          setResult("Scissor");

          setTimeout(() => {
            const optionComputer = drawOptionComputer();

            if (playersWillRepeatOption(optionPlayer, optionComputer)) return;

            const matchResult = getMatchResult(optionPlayer, optionComputer);

            setOptionPlayer(optionPlayer);
            setOptionComputer(optionComputer);
            setResult(matchResult);

            if (matchResult == "YOU WIN!") {
              handleScorePlayer();
            } else if (matchResult == "YOU LOSE!") {
              handleScoreComputer();
            }

            setTimeout(() => {
              setLastPlayerOption(optionPlayer);
              setLastComputerOption(optionComputer);
              setInitialValues();
            }, 2000);
          }, 300);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  const drawOptionComputer = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const playersWillRepeatOption = (optionPlayer, optionComputer) => {
    if (
      (optionPlayer == "rock" && lastPlayerOption == "rock") ||
      (optionComputer == "rock" && lastComputerOption == "rock")
    ) {
      setResult("Avoid consecutive stones");

      setTimeout(() => setInitialValues(), 2000);

      return true;
    }

    return false;
  };

  const getMatchResult = (optionPlayer, optionComputer) => {
    if (optionPlayer == optionComputer) {
      return "DRAW GAME";
    } else if (optionPlayer == "rock" && optionComputer == "scissor") {
      return "YOU WIN!";
    } else if (optionPlayer == "paper" && optionComputer == "rock") {
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

  const setInitialValues = () => {
    setInitialGame(false);
    setResult("");
    setOptionPlayer("rock");
    setOptionComputer("rock");
  };

  return (
    <Container>
      <div className="flex flex-col justify-between rounded-xl p-8 h-130 w-250 bg-radial from-orange-100 from-10% to-orange-300 drop-shadow-[8px_8px_4px_black]">
        <Header
          scorePlayer={scorePlayer}
          scoreComputer={scoreComputer}
          result={result}
        />

        <div className="flex justify-evenly">
          <div className={initialGame ? "animate-bounce-custom" : ""}>
            <img
              src={
                optionPlayer == "scissor"
                  ? Scissor
                  : optionPlayer == "paper"
                  ? Peper
                  : Rock
              }
              alt=""
              className="w-30 rotate-180"
            />
          </div>
          <div className={initialGame ? "animate-bounce-custom" : ""}>
            <img
              src={
                optionComputer == "scissor"
                  ? Scissor
                  : optionComputer == "paper"
                  ? Peper
                  : Rock
              }
              alt=""
              className="w-30"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <ButtonMenu
            action={() => play(options[0])}
            image={Rock}
            label="Rock"
          />

          <ButtonMenu
            action={() => play(options[1])}
            image={Peper}
            label="Peper"
            styles="ml-2 mr-2"
          />

          <ButtonMenu
            action={() => play(options[2])}
            image={Scissor}
            label="Scissor"
          />
        </div>
      </div>
    </Container>
  );
}

export default Game;
