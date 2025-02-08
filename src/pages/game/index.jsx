import { useState } from "react";

function Game() {
  const options = ["rock", "paper", "scissor"];

  const [resultado, setResultado] = useState("");

  const sorteaOpcaoComputador = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const play = (optionPlayer) => {
    const opcaoComputador = sorteaOpcaoComputador();

    console.log("Player", optionPlayer);
    console.log("Computador", opcaoComputador);

    if (optionPlayer == opcaoComputador) {
      console.log("Resultado", "DRAW GAME");

      setResultado("DRAW GAME");
    } else if (optionPlayer == "rock" && opcaoComputador == "scissor") {
      console.log("Resultado", "YOU WIN!");

      setResultado("YOU WIN!");
    } else if (optionPlayer == "scissor" && opcaoComputador == "rock") {
      console.log("Resultado", "YOU WIN!");

      setResultado("YOU WIN!");
    } else if (optionPlayer == "scissor" && opcaoComputador == "paper") {
      console.log("Resultado", "YOU WIN!");

      setResultado("YOU WIN!");
    } else {
      console.log("Resultado", "YOU LOSE!");
      setResultado("YOU LOSE!");
    }

    setTimeout(() => {
      setResultado("");
    }, 1000);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>player</p>
          <p>0</p>
        </div>
        <div>
          <p>{resultado}</p>
        </div>
        <div>
          <p>computador</p>
          <p>0</p>
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
        <div style={{ display: "inline-block" }}>
          <p>&#9994;&#10145;&#9995;</p>
        </div>
        <div style={{ display: "inline-block" }}>
          <p>&#9994;&#11013;&#9995;</p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => play(options[0])}>&#9994; pedra</button>
        <button onClick={() => play(options[1])}>&#9995; papel</button>
        <button onClick={() => play(options[2])}>&#9996; tesoura</button>
      </div>
    </div>
  );
}

export default Game;
