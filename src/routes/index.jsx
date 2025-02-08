import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "../pages/play";
import Game from "../pages/game";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
