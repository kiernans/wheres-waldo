import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase-config";
import MainPage from "./routes/MainPage";
import Level from "./routes/Level";
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
      <Route path="level1" element={<Level level={1} levels={levels} />} />
      <Route path="level2" element={<Level level={2} levels={levels} />} />
      <Route path="level3" element={<Level level={3} levels={levels} />} />
      <Route path="level4" element={<Level level={4} levels={levels} />} />
      <Route path="level5" element={<Level level={5} levels={levels} />} />
      <Route path="level6" element={<Level level={6} levels={levels} />} />
      <Route path="*" element={<h1>Nothing here!</h1>} />
    </Routes>
  );
};

export default App;
