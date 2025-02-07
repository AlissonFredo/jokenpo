import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>play</h1>} />
        <Route path="/game" element={<h1>game</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
