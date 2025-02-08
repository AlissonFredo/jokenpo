function Game() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "inline-block" }}>
          <p>player</p>
          <p>0</p>
        </div>
        <div style={{ display: "inline-block" }}>
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
        <button>&#9994; pedra</button>
        <button>&#9995; papel</button>
        <button>&#9996; tesoura</button>
      </div>
    </div>
  );
}

export default Game;
