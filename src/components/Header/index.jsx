function Header({ scorePlayer, scoreComputer, result }) {
  return (
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
  );
}

export default Header;
