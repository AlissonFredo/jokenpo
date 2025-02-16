function ButtonMenu({
  action = () => {},
  image = "",
  label = "",
  styles = "",
  ...props
}) {
  return (
    <button
      className={`
        p-2 
        rounded-xl 
        flex 
        flex-col 
        justify-between 
        bg-radial 
        from-yellow-600 
        from-30% 
        to-yellow-800 
        drop-shadow-[6px_6px_4px_black] 
        transition 
        delay-150 
        duration-300 
        ease-in-out 
        hover:-translate-y-1 
        hover:scale-110 
        ${styles}
        ${props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
      onClick={action}
      {...props}
    >
      <img src={image} alt="" className="w-15 rotate-90" />
      <p className="text-white font-bold drop-shadow-[6px_6px_4px_black]">
        {label}
      </p>
    </button>
  );
}

export default ButtonMenu;
