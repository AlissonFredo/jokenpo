function Header({ scorePlayer, scoreComputer, result }) {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-white font-bold text-3xl mb-2 drop-shadow-[6px_6px_4px_black]">
          Player
        </p>
        <p className="text-center text-white font-bold text-3xl mb-1 drop-shadow-[6px_6px_4px_black]">
          {scorePlayer}
        </p>
      </div>
      <div>
        <p className="text-white font-bold text-5xl mb-2 drop-shadow-[6px_6px_4px_black]">
          {result}
        </p>
      </div>
      <div>
        <p className="text-white font-bold text-3xl mb-2 drop-shadow-[6px_6px_4px_black]">
          Computer
        </p>
        <p className="text-center text-white font-bold text-3xl mb-1 drop-shadow-[6px_6px_4px_black]">
          {scoreComputer}
        </p>
      </div>
    </div>
  );
}

export default Header;
