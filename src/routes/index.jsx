import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "../pages/play";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/game" element={<h1>game</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
