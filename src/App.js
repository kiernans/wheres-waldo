import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import Level from "./routes/Level";
import level1 from "./assets/level1.jpg";
import level2 from "./assets/level2.jpg";
import level3 from "./assets/level3.jpg";
import "./styles/App.css";

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="level1" element={<Level image={level1} level={1} />} />
    <Route path="level2" element={<Level image={level2} level={2} />} />
    <Route path="level3" element={<Level image={level3} level={3} />} />
    <Route path="*" element={<h1>Nothing here!</h1>} />
  </Routes>
);

export default App;
