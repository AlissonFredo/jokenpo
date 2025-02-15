function Title({ label }) {
  return (
    <h1
      className={`
        text-center 
        text-white 
        font-bold 
        text-6xl 
        mb-6 
        drop-shadow-[6px_6px_4px_black]
      `}
    >
      {label}
    </h1>
  );
}

export default Title;
