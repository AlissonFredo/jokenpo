function Container({ children }) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-radial from-yellow-600 from-30% to-yellow-800">
      {children}
    </div>
  );
}

export default Container;
