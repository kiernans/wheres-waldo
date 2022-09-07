import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase-config";
import MainPage from "./routes/MainPage";
import Level from "./routes/Level";
import level1 from "./assets/level1.jpg";
import level2 from "./assets/level2.jpg";
import level3 from "./assets/level3.jpg";
import "./styles/App.css";

const App = () => {
  const [levels, setLevels] = useState([]);
  const levelsCollectionRef = collection(db, "levels");

  useEffect(() => {
    const getLevels = (async () => {
      const data = await getDocs(levelsCollectionRef);
      const dataObj = data.docs.map((doc) => doc.data());
      const dataArr = Object.values(dataObj[0]).sort(
        (a, b) => a.level - b.level
      );
      setLevels(dataArr);
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="level1"
        element={<Level image={level1} level={1} levels={levels} />}
      />
      <Route
        path="level2"
        element={<Level image={level2} level={2} levels={levels} />}
      />
      <Route
        path="level3"
        element={<Level image={level3} level={3} levels={levels} />}
      />
      <Route path="*" element={<h1>Nothing here!</h1>} />
    </Routes>
  );
};

export default App;
