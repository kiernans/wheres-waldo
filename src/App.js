import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import Level from "./routes/Level";
import level1 from "./assets/2687207.jpg";
import "./styles/App.css";

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route
      path="level1"
      element={<Level image={level1} level={1} characters="waldo" />}
    />
    <Route path="*" element={<h1>Nothing here!</h1>} />
  </Routes>
);

export default App;
