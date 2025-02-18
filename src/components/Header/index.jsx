function Header({ scorePlayer, scoreComputer, result }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="order-first">
        <p className="text-white font-bold text-xl md:text-3xl mb-2 drop-shadow-[6px_6px_4px_black]">
          Player
        </p>
        <p className="text-start text-white font-bold text-xl md:text-3xl mb-1 drop-shadow-[6px_6px_4px_black]">
          {scorePlayer}
        </p>
      </div>
      <div className="order-3 md:order-2 col-span-2 md:col-span-1">
        <p className="text-center text-white font-bold text-xl md:text-5xl mb-2 drop-shadow-[6px_6px_4px_black]">
          {result}
        </p>
      </div>
      <div className="order-2 md:order-3">
        <p className="text-end text-white font-bold text-xl md:text-3xl mb-2 drop-shadow-[6px_6px_4px_black]">
          Computer
        </p>
        <p className="text-end text-white font-bold text-xl md:text-3xl mb-1 drop-shadow-[6px_6px_4px_black]">
          {scoreComputer}
        </p>
      </div>
    </div>
  );
}

export default Header;
